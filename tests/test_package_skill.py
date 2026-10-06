import contextlib
import importlib.util
import io
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
import zipfile

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('package_skill', ROOT / 'scripts/package_skill.py')
package = importlib.util.module_from_spec(spec)
spec.loader.exec_module(package)


class PackageTests(unittest.TestCase):
    def test_archive_matches_all_source_files(self):
        payload = package.build()
        self.assertEqual(payload, package.build())
        with zipfile.ZipFile(io.BytesIO(payload)) as archive:
            expected = {'research-comic/' + p.relative_to(package.SOURCE).as_posix(): p.read_bytes()
                        for p in package.SOURCE.rglob('*') if p.is_file()
                        and '__pycache__' not in p.parts and not p.name.startswith('.')}
            self.assertEqual(set(archive.namelist()), set(expected))
            self.assertIsNone(archive.testzip())
            for name, data in expected.items():
                self.assertNotIn('..', Path(name).parts)
                self.assertEqual(archive.read(name), data)

    def test_check_detects_stale_missing_and_current_download(self):
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / 'research-comic.zip'
            with patch.object(package, 'OUTPUT', output), patch('sys.argv', ['package_skill.py', '--check']):
                with contextlib.redirect_stderr(io.StringIO()), self.assertRaises(SystemExit) as missing:
                    package.main()
                self.assertEqual(missing.exception.code, 1)
                output.write_bytes(b'stale')
                with contextlib.redirect_stderr(io.StringIO()), self.assertRaises(SystemExit) as stale:
                    package.main()
                self.assertEqual(stale.exception.code, 1)
                output.write_bytes(package.build())
                with contextlib.redirect_stdout(io.StringIO()):
                    package.main()


if __name__ == '__main__':
    unittest.main()

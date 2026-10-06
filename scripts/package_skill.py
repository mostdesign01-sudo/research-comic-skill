#!/usr/bin/env python3
"""Build or verify the website's deterministic, source-matched Skill download."""
from pathlib import Path
import argparse
import io
import zipfile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'skills' / 'research-comic'
OUTPUT = ROOT / 'site' / 'downloads' / 'research-comic.zip'


def build():
    buffer = io.BytesIO()
    with zipfile.ZipFile(buffer, 'w', compression=zipfile.ZIP_DEFLATED) as archive:
        for path in sorted(SOURCE.rglob('*')):
            if not path.is_file() or '__pycache__' in path.parts or path.name.startswith('.'):
                continue
            info = zipfile.ZipInfo('research-comic/' + path.relative_to(SOURCE).as_posix(),
                                   date_time=(2026, 1, 1, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            archive.writestr(info, path.read_bytes())
    return buffer.getvalue()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Fail if download differs from Skill source')
    args = parser.parse_args()
    payload = build()
    if args.check:
        if not OUTPUT.exists() or OUTPUT.read_bytes() != payload:
            parser.exit(1, 'Skill download is missing or stale; run python3 scripts/package_skill.py\n')
        print('Skill download matches source')
    else:
        OUTPUT.parent.mkdir(parents=True, exist_ok=True)
        OUTPUT.write_bytes(payload)
        print(f'Built {OUTPUT.relative_to(ROOT)} ({len(payload)} bytes)')


if __name__ == '__main__':
    main()

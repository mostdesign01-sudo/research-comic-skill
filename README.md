# Research Comic · 研究插画

黑白雕刻漫画 × 青蓝知识标记。把研究内容变成可理解、可核对的插画。

网站展示 HTML 发展史、太阳系、人类演化、人工智能发展史、国家历史对照。示例是教学概念图，不替代学术证据；文字、时间与来源独立于图片，可修改。

## 安装 Skill

```bash
git clone https://github.com/mostdesign01-sudo/research-comic-skill.git
mkdir -p ~/.codex/skills
cp -R research-comic-skill/skills/research-comic ~/.codex/skills/
```

刷新或重新打开技能列表后使用：

> 用 $research-comic 把太阳系做成研究插画。先核对八颗行星，图片不含文字，HTML 标签可编辑，明确不按比例。

Skill 是给 AI 的工作方法，不是自动联网的生图服务。需要宿主提供网页检索和图像生成能力；本网站不上传资料、不调用付费 API。

## 应用路径与交付

- AI 讲师 / 内容创作者：把一篇文章或一节课组织成 4–6 张连贯讲解图，先确认大纲，再生成插画
- 技术团队：把机制、流程和取舍讲清楚；内部材料需确认允许使用的生成工具和资料范围
- 通识教学：科学示意、历史时间轴、演化分支或平行比较，以事实关系决定布局
- 品牌 / 产品解释：基于已核准的产品事实和获准素材做解释图；不把营销主张当作证据

这些是可尝试的应用路径，不代表已经验证客户需求。讲师/创作者与品牌两条方向都保留，先做真实样单再决定重点。

复制 [需求单与交付流程](skills/research-comic/references/delivery-workflow.md)，填写受众、资料、核心问题、用途、尺寸和审核人。流程为：需求 → 可核对的大纲 → 用户确认 → 风格样张/批量制作 → 事实与图像权利检查 → 交付与修改。

常规交付是图片、独立可编辑文案、来源、原始提示词和使用限制；按需制作 HTML 排版。图片中的物体不是可编辑矢量图层，也不等于原生可编辑 PPT。宿主缺少检索或生图能力时，只能交付明确标注的资料缺口、大纲或提示词草稿。

试点范围、工时成本和收费假设记录在 [试点验证工作表](docs/pilot-validation.md)；不是公开报价，也没有开通收款或自动下单。

## 本地预览

```bash
cd research-comic-skill
python3 -m http.server 8892 --directory site
```

打开 http://127.0.0.1:8892 。网站无构建依赖，支持 GitHub Pages。事实与提示词在 `site/data.js`，样式在 `site/style.css`，Skill 在 `skills/research-comic/`。

## 来源与版权

来源链接随各主题展示。HTML 历史组沿用用户课程中的六张生成插画；新增图片由 AI 生成，属于概念性教学插画，不是考古、天文观测或历史照片。未包含课程中的个人照片、签到二维码或公司内部资料。

代码与 Skill 文本采用 MIT；图片单独标注为 AI 生成教学素材，不保证独占版权。使用图片前仍需核对生成服务条款、参考素材、商标/肖像及目标用途许可；注明来源不等于获得商业使用授权。转载请保留来源和概念图声明。

## 校验与更新下载包

修改 Skill 后运行 `python3 scripts/package_skill.py`，把同一份 Skill 源文件打包到网站下载目录；再运行 `python3 scripts/package_skill.py --check` 检查是否同步。脚本仅使用 Python 标准库，不联网、不生图。

基本检查：`node --check site/app.js`、`node --check site/data.js`。Skill Creator 可用时另运行其 `quick_validate.py skills/research-comic`。修改网站界面时还需按 `site/qa-notes.md` 的交互范围做桌面与移动端验证；语法检查不代替浏览器验证。

# Research Comic · 研究插画

黑白雕刻漫画 × 青蓝知识标记。把研究内容变成可理解、可核对的插画。

网站展示 HTML 发展史、太阳系、人类演化、人工智能发展史、国家历史对照。示例是教学概念图，不替代学术证据；文字、时间与来源独立于图片，可修改。

## 安装 Skill

```bash
git clone https://github.com/mostdesign01-sudo/research-comic-skill.git
mkdir -p ~/.codex/skills
cp -R research-comic-skill/skills/research-comic ~/.codex/skills/
```

重启或刷新技能列表后使用：

> 用 $research-comic 把太阳系做成研究插画。先核对八颗行星，图片不含文字，HTML 标签可编辑，明确不按比例。

Skill 是给 AI 的工作方法，不是自动联网的生图服务。需要宿主提供网页检索和图像生成能力；本网站不上传资料、不调用付费 API。

## 本地预览

```bash
cd research-comic-skill
python3 -m http.server 8892 --directory site
```

打开 http://127.0.0.1:8892 。网站无构建依赖，支持 GitHub Pages。事实与提示词在 `site/data.js`，样式在 `site/style.css`，Skill 在 `skills/research-comic/`。

## 来源与版权

来源链接随各主题展示。HTML 历史组沿用用户课程中的六张生成插画；新增图片由 AI 生成，属于概念性教学插画，不是考古、天文观测或历史照片。未包含课程中的个人照片、签到二维码或公司内部资料。

代码与 Skill 文本采用 MIT；图片单独标注为 AI 生成教学素材，不保证独占版权。转载请保留来源和概念图声明。

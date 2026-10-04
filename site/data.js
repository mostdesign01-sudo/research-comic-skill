const stylePrompt = 'Editorial scientific comic, fine monochrome engraving, white crosshatching and stippling on near-black paper, restrained halftone texture, sparse cyan accents under 10%, meaningful depth, generous margins, no baked-in text, no generic cyberpunk or glossy chrome.';
const topics = [
{id:'html',name:'HTML 发展史',en:'WEB HISTORY',title:'从连接文档，到连接想法。',intro:'六幅已有课程插画，串起网页语言与创作方式的变化。时间和说明独立排版，方便继续修改。',warning:'精选节点，不是完整标准史。AI 辅助创作改变的是工作流程，不是一个新的 HTML 版本。',sources:[['W3C · HTML 历史','https://www.w3.org/People/Raggett/book4/ch02.html'],['HTML5 · 2014 推荐标准','https://www.w3.org/TR/2014/REC-html5-20141028/'],['WHATWG · 动态标准','https://html.spec.whatwg.org/']],prompt:stylePrompt+' Six separate educational panels: early computers linking scientific documents; graphical browser; common web standards; video/audio/canvas; continuously evolving HTML; humans describing a web page to AI. Each panel explains one change. No dates or lettering in the image.',items:[
['1989—1991','HTML 诞生','Tim Berners-Lee 提出万维网构想；早期 HTML 让科学文档可以通过链接相互连接。','1990-linked-information.webp'],
['1993—1995','网页开始有画面','Mosaic 推动图形化浏览，图片与文字出现在同一个页面，网页不再只是文档。','1993-open-web.webp'],
['1997—1999','共同规则形成','HTML 3.2、4.01 等标准推动浏览器协作。结构与表现逐渐分工，CSS 负责样式。','1999-common-standard.webp'],
['2004—2014','多媒体成为原生能力','HTML5 于 2014 年成为 W3C 推荐标准，视频、音频与 Canvas 拓展了网页表达。','2014-html5-multimedia.webp'],
['2019—2022','持续演进的标准','2019 年 W3C 与 WHATWG 协作推进单一 HTML 标准，网页能力持续更新。','2019-living-standard.webp'],
['AI 辅助创作','从描述需求开始','用自然语言提出内容与交互目标，再检查 AI 生成的 HTML、CSS 和 JavaScript。','ai-now-natural-language.webp']]},
{id:'solar',name:'太阳系',en:'SOLAR SYSTEM',title:'八颗行星，一张研究示意图。',intro:'从太阳向外阅读。插画负责建立整体印象，下面的文字负责准确区分行星。',image:'solar.png',caption:'太阳系概念示意 · 距离与大小不按比例',warning:'图中的轨迹是构图示意，不是轨道测量；月球不是第九颗行星。冥王星属于矮行星。',sources:[['NASA · Planets','https://science.nasa.gov/solar-system/planets/'],['NASA · Solar System Facts','https://science.nasa.gov/solar-system/solar-system-facts/']],prompt:stylePrompt+' A large sun at left and exactly eight planets in order: Mercury, Venus, Earth with moon, Mars, striped Jupiter, ringed Saturn, Uranus, Neptune. Curved diagram, schematic not to scale. Distinct separated silhouettes. No labels.',items:[
['01 / MERCURY','水星','最靠近太阳的行星，也是八颗行星中最小的一颗。'],
['02 / VENUS','金星','厚重大气带来强烈温室效应，表面温度高于水星。'],
['03 / EARTH','地球','我们生活的岩石行星，目前已知拥有生命的世界。'],
['04 / MARS','火星','红色的岩石行星，表面保留着过去水活动的线索。'],
['05 / JUPITER','木星','太阳系最大的行星，属于气态巨行星。'],
['06 / SATURN','土星','气态巨行星，以显著的环系统闻名。'],
['07 / URANUS','天王星','冰巨行星，具有非常倾斜的自转轴。'],
['08 / NEPTUNE','海王星','八颗行星中最远离太阳的一颗，属于冰巨行星。']]},
{id:'human',name:'人类演化',en:'HUMAN ORIGINS',title:'不是一条直线，而是一棵分支树。',intro:'用化石、工具和研究线索呈现人类演化。我们强调证据和分支，不画“越来越高级”的队列。',image:'human.png',caption:'化石与分支关系的教学概念插画 · 非具体化石复原',warning:'图中连接是“研究线索”示意，不代表确定的直接祖先关系。物种关系仍存在研究争议。',sources:[['Smithsonian · Homo sapiens','https://humanorigins.si.edu/evidence/human-fossils/species/homo-sapiens'],['Smithsonian · 常见问题','https://humanorigins.si.edu/education/frequently-asked-questions']],prompt:stylePrompt+' Research of human evolution as branching visual connections in a natural-history study. Fossil skulls on separate shelves, a hand inspecting a stone tool, cyan lines connecting research nodes. No linear ape-to-human march. Conceptual museum illustration, no text.',items:[
['分支 / BRANCHES','演化不是阶梯','不同人类物种有各自的演化路径；一些物种曾在相近时期共存。'],
['约 30 万年前','智人出现','目前证据表明，Homo sapiens 起源于非洲，距今约 30 万年。'],
['证据 / EVIDENCE','由线索重建过去','化石、考古与遗传资料共同帮助研究者理解过去，不只依靠外形推断。']]},
{id:'ai',name:'人工智能发展史',en:'AI HISTORY',title:'从研究问题，到日常创作工具。',intro:'选五个节点讲清方向变化：领域形成、专门任务、深度学习、注意力架构、面向公众的对话。',image:'ai.png',caption:'研究桌上的技术里程碑 · 概念性物件组合',warning:'这是选择性的技术史，不是完整 AI 年表；象征性物件不代表所有技术的具体硬件。',sources:[['Dartmouth · 1956','https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth'],['IBM · Deep Blue','https://www.ibm.com/history/deep-blue'],['AlexNet · 原论文','https://www.cs.toronto.edu/~kriz/imagenet_classification_with_deep_convolutional.pdf'],['Transformer · 原论文','https://arxiv.org/abs/1706.03762'],['OpenAI · ChatGPT 发布','https://openai.com/index/chatgpt/']],prompt:stylePrompt+' A continuous conceptual research desk: a 1950s notebook and computer, a chess board, a layered neural-network diagram, attention connections, a contemporary conversation screen. No robots, brains, lettering, or numbers.',items:[
['1956','一个研究领域形成','达特茅斯夏季研究项目成为人工智能领域的重要起点。'],
['1997','专门任务的突破','Deep Blue 在国际象棋对抗赛中击败当时的世界冠军 Kasparov。'],
['2012','深度学习改变视觉识别','AlexNet 展示深度卷积神经网络在大规模图像分类中的能力。'],
['2017','Transformer 提出','Attention Is All You Need 提出基于注意力的架构，成为后续模型的重要基础。'],
['2022','对话进入公众视野','ChatGPT 公开发布，使许多人开始通过自然语言直接使用 AI。']]},
{id:'countries',name:'国家历史对照',en:'PARALLEL HISTORIES',title:'三个视角，不同的历史坐标。',intro:'中国、日本、英格兰／英国的精选节点并排阅读。用于示范跨地区研究布局，不是文明排名。',image:'countries.png',caption:'秦代、江户时代与中世纪英格兰的概念插画',warning:'各栏独立选点，事件并非同一年代或等价制度。插画是艺术概括，不是考据复原。',sources:[['Smithsonian · 中国历史时间轴','https://asia.si.edu/education/educator-resources/teaching-china-with-the-smithsonian/interactives/timelines/timeline-of-chinese-history-art-and-culture/'],['日本国立公文书馆 · 历史','https://www.archives.go.jp/exhibition/digital/tenkataihen/history.html'],['UK Parliament · Magna Carta','https://www.parliament.uk/magnacarta/'],['UK Parliament · Bill of Rights','https://www.parliament.uk/about/living-heritage/evolutionofparliament/parliamentaryauthority/revolution/collections1/collections-glorious-revolution/billofrights/']],prompt:stylePrompt+' Three equal separate panels: Qin-era Chinese bronze, bamboo slips and palace; Japanese Edo wooden architecture and scholarly scroll; medieval English stone hall with charter and wax seal. No flags, modern maps, stereotypes, rankings, or text.',items:[
['中国 / 公元前 221 年','秦统一','以秦统一为选点，观察政治整合与制度建立。'],
['中国 / 公元前 206 年—公元 220 年','汉代','另一段重要历史时期；这里只展示时间坐标，不压缩为单一结论。'],
['日本 / 1603 年','江户幕府建立','以德川家康建立幕府为节点，观察政权与社会秩序。'],
['日本 / 1867 年','大政奉还','幕府向天皇交还政权，是近代转折中的重要事件。'],
['英格兰 / 1215 年','大宪章','最初涉及国王与贵族权力关系，不应当作现代普遍人权宣言。'],
['英格兰 / 1689 年','权利法案','以议会权利与王权约束为观察点，理解宪政发展的一个节点。']]}
];
// Exact prompts used for the four new image-generation calls, 2026-10-04.
const generationPrompts = {
solar: "Create a wide 3:2 educational editorial comic illustration of our solar system, on near-black paper. Fine white engraved crosshatching, stippling, subtle halftone print texture, sparse pale cyan accents under 10 percent. A large glowing sun at left and exactly eight distinctive planets arranged across a curved diagram: Mercury, Venus, Earth with moon, Mars, Jupiter striped, Saturn ringed, Uranus and Neptune. Schematic not to scale. Tangible astronomical research atlas atmosphere, carefully separated silhouettes, restrained diagram lines, generous margin, no lettering or labels anywhere, no realistic photograph, no glossy 3D. A beautiful readable monochrome scientific engraving with depth.",
human: "Wide editorial scientific comic engraving on near-black paper, fine white crosshatching and stippling with sparse pale cyan. Show the research of human evolution as a branching visual tree in a natural history study: fossil skulls on separate shelves, a hand inspecting a stone tool, branching cyan connecting lines leading to separate coexistence nodes. No ape-to-human linear march, no direct modern ape ancestry, no text or numbers, no bones invented as evidence; conceptual museum illustration. Rich narrative detail but legible silhouettes, quiet empty margins, 3:2 landscape.",
ai: "Wide 3:2 editorial research comic engraving on near-black paper, white detailed crosshatching and stippling, sparse cyan. A continuous conceptual research desk showing AI milestones through artifacts: an old 1950s research notebook and electronic computer at left, a chess board in middle-left, a layered neural network diagram at center, attention connections and a contemporary conversational screen at right. Sophisticated museum educational comic, consistent thin etched lines and paper grain, no robots, no brains, no neon spectacle, no baked-in text or numbers, generous margins.",
countries: "Wide 3:2 educational editorial engraving comic, near-black paper, fine monochrome crosshatching and stippling, tiny cyan accents. Three clearly separated equal vertical panels for selected histories: left ancient Chinese Qin-era bronze and bamboo written slips beside palace architecture; middle Japanese Edo-era wooden architecture with scholarly scroll; right medieval English stone hall with parchment charter and wax seal. Objects and architectural atmosphere, no stereotyped faces, no flags, no modern maps, no suggestion of civilization rankings, no text. Elegant research atlas, coherent texture, generous margins."
};
topics.forEach(t => {
  if (t.image) t.image = t.image.replace('.png','.webp');
  if (generationPrompts[t.id]) t.prompt = generationPrompts[t.id];
});

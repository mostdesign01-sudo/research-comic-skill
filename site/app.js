const tabs = document.querySelector('.tabs');
const panel = document.querySelector('#topic');
const dialog = document.querySelector('#image-dialog');
let active = 0;
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
tabs.innerHTML = topics.map((t,i) => `<button class="tab" id="tab-${t.id}" role="tab" aria-controls="topic" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-index="${i}"><small>0${i+1} / ${t.en}</small>${t.name}</button>`).join('');
function render(index) {
  active = index;
  const t = topics[index];
  tabs.querySelectorAll('button').forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;});
  panel.setAttribute('aria-labelledby', 'tab-'+t.id);
  panel.innerHTML = `<div class="topic-head"><div><h3>${t.title}</h3><p>${t.intro}</p></div><span class="topic-count">${String(t.items.length).padStart(2,'0')} FIELD NOTES</span></div>${t.image?`<figure class="feature-image"><button data-image="${t.image}" data-caption="${t.caption}" aria-label="放大${t.name}插画"><img src="assets/${t.image}" alt="${t.caption}" loading="lazy"></button><figcaption><span>${t.caption}</span><span>点击放大 ↗</span></figcaption></figure>`:''}<div class="timeline">${t.items.map(([date,title,desc,img])=>`<section class="milestone">${img?`<button class="thumb" data-image="${img}" data-caption="${title} · 教学概念插画" aria-label="放大${title}插画"><img src="assets/${img}" alt="${title}的漫画插画" loading="lazy"></button>`:''}<div class="milestone-body"><span class="date">${date}</span><h4>${title}</h4><p>${desc}</p></div></section>`).join('')}</div><p class="warning">${t.warning}</p><div class="sources"><span>核对来源 ↗</span>${t.sources.map(([name,url])=>`<a href="${url}" target="_blank" rel="noopener">${name} ↗</a>`).join('')}</div><details class="prompt"><summary>生成指令 / 让这套风格可以复用</summary><p>${escapeHTML(t.prompt)}</p><button class="copy">复制生成指令</button><p>原始生成指令保存在源码；HTML 组为复用已有素材的重生成建议。新增组为真实生图指令。输出属于概念插画。</p></details>`;
}
tabs.addEventListener('click',e=>{const b=e.target.closest('button');if(b)render(Number(b.dataset.index));});
tabs.addEventListener('keydown',e=>{
  if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;
  e.preventDefault(); const i=e.key==='Home'?0:e.key==='End'?topics.length-1:(active+(e.key==='ArrowRight'?1:-1)+topics.length)%topics.length;
  render(i);tabs.querySelectorAll('button')[i].focus();
});
panel.addEventListener('click',async e=>{
  const imageButton=e.target.closest('[data-image]');
  if(imageButton){dialog.querySelector('img').src='assets/'+imageButton.dataset.image;dialog.querySelector('img').alt=imageButton.dataset.caption;dialog.querySelector('p').textContent=imageButton.dataset.caption;dialog.showModal();}
  if(e.target.closest('.copy')){
    try {await navigator.clipboard.writeText(topics[active].prompt);toast('生成指令已复制');}
    catch {toast('浏览器不允许复制，请选中上方指令手动复制');}
  }
});
dialog.querySelector('button').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
let toastTimer;
function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),2500);}
render(0);

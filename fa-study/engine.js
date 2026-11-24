{
/* ================= data prep ================= */
const BOX={tip:['Exam Tip','!'],ex:['Example','E'],case:['Case in Point','C'],warn:['Watch Out','!'],deep:['Going Deeper','+'],ph:['Philippine Angle','P'],fix:['Slide Check','✓'],kt:['Key Terms','K']};
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const GL={}; // lower term -> {t,d,c}
for(const ch of CH){for(const [t,d] of Object.entries(ch.terms)){const k=t.toLowerCase();if(!GL[k])GL[k]={t,d,c:ch.n}}}
function decorate(html,ch,counter){
  const tp=document.createElement('template');tp.innerHTML=html;const r=tp.content;
  for(const [cls,[lab,ic]] of Object.entries(BOX)){
    for(const el of $$('.'+cls,r)){
      el.classList.add('box');
      if(cls==='kt'){
        const ts=(el.dataset.terms||'').split('|').filter(Boolean);
        el.innerHTML='<dl>'+ts.map(t=>{const g=ch.terms[t]||(GL[t.toLowerCase()]||{}).d||'';return `<dt>${esc(t)}</dt><dd>${g}</dd>`}).join('')+'</dl>';
      }
      let title=lab;
      if(cls==='ex'){counter.ex++;title=`Example ${ch.n}.${counter.ex}`+(el.dataset.t?` — ${el.dataset.t}`:'')}
      else if(el.dataset.t)title+=` — ${el.dataset.t}`;
      el.insertAdjacentHTML('afterbegin',`<div class="bh"><i>${ic}</i>${esc(title)}</div>`);
    }
  }
  for(const t of $$('table',r)){if(!(t.parentElement&&t.parentElement.classList.contains('tw'))){const w=document.createElement('div');w.className='tw';t.replaceWith(w);w.appendChild(t)}
    if(t.classList.contains('stack')){const hd=[...(t.rows[0]?.cells||[])].map(c=>c.textContent);for(const row of [...t.rows].slice(1))[...row.cells].forEach((c,i)=>c.dataset.l=hd[i]||'')}}
  const d=document.createElement('div');d.appendChild(r);return d.innerHTML;
}
const SEQ=[];
for(const ch of CH){
  const cnt={ex:0};
  ch.why=decorate(ch.why,ch,{ex:0});
  ch.lessons.forEach((l,i)=>{l.h=decorate(l.h,ch,cnt);l.id=`c${ch.n}-${i+1}`;l.num=`${ch.n}.${i+1}`});
  ch.pages=[{id:`c${ch.n}`,type:'open',ch,label:'Chapter opener'},...ch.lessons.map((l,i)=>({id:l.id,type:'les',ch,l,i,label:`${l.num} ${l.t}`})),{id:`c${ch.n}-review`,type:'rev',ch,label:'Review & Practice'}];
  SEQ.push(...ch.pages);
}
const BYID=Object.fromEntries(SEQ.map((p,i)=>[p.id,Object.assign(p,{idx:i})]));
/* ================= state ================= */
const store={get(k,d){try{const v=localStorage.getItem('fa-'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('fa-'+k,JSON.stringify(v))}catch(e){}}};
const visited=new Set(store.get('visited',[]));
let mode=store.get('mode','sec');
const best=store.get('best',{});
let CUR=null, renderedChapter=null;
function markVisited(id){if(!visited.has(id)){visited.add(id);store.set('visited',[...visited]);refreshTicks()}}
function chProgress(ch){const ids=ch.pages.filter(p=>p.type!=='open').map(p=>p.id);return [ids.filter(i=>visited.has(i)).length,ids.length]}
/* ================= shell ================= */
const app=$('#app');
app.innerHTML=`<header class="bar">
 <a class="home" href="#home" aria-label="Home"><i id="chb">FA</i><span id="bt">Financial Accounting</span></a>
 <div class="wrap-rel"><button class="bbtn" id="mbtn" aria-expanded="false" aria-haspopup="true">☰ <span class="hide-s">Lessons</span></button><div class="pop menu" id="menu" hidden></div></div>
 <button class="bbtn" id="prev" aria-label="Previous page">‹</button>
 <button class="bbtn" id="next" aria-label="Next page">›</button>
 <div class="seg" role="group" aria-label="Reading mode"><button id="mSec" aria-pressed="true">Sections</button><button id="mScr" aria-pressed="false">Scroll</button></div>
 <button class="bbtn" id="tbtn" aria-label="Switch to night mode" title="Day / night mode">☾</button>
 <div class="wrap-rel"><button class="bbtn" id="pbtn" aria-expanded="false">PDF</button><div class="pop pdfm" id="pmenu" hidden>
  <button data-pdf="section">This section<small>The page you are reading</small></button>
  <button data-pdf="chapter">Whole chapter<small>All lessons + summary & key terms</small></button></div></div>
</header>
<div class="layout" id="layout"><nav class="side" id="side" aria-label="Chapter outline"></nav><main id="main"></main></div><div id="pdfsrc" aria-hidden="true" style="position:absolute;left:-9999px;top:0;width:720px"></div>`;
const main=$('#main'), side=$('#side'), layout=$('#layout');
const root=document.documentElement;
function curTheme(){const t=root.getAttribute('data-theme');if(t==='dark'||t==='light')return t;return matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}
function applyTheme(t){root.setAttribute('data-theme',t);const b=$('#tbtn');b.textContent=t==='dark'?'☀':'☾';b.setAttribute('aria-label',t==='dark'?'Switch to day mode':'Switch to night mode');b.setAttribute('aria-pressed',t==='dark')}
{const saved=store.get('theme',null);applyTheme(saved||curTheme())}
$('#tbtn').onclick=()=>{const t=curTheme()==='dark'?'light':'dark';applyTheme(t);store.set('theme',t)};
function buildMenu(){
  const cid=CUR?.ch?.n;
  $('#menu').innerHTML=CH.map(ch=>`<details ${ch.n===cid?'open':''}><summary><b style="background:${ch.color}">${ch.n}</b>${esc(ch.title)}</summary>`+
    ch.pages.map(p=>`<a href="#${p.id}" data-id="${p.id}" class="${CUR&&p.id===CUR.id?'cur':''}"><span class="tick">${visited.has(p.id)?'✓':''}</span>${esc(p.label)}</a>`).join('')+'</details>').join('');
}
function refreshTicks(){for(const a of $$('[data-id]')){const t=$('.tick',a);if(t)t.textContent=visited.has(a.dataset.id)?'✓':''}}
function closePops(){for(const [b,m] of [['#mbtn','#menu'],['#pbtn','#pmenu']]){$(m).hidden=true;$(b).setAttribute('aria-expanded','false')}}
$('#mbtn').onclick=e=>{e.stopPropagation();const m=$('#menu');const o=m.hidden;closePops();if(o){buildMenu();m.hidden=false;$('#mbtn').setAttribute('aria-expanded','true');$('#menu a.cur')?.scrollIntoView({block:'center'})}};
$('#pbtn').onclick=e=>{e.stopPropagation();const m=$('#pmenu');const o=m.hidden;closePops();if(o&&CUR){m.hidden=false;$('#pbtn').setAttribute('aria-expanded','true')}};
document.addEventListener('click',e=>{if(!e.target.closest('.pop'))closePops();else if(e.target.closest('#menu a'))closePops()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closePops();hideTip()}
  if(e.altKey||e.ctrlKey||e.metaKey||e.target.closest('input,textarea,select,[contenteditable]'))return;
  if(e.key==='ArrowLeft'){e.preventDefault();go(-1)}if(e.key==='ArrowRight'){e.preventDefault();go(1)}});
$('#prev').onclick=()=>go(-1);$('#next').onclick=()=>go(1);
function go(d){if(!CUR){if(d>0)location.hash=SEQ[0].id;return}const n=SEQ[CUR.idx+d];if(n)location.hash=n.id}
function setMode(m){mode=m;store.set('mode',m);$('#mSec').setAttribute('aria-pressed',m==='sec');$('#mScr').setAttribute('aria-pressed',m==='scroll');renderedChapter=null;route(true)}
$('#mSec').onclick=()=>setMode('sec');$('#mScr').onclick=()=>setMode('scroll');
$('#mSec').setAttribute('aria-pressed',mode==='sec');$('#mScr').setAttribute('aria-pressed',mode==='scroll');
/* ================= renderers ================= */
function openerHTML(ch,inScroll){
  const [d,t]=chProgress(ch);const first=ch.pages[1];
  return `<div class="plate"><div class="num">${ch.n}</div><div><div class="lab">Chapter ${ch.n}</div><h1>${esc(ch.title)}</h1><p>${esc(ch.hook)}</p></div></div>
  <h2>Learning Objectives</h2><ol class="los">${ch.los.map((l,i)=>`<li><b>LO${i+1}</b><span>${l}</span></li>`).join('')}</ol>
  <h2>Why this matters</h2>${ch.why}
  ${inScroll?'':`<a class="start" href="#${first.id}">${d?'Continue':'Start'} chapter →</a>`}
  <div class="toc">${ch.pages.slice(1).map(p=>`<a href="#${p.id}"><span>${p.type==='les'?p.l.num:'✓'}</span><span>${esc(p.type==='les'?p.l.t:p.label)}</span><span class="tick" style="margin-left:auto">${visited.has(p.id)?'✓':''}</span></a>`).join('')}</div>`;
}
function lessonHTML(ch,l){return `<div class="crumb"><span>Chapter ${ch.n} · ${esc(ch.title)}</span>${l.lo?`<span class="lotag">LO${l.lo}</span>`:''}</div><h1 class="lt"><span>${l.num}</span> ${esc(l.t)}</h1>${l.h}`}
function reviewHTML(ch,print){
  const sum=`<h2>Summary</h2>`+ch.sum.map((s,i)=>`<div class="sumlo"><b>LO${i+1}</b><div>${s}</div></div>`).join('');
  const terms=Object.entries(ch.terms).sort((a,b)=>a[0].localeCompare(b[0]));
  const kt=`<h2>Key Terms</h2><dl class="gloss">${terms.map(([t,d])=>`<dt>${esc(t)}</dt><dd>${d}</dd>`).join('')}</dl>`;
  if(print)return `<h1 class="lt">Review — Chapter ${ch.n}</h1>${sum}${kt}`;
  return `<div class="crumb"><span>Chapter ${ch.n} · ${esc(ch.title)}</span></div><h1 class="lt"><span>✓</span> Review &amp; Practice</h1>
  <div class="tabs" role="tablist">${['Summary','Key Terms','Multiple Choice','Short Answer','Problems'].map((t,i)=>`<button role="tab" aria-selected="${i===0}" data-tab="${i}">${t}</button>`).join('')}</div>
  <div data-pane="0">${sum.replace('<h2>Summary</h2>','')}</div>
  <div data-pane="1" hidden>${kt.replace('<h2>Key Terms</h2>','')}</div>
  <div data-pane="2" hidden class="noterm"><div class="score" data-score><span>Score: 0 / 0</span><button class="bbtn" data-reset>Reset</button></div>
   ${ch.mcq.map((m,i)=>`<div class="mcq" data-q="${i}"><div class="q">${i+1}. ${m[0]}</div>${m[1].map((o,j)=>`<button class="o" data-o="${j}">${String.fromCharCode(65+j)}. ${o}</button>`).join('')}<div class="fb" hidden></div></div>`).join('')}</div>
  <div data-pane="3" hidden>${ch.sa.map((s,i)=>`<div class="reveal"><div><b class="sans">Q${i+1}.</b> ${s[0]}</div><details><summary>Show model answer</summary><div class="ans">${s[1]}</div></details></div>`).join('')}</div>
  <div data-pane="4" hidden>${ch.prob.map((s,i)=>`<div class="reveal"><div><b class="sans">Problem ${i+1}.</b> ${s[0]}</div><details><summary>Show worked solution</summary><div class="ans">${s[1]}</div></details></div>`).join('')}</div>`;
}
function pnHTML(p){
  const a=SEQ[p.idx-1],b=SEQ[p.idx+1];
  const lab=q=>q.type==='open'?`Chapter ${q.ch.n}: ${q.ch.title}`:q.type==='rev'?`Chapter ${q.ch.n} Review & Practice`:`${q.l.num} ${q.l.t}`;
  return `<div class="pn">${a?`<a href="#${a.id}"><small>‹ Previous</small>${esc(lab(a))}</a>`:'<span></span>'}${b?`<a class="nx" href="#${b.id}"><small>Next ›</small>${esc(lab(b))}</a>`:''}</div>`;
}
function pageBody(p){return p.type==='open'?openerHTML(p.ch,mode==='scroll'):p.type==='les'?lessonHTML(p.ch,p.l):reviewHTML(p.ch)}
function sideHTML(ch){return `<h4>Chapter ${ch.n}</h4><div class="ct">${esc(ch.title)}</div>`+ch.pages.map(p=>`<a href="#${p.id}" data-id="${p.id}"><span class="tick">${visited.has(p.id)?'✓':''}</span><span>${esc(p.type==='open'?'Opener & objectives':p.label)}</span></a>`).join('')+`<a class="all" href="#home">← All chapters</a>`}
function homeHTML(){
  const tot=SEQ.filter(p=>p.type!=='open').length,done=SEQ.filter(p=>p.type!=='open'&&visited.has(p.id)).length;
  return `<div class="hero"><h1>Financial Accounting, explained from scratch</h1><p>Ten textbook chapters built from your lecture decks — every term explained in plain English, every slide example worked step by step, with practice at the end of each chapter.</p>
  <div class="stats"><div><b>${done} / ${tot}</b>pages read</div><div><b>${CH.reduce((a,c)=>a+c.lessons.length,0)}</b>lessons</div><div><b>${CH.reduce((a,c)=>a+c.mcq.length,0)}</b>practice questions</div></div></div>
  <div class="grid">${CH.map(ch=>{const [d,t]=chProgress(ch);const b=best[ch.n];return `<a class="card" href="#c${ch.n}" style="--c:${ch.color}"><div class="top"><b>${ch.n}</b><span>${esc(ch.title)}</span></div><div class="bot"><p>${esc(ch.hook)}</p><div class="meter" role="img" aria-label="${d} of ${t} pages read"><i style="width:${Math.round(d/t*100)}%"></i></div><div class="row"><span>${d}/${t} pages read</span><span>${b!=null?`Quiz best ${b}/${ch.mcq.length}`:`${ch.lessons.length} lessons`}</span></div></div></a>`}).join('')}</div>`;
}
/* ================= glossary underline + popups ================= */
const termKeys=Object.keys(GL).sort((a,b)=>b.length-a.length);
const TRX=new RegExp('(?<![\\w-])('+termKeys.map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')(?:s|es)?(?![\\w-])','gi');
const SKIP='h1,h2,h3,h4,a,button,.kt,.bh,.gl,svg,summary,.noterm,dt,th,.plate,.crumb,.toc,.lotag,script,style';
function underline(root){
  const used=new Set();
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.nodeValue.trim().length<3||n.parentElement.closest(SKIP)?2:1});
  const nodes=[];while(w.nextNode())nodes.push(w.currentNode);
  for(const n of nodes){
    const s=n.nodeValue;TRX.lastIndex=0;let m,last=0,frag=null;
    while((m=TRX.exec(s))){const k=m[1].toLowerCase();if(used.has(k))continue;used.add(k);
      frag=frag||document.createDocumentFragment();frag.append(s.slice(last,m.index));
      const sp=document.createElement('span');sp.className='gl';sp.tabIndex=0;sp.dataset.k=k;sp.textContent=m[0];frag.append(sp);last=m.index+m[0].length}
    if(frag){frag.append(s.slice(last));n.replaceWith(frag)}
  }
}
const tip=document.createElement('div');tip.className='gtip';tip.hidden=true;tip.setAttribute('role','tooltip');document.body.appendChild(tip);
let tipFor=null;
function showTip(el){const g=GL[el.dataset.k];if(!g)return;tipFor=el;tip.innerHTML=`<b>${esc(g.t)}</b>${g.d}`;tip.hidden=false;
  const r=el.getBoundingClientRect();const tw=Math.min(300,innerWidth-16);tip.style.maxWidth=tw+'px';
  let x=Math.max(8,Math.min(r.left+scrollX,scrollX+innerWidth-tw-8));tip.style.left=x+'px';
  const th=tip.offsetHeight;let y=r.bottom+scrollY+8;if(r.bottom+th+12>innerHeight)y=r.top+scrollY-th-8;tip.style.top=y+'px'}
function hideTip(){tip.hidden=true;tipFor=null}
document.addEventListener('mouseover',e=>{const g=e.target.closest?.('.gl');if(g)showTip(g);else if(tipFor&&!e.target.closest?.('.gtip'))hideTip()});
document.addEventListener('focusin',e=>{const g=e.target.closest?.('.gl');if(g)showTip(g)});
document.addEventListener('click',e=>{const g=e.target.closest('.gl');if(g){if(tipFor===g)hideTip();else showTip(g)}else if(tipFor)hideTip()},true);
addEventListener('scroll',()=>{if(tipFor)hideTip()},{passive:true});
/* ================= review wiring ================= */
function wireReview(root,ch){
  for(const tb of $$('[data-tab]',root))tb.onclick=()=>{for(const b of $$('[data-tab]',root))b.setAttribute('aria-selected',b===tb);for(const p of $$('[data-pane]',root))p.hidden=p.dataset.pane!==tb.dataset.tab};
  const ans={};
  const upd=()=>{const n=Object.keys(ans).length,c=Object.values(ans).filter(Boolean).length;const s=$('[data-score] span',root);if(s)s.textContent=`Score: ${c} / ${n} answered · ${ch.mcq.length} questions`;
    if(n===ch.mcq.length&&(best[ch.n]==null||c>best[ch.n])){best[ch.n]=c;store.set('best',best)}};
  for(const q of $$('.mcq',root)){const i=+q.dataset.q,m=ch.mcq[i];
    for(const b of $$('.o',q))b.onclick=()=>{const j=+b.dataset.o;if(i in ans)return;ans[i]=j===m[2];
      for(const o of $$('.o',q)){o.disabled=true;if(+o.dataset.o===m[2])o.classList.add('ok')}if(j!==m[2])b.classList.add('no');
      const fb=$('.fb',q);fb.hidden=false;fb.innerHTML=`<b class="sans">${j===m[2]?'Correct.':'Not quite — the answer is '+String.fromCharCode(65+m[2])+'.'}</b> ${m[3]}`;upd()}}
  const rs=$('[data-reset]',root);if(rs)rs.onclick=()=>{for(const k in ans)delete ans[k];for(const q of $$('.mcq',root)){for(const o of $$('.o',q)){o.disabled=false;o.classList.remove('ok','no')}const f=$('.fb',q);f.hidden=true}upd()};
}
/* ================= routing ================= */
let io=null;
function setAccent(ch){document.documentElement.style.setProperty('--acc',ch?ch.color:'#0b5d63');$('#chb').textContent=ch?ch.n:'FA';$('#bt').textContent=ch?ch.title:'Financial Accounting';document.title=ch?`Ch ${ch.n} · ${ch.title}`:'Financial Accounting Study Text'}
function updNav(){$('#prev').disabled=!CUR||CUR.idx===0;$('#next').disabled=CUR&&CUR.idx===SEQ.length-1;$('#pbtn').disabled=!CUR;
  for(const a of $$('a[data-id]',side))a.classList.toggle('cur',CUR&&a.dataset.id===CUR.id)}
function route(force){
  const h=location.hash.slice(1);const p=BYID[h];
  if(io){io.disconnect();io=null}
  if(!p){CUR=null;renderedChapter=null;setAccent(null);layout.classList.remove('has-side');side.innerHTML='';main.innerHTML=homeHTML();updNav();scrollTo(0,0);return}
  CUR=p;setAccent(p.ch);layout.classList.add('has-side');
  if(mode==='sec'){
    renderedChapter=null;side.innerHTML=sideHTML(p.ch);
    main.innerHTML=`<article class="page sec" id="s-${p.id}">${pageBody(p)}${pnHTML(p)}</article>`;
    underline($('.sec',main));if(p.type==='rev')wireReview(main,p.ch);
    if(p.type!=='open')markVisited(p.id);updNav();scrollTo(0,0);return;
  }
  if(renderedChapter!==p.ch.n||force){
    renderedChapter=p.ch.n;side.innerHTML=sideHTML(p.ch);
    const last=p.ch.pages[p.ch.pages.length-1];
    main.innerHTML=`<div class="page">`+p.ch.pages.map((q,i)=>`<section class="sec ${i?'chsec':''}" id="s-${q.id}" data-id="${q.id}">${pageBody(q)}</section>`).join('')+pnHTML(last)+`</div>`;
    for(const s of $$('.sec',main))underline(s);wireReview(main,p.ch);
  }
  updNav();
  const el=$('#s-'+p.id);if(el)el.scrollIntoView({block:'start'});
  io=new IntersectionObserver(es=>{for(const e of es)if(e.isIntersecting){const q=BYID[e.target.dataset.id];if(q&&q!==CUR){CUR=q;history.replaceState(null,'','#'+q.id);updNav()}if(q&&q.type!=='open')markVisited(q.id)}},{rootMargin:'-30% 0px -60% 0px'});
  for(const s of $$('.sec',main))io.observe(s);
}
addEventListener('hashchange',()=>route());
/* ================= toast ================= */
let tt;function toast(m,ms=3500){let t=$('.toast');if(!t){t=document.createElement('div');t.className='toast';t.setAttribute('role','status');document.body.appendChild(t)}t.textContent=m;t.hidden=false;clearTimeout(tt);tt=setTimeout(()=>t.hidden=true,ms)}
/* ================= PDF ================= */
const dlP=(window.claude&&typeof claude.use==='function')?claude.use('downloads').catch(()=>null):Promise.resolve(null);
const REPL={'₱':'P','→':'->','←':'<-','−':'-','≥':'>=','≤':'<=','≈':'~','✓':'v','✗':'x','×':'×','√':'sqrt','Δ':'change in ','·':'·','′':"'",'″':'"',' ':' ',' ':' ',' ':' ','‑':'-','≠':'!=','÷':'÷','½':'1/2','⅓':'1/3','¼':'1/4'};
const FN={R:'Times-Roman',B:'Times-Bold',I:'Times-Italic',H:'Helvetica',HB:'Helvetica-Bold'};
const FID={R:'F1',B:'F2',I:'F3',H:'F4',HB:'F5'};
function norm(s){let o='';for(const c of s){const r=REPL[c];o+=r!=null?r:c}return o}
function code(c){const cp=c.codePointAt(0);if(cp>=32&&cp<127)return cp;const e=PDFENC[cp];return e!=null?e:63}
function tw(s,f,sz){let w=0;const a=PDFW[FN[f]];for(const c of s){const k=code(c);w+=(a[k-32]||500)}return w/1000*sz}
function pstr(s){let o='(';for(const c of s){const k=code(c);if(k===40||k===41||k===92)o+='\\'+String.fromCharCode(k);else if(k<32||k>126)o+='\\'+k.toString(8).padStart(3,'0');else o+=String.fromCharCode(k)}return o+')'}
function hex(c){c=c.replace('#','');if(c.length===3)c=[...c].map(x=>x+x).join('');return [0,2,4].map(i=>parseInt(c.substr(i,2),16)/255)}
function mix(c,t){return hex(c).map(v=>1-(1-v)*t)}
const rgb=a=>a.map(v=>v.toFixed(3)).join(' ');
async function makePDF(scope){
  const p=CUR,ch=p.ch;
  let html='',title='';
  const les=l=>`<h2 class="pl">${l.num} ${esc(l.t)}</h2>${l.h}`;
  const op=()=>`<h2 class="pl">Learning objectives</h2>${ch.los.map((l,i)=>`<p><b>LO${i+1}</b> ${l}</p>`).join('')}`;
  if(scope==='chapter'){html=op()+ch.lessons.map(les).join('')+reviewHTML(ch,true).replace('<h1 class="lt">','<h2 class="pl">').replace('</h1>','</h2>');title=`Ch${String(ch.n).padStart(2,'0')}-${ch.title}`}
  else if(p.type==='open'){html=op()+`<h2 class="pl">Why this matters</h2>`+ch.why;title=`Ch${ch.n}-Opener`}
  else if(p.type==='les'){html=les(p.l);title=`Lesson-${p.l.num}-${p.l.t}`}
  else {html=reviewHTML(ch,true).replace('<h1 class="lt">','<h2 class="pl">').replace('</h1>','</h2>');title=`Ch${ch.n}-Summary-and-Key-Terms`}
  const src=$('#pdfsrc');src.style.setProperty('--acc',ch.color);src.innerHTML=html;
  // rasterise svgs
  const imgs=new Map();
  for(const s of $$('svg',src)){try{imgs.set(s,await rast(s,ch.color))}catch(e){}}
  const L=new PL(ch);L.header(ch,scope==='chapter'?null:(p.type==='les'?`Lesson ${p.l.num}`:p.type==='rev'?'Summary & Key Terms':'Opener'));
  L.blocks(src,imgs);
  const bytes=await L.write();src.innerHTML='';
  window.__pdf=bytes;
  return {bytes,name:('FA-'+title).replace(/[^\w.-]+/g,'-').replace(/-+/g,'-').slice(0,90)+'.pdf',pages:L.pages.length};
}
function rast(svg,acc){return new Promise((res,rej)=>{
  const vb=svg.viewBox.baseVal;const w=vb&&vb.width||svg.clientWidth||600,h=vb&&vb.height||svg.clientHeight||300;
  let s=new XMLSerializer().serializeToString(svg);
  const css=`<style>text{fill:#1b1d22;font-family:Arial,Helvetica,sans-serif}.a{fill:${acc}}.as{stroke:${acc};fill:none}.al{fill:${'rgb('+mix(acc,.16).map(v=>Math.round(v*255)).join(',')+')'}}.ln{stroke:#5d6169;fill:none}.w{fill:#fff}.wt{fill:#fff}.mu{fill:#5d6169}.sf{fill:#f4f5f6}.st{stroke:#5d6169}</style>`;
  s=s.replace(/^<svg([^>]*)>/,(m,a)=>`<svg${a.includes('xmlns=')?a:a+' xmlns="http://www.w3.org/2000/svg"'} width="${w}" height="${h}">${css}`).replace(/var\(--acc\)/g,acc).replace(/var\(--[\w-]+\)/g,'#5d6169');
  const im=new Image();im.onload=()=>{const k=2.2;const c=document.createElement('canvas');c.width=Math.round(w*k);c.height=Math.round(h*k);const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(im,0,0,c.width,c.height);
    const d=c.toDataURL('image/jpeg',.82);const b=atob(d.split(',')[1]);const u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);res({w,h,pw:c.width,ph:c.height,data:u})};
  im.onerror=rej;im.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(s)})}
class PL{
  constructor(ch){this.ch=ch;this.W=595.28;this.H=841.89;this.m={l:32,r:32,t:30,b:34};this.pages=[];this.imgs=[];this.x0=this.m.l;this.w=this.W-this.m.l-this.m.r;this.acc=ch.color;this.np();this.sz=8.4;this.lh=10.2}
  np(){this.pages.push({bg:[],fg:[]});this.y=this.m.t}
  get pg(){return this._pg||this.pages[this.pages.length-1]}
  room(h){if(this.y+h>this.H-this.m.b){this.np();return true}return false}
  text(x,y,s,f,sz,col){if(!s)return;this.pg.fg.push(`BT /${FID[f]} ${sz} Tf ${rgb(col||[.1,.11,.13])} rg ${x.toFixed(2)} ${(this.H-y).toFixed(2)} Td ${pstr(s)} Tj ET`)}
  rect(x,y,w,h,col,bg=true){(bg?this.pg.bg:this.pg.fg).push(`${rgb(col)} rg ${x.toFixed(2)} ${(this.H-y-h).toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re f`)}
  line(x1,y1,x2,y2,col,lw=.5){this.pg.fg.push(`${rgb(col)} RG ${lw} w ${x1.toFixed(2)} ${(this.H-y1).toFixed(2)} m ${x2.toFixed(2)} ${(this.H-y2).toFixed(2)} l S`)}
  header(ch,sub){const h=30;this.rect(this.m.l,this.y,this.w,h,hex(ch.color));this.text(this.m.l+8,this.y+12,`CHAPTER ${ch.n}`+(sub?`  ·  ${sub}`:''),'HB',7,[1,1,1]);this.text(this.m.l+8,this.y+24,norm(ch.title),'HB',12.5,[1,1,1]);this.y+=h+8}
  // wrap runs [{t,f}] into lines within width
  wrap(runs,w,sz){
    const toks=[];for(const r of runs){if(r.br){toks.push({br:1});continue}const parts=norm(r.t).split(/(\s+)/);for(const pt of parts){if(pt==='')continue;toks.push({t:pt,f:r.f,sp:/^\s+$/.test(pt)})}}
    const lines=[];let cur=[],cw=0;
    const push=()=>{while(cur.length&&cur[cur.length-1].sp)cur.pop();lines.push(cur);cur=[];cw=0};
    for(const t of toks){if(t.br){push();continue}
      if(t.sp){if(!cur.length)continue;const ww=tw(' ',t.f,sz);cur.push({t:' ',f:t.f,sp:1,w:ww});cw+=ww;continue}
      let ww=tw(t.t,t.f,sz);
      if(cw+ww>w&&cur.length){push()}
      if(ww>w){let s=t.t;while(tw(s,t.f,sz)>w){let k=s.length;while(k>1&&tw(s.slice(0,k),t.f,sz)>w)k--;cur.push({t:s.slice(0,k),f:t.f,w:tw(s.slice(0,k),t.f,sz)});push();s=s.slice(k)}t.t=s;ww=tw(s,t.f,sz)}
      cur.push({t:t.t,f:t.f,w:ww});cw+=ww}
    if(cur.length)push();return lines.filter((l,i)=>l.length||i<lines.length-1)
  }
  para(runs,{sz=this.sz,lh=this.lh,indent=0,col,align,after=2.6,bullet}={}){
    const x=this.x0+indent,w=this.w-indent;const lines=this.wrap(runs,w,sz);if(!lines.length)return;
    lines.forEach((ln,i)=>{this.room(lh);const base=this.y+lh*.78;
      if(i===0&&bullet)this.text(x-(bullet.length>1?11:7),base,bullet,bullet.length>1?'HB':'R',sz,col);
      let xx=x;if(align==='right'){const lw=ln.reduce((a,s)=>a+s.w,0);xx=x+w-lw}
      for(const s of ln){if(!s.sp)this.text(xx,base,s.t,s.f,sz,col);xx+=s.w}this.y+=lh});
    this.y+=after;
  }
  runs(node,f='R',out=[]){
    for(const n of node.childNodes){
      if(n.nodeType===3){const t=n.nodeValue.replace(/\s+/g,' ');if(t)out.push({t,f});continue}
      if(n.nodeType!==1)continue;const tg=n.tagName;
      if(tg==='BR'){out.push({br:1});continue}
      if(/^(UL|OL|TABLE|DIV|FIGURE|SVG|DL|ASIDE)$/i.test(tg))continue;
      const nf=/^(B|STRONG)$/.test(tg)?(f==='H'||f==='HB'?'HB':'B'):/^(I|EM)$/.test(tg)?(f==='B'?'B':'I'):f;
      this.runs(n,nf,out)}
    return out}
  blocks(root,imgs){for(const n of root.childNodes)this.block(n,imgs)}
  block(n,imgs){
    if(n.nodeType===3){const t=n.nodeValue.trim();if(t)this.para([{t,f:'R'}]);return}
    if(n.nodeType!==1)return;const tg=n.tagName.toUpperCase(),cl=n.classList;
    if(cl.contains('tabs')||cl.contains('kt')||n.hidden&&!cl.contains('ans'))return;
    if(tg==='H1'||tg==='H2'||tg==='H3'||tg==='H4'){
      const big=cl.contains('pl');const sz=big?11.5:tg==='H2'?10:9.2;const before=big?7:4;
      if(this.y>this.m.t+2)this.y+=before;if(this.room(sz*1.25+this.lh*2.5)){}
      if(big){this.line(this.x0,this.y,this.x0+this.w,this.y,hex(this.acc),1.2);this.y+=3}
      this.para(this.runs(n,'HB'),{sz,lh:sz*1.22,col:big?hex(this.acc):[.1,.11,.13],after:1.5});return}
    if(tg==='P'){this.para(this.runs(n));return}
    if(tg==='UL'||tg==='OL'){let i=0;const st=cl.contains('steps');for(const li of n.children){i++;const r=this.runs(li);const ind=12;
      const save=this.x0;this.para(r,{indent:ind,bullet:tg==='OL'?`${i}.`:'•',after:1});
      this.x0+=ind;this.w-=ind;for(const c of li.children)if(/^(UL|OL|TABLE|DIV)$/.test(c.tagName))this.block(c,imgs);this.x0=save;this.w+=ind}
      this.y+=1.5;return}
    if(tg==='DL'){let dt=null;for(const c of n.children){if(c.tagName==='DT')dt=c;else{this.para([...this.runs(dt,'B'),{t:' — ',f:'R'},...this.runs(c)],{after:1.2,sz:8.2,lh:9.9})}}return}
    if(tg==='TABLE'){this.table(n);return}
    if(tg==='FIGURE'){const s=$('svg',n);const im=s&&imgs.get(s);if(im)this.image(im);const fc=$('figcaption',n);if(fc)this.para(this.runs(fc,'I'),{sz:7.6,lh:9,align:'right'});return}
    if(tg==='SVG'||tg==='svg'){const im=imgs.get(n);if(im)this.image(im);return}
    if(cl.contains('calc')){this.calc(n);return}
    if(cl.contains('box')){this.box(n,imgs);return}
    if(cl.contains('bh'))return;
    if(cl.contains('sumlo')){const b=$('b',n);const d=n.children[1];this.para([{t:b.textContent+'  ',f:'HB'},...this.runs(d)]);return}
    if(/^(DIV|SECTION|ARTICLE|DETAILS|SPAN|ASIDE)$/.test(tg)){
      const hasBlock=[...n.children].some(c=>/^(P|UL|OL|TABLE|DIV|FIGURE|H1|H2|H3|H4|DL|svg|SVG)$/.test(c.tagName));
      if(hasBlock)this.blocks(n,imgs);else this.para(this.runs(n));return}
    this.para(this.runs(n));
  }
  box(n,imgs){
    const col=hex(getComputedStyle(n).getPropertyValue('--bc').trim()||this.acc)||hex(this.acc);
    const bh=$('.bh',n);this.y+=3;this.room(this.lh*3);
    const sp=this.pages.length-1,sy=this.y;const save=[this.x0,this.w];this.x0+=7;this.w-=12;this.y+=3;
    if(bh)this.para([{t:bh.textContent.slice(1).trim(),f:'HB'}],{sz:7.6,lh:9.4,col,after:1});
    const sz0=this.sz,lh0=this.lh;this.sz=8.0;this.lh=9.7;
    for(const c of n.childNodes)if(c!==bh)this.block(c,imgs);
    this.sz=sz0;this.lh=lh0;this.y+=1;[this.x0,this.w]=save;
    const ep=this.pages.length-1,ey=this.y;const tint=mix('#'+col.map(v=>Math.round(v*255).toString(16).padStart(2,'0')).join(''),.08);
    for(let i=sp;i<=ep;i++){const top=i===sp?sy:this.m.t,bot=i===ep?ey:this.H-this.m.b;const pg=this.pages[i];
      pg.bg.push(`${rgb(tint)} rg ${this.x0.toFixed(2)} ${(this.H-bot).toFixed(2)} ${this.w.toFixed(2)} ${(bot-top).toFixed(2)} re f`);
      pg.bg.push(`${rgb(col)} rg ${this.x0.toFixed(2)} ${(this.H-bot).toFixed(2)} 2.2 ${(bot-top).toFixed(2)} re f`)}
    this.y+=4;
  }
  calc(n){const rows=[...n.children].map(d=>({c:[...d.children].map(s=>this.runs(s)),tot:d.classList.contains('t')}));
    const sz=8.3,lh=10.2,x=this.x0+6,w=this.w-12;
    for(const r of rows){const L=r.c[0]||[],R=r.c[1]||[];const f=r.tot?'B':null;const fix=a=>f?a.map(q=>({...q,f:q.f==='I'?'B':'B'})):a;
      const rw=R.length?tw(norm(R.map(q=>q.t||'').join('')),f||'R',sz)+4:0;const lines=this.wrap(fix(L),w-rw-8,sz);
      if(r.tot&&R.length){this.room(lh);this.line(x+w-Math.max(rw,40),this.y+.8,x+w,this.y+.8,[.1,.1,.1],.7)}
      lines.forEach((ln,i)=>{this.room(lh);const b=this.y+lh*.78;let xx=x;for(const s of ln){if(!s.sp)this.text(xx,b,s.t,s.f,sz);xx+=s.w}
        if(i===0&&R.length){const t=norm(R.map(q=>q.t||'').join(''));this.text(x+w-tw(t,f||'R',sz),b,t,f||'R',sz)}this.y+=lh})}
    this.y+=3}
  table(t){
    const rows=[...t.rows].map(r=>({cells:[...r.cells].map(c=>({runs:this.runs(c,c.tagName==='TH'||r.classList.contains('tot')?'HB':'H'),n:c.classList.contains('n'),cr:c.classList.contains('cr'),ex:c.classList.contains('ex2'),span:c.colSpan||1})),head:r.parentElement.tagName==='THEAD'||[...r.cells].every(c=>c.tagName==='TH'),tot:r.classList.contains('tot')}));
    const nc=Math.max(...rows.map(r=>r.cells.reduce((a,c)=>a+c.span,0)));const sz=7.4,lh=8.9,pad=2.6;
    const nat=new Array(nc).fill(8),mn=new Array(nc).fill(8);
    for(const r of rows){let ci=0;for(const c of r.cells){if(c.span===1){const s=norm(c.runs.map(q=>q.t||'').join(''));const f=r.head||r.tot?'HB':'H';nat[ci]=Math.max(nat[ci],tw(s,f,sz)+pad*2+(c.cr?10:0));for(const wd of s.split(/\s+/))mn[ci]=Math.max(mn[ci],tw(wd,f,sz)+pad*2)}ci+=c.span}}
    let W=this.w;let cw;const sn=nat.reduce((a,b)=>a+b,0);
    if(sn<=W){cw=nat.map(v=>v+(W-sn)*(v/sn)*.0);W=sn}else{const sm=mn.reduce((a,b)=>a+b,0);const ex=Math.max(0,W-sm);const dif=nat.map((v,i)=>v-mn[i]);const sd=dif.reduce((a,b)=>a+b,0)||1;cw=mn.map((v,i)=>v+ex*dif[i]/sd);if(sm>W){cw=cw.map(v=>v*W/sm)}}
    const x0=this.x0;const tot=cw.reduce((a,b)=>a+b,0);
    this.y+=2;
    for(const r of rows){
      const lay=[];let ci=0;for(const c of r.cells){const w=cw.slice(ci,ci+c.span).reduce((a,b)=>a+b,0);const runs=c.ex?c.runs.map(q=>({...q,f:'I'})):c.runs;lay.push({c,x:x0+cw.slice(0,ci).reduce((a,b)=>a+b,0),w,lines:this.wrap(runs.map(q=>q.f==='I'&&!c.ex?{...q,f:'H'}:q),w-pad*2-(c.cr?10:0),sz)});ci+=c.span}
      const h=Math.max(1,...lay.map(l=>l.lines.length))*lh+pad*1.4;
      if(this.room(h)){}
      if(r.head)this.rect(x0,this.y,tot,h,[.93,.94,.95]);
      if(r.tot)this.line(x0,this.y,x0+tot,this.y,[.1,.1,.1],.8);
      for(const l of lay){l.lines.forEach((ln,i)=>{const b=this.y+pad*.7+lh*(i+.78);let xx=l.x+pad+(l.c.cr?10:0);if(l.c.n){const lw=ln.reduce((a,s)=>a+s.w,0);xx=l.x+l.w-pad-lw}for(const s of ln){if(!s.sp)this.text(xx,b,s.t,s.f==='I'?'I':s.f,sz,s.f==='I'?[.36,.38,.41]:null);xx+=s.w}})}
      this.y+=h;this.line(x0,this.y,x0+tot,this.y,[.82,.83,.85],.4)}
    this.y+=5}
  image(im){let w=Math.min(this.w*.6,im.w*.55),h=w*im.h/im.w;const mx=(this.H-this.m.t-this.m.b)*.5;if(h>mx){h=mx;w=h*im.w/im.h}
    this.room(h+4);const x=this.x0+(this.w-w)/2;const id=this.imgs.length;this.imgs.push(im);this.pg.fg.push(`q ${w.toFixed(2)} 0 0 ${h.toFixed(2)} ${x.toFixed(2)} ${(this.H-this.y-h).toFixed(2)} cm /Im${id} Do Q`);this.y+=h+4}
  async write(){
    const N=this.pages.length;const ft=`Chapter ${this.ch.n} · ${norm(this.ch.title)}`;
    this.pages.forEach((p,i)=>{this._pg=p;const y=this.H-this.m.b+16;this.line(this.m.l,y-9,this.W-this.m.r,y-9,[.8,.8,.8],.4);this.text(this.m.l,y,ft,'H',6.8,[.4,.42,.45]);const s=`Page ${i+1} of ${N}`;this.text(this.W-this.m.r-tw(s,'H',6.8),y,s,'H',6.8,[.4,.42,.45])});this._pg=null;
    const enc=new TextEncoder();const chunks=[];let len=0;const offs=[];
    const add=b=>{if(typeof b==='string')b=enc.encode(b);chunks.push(b);len+=b.length};
    const objs=[];const obj=(body)=>{objs.push(body);return objs.length};
    const fontIds={};for(const k of Object.keys(FN))fontIds[k]=obj(`<< /Type /Font /Subtype /Type1 /BaseFont /${FN[k]} /Encoding /WinAnsiEncoding >>`);
    const imIds=this.imgs.map(im=>obj({dict:`<< /Type /XObject /Subtype /Image /Width ${im.pw} /Height ${im.ph} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${im.data.length} >>`,data:im.data}));
    const pagesId=objs.length+1;objs.push(null);
    const res=`<< /Font << ${Object.keys(FN).map(k=>`/${FID[k]} ${fontIds[k]} 0 R`).join(' ')} >> /XObject << ${imIds.map((id,i)=>`/Im${i} ${id} 0 R`).join(' ')} >> >>`;
    const kids=[];
    for(const p of this.pages){let s=enc.encode(p.bg.join('\n')+'\n'+p.fg.join('\n'));let filt='';
      if(typeof CompressionStream!=='undefined'){try{s=new Uint8Array(await new Response(new Blob([s]).stream().pipeThrough(new CompressionStream('deflate'))).arrayBuffer());filt=' /Filter /FlateDecode'}catch(e){}}
      const cid=obj({dict:`<< /Length ${s.length}${filt} >>`,data:s});
      kids.push(obj(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${this.W} ${this.H}] /Resources ${res} /Contents ${cid} 0 R >>`))}
    objs[pagesId-1]=`<< /Type /Pages /Kids [${kids.map(k=>k+' 0 R').join(' ')}] /Count ${kids.length} >>`;
    const cat=obj(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
    const info=obj(`<< /Title ${pstr('Financial Accounting - '+ft)} /Producer (Study site) >>`);
    add('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n'.replace(/[\s\S]/g,c=>c));
    objs.forEach((o,i)=>{offs[i]=len;add(`${i+1} 0 obj\n`);if(typeof o==='string')add(o+'\n');else{add(o.dict+'\nstream\n');add(o.data);add('\nendstream\n')}add('endobj\n')});
    const xr=len;add(`xref\n0 ${objs.length+1}\n0000000000 65535 f \n`+offs.map(o=>String(o).padStart(10,'0')+' 00000 n \n').join(''));
    add(`trailer\n<< /Size ${objs.length+1} /Root ${cat} 0 R /Info ${info} 0 R >>\nstartxref\n${xr}\n%%EOF`);
    const out=new Uint8Array(len);let o=0;for(const c of chunks){out.set(c,o);o+=c.length}return out}
}
for(const b of $$('[data-pdf]'))b.onclick=async()=>{closePops();if(!CUR)return;toast('Building PDF…',20000);
  try{const r=await makePDF(b.dataset.pdf);const d=await dlP;
    if(!d){const u=URL.createObjectURL(new Blob([r.bytes],{type:'application/pdf'}));const a=document.createElement('a');a.href=u;a.download=r.name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),60000);toast(`Downloaded ${r.name} (${r.pages} page${r.pages===1?'':'s'})`);return}
    try{await d.save({filename:r.name,data:r.bytes});toast(`Saved ${r.name} (${r.pages} page${r.pages===1?'':'s'})`)}catch(e){toast(e&&e.code==='declined'?'Download cancelled.':e&&e.code==='host_unavailable'?'This app can’t save files — open the page in a browser to download.':'Could not save the PDF ('+(e&&e.code||'error')+').',6000)}
  }catch(e){console.error(e);toast('Sorry — the PDF could not be built.',5000)}};
window.__makePDF=makePDF;
route();
}

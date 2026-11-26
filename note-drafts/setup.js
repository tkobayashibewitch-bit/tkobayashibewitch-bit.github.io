const sleep=ms=>new Promise(r=>setTimeout(r,ms));
for(let k=0;k<30&&!document.querySelector('.ProseMirror');k++)await sleep(500);
const ARTS=await (await fetch('https://raw.githubusercontent.com/tkobayashibewitch-bit/tkobayashibewitch-bit.github.io/claude/project-thread-n57iui/note-drafts/arts.json?'+Date.now())).json();
const A=ARTS[KEY];const ed=document.querySelector('.ProseMirror');const imgs=[];let html='';
A.chunks.forEach(c=>{if(c.html)html+=c.html;else{html+='<p>IMGMARK'+imgs.length+'</p>';imgs.push(c.img);}});
ed.focus();let r=document.createRange();r.selectNodeContents(ed);r.collapse(false);let s=getSelection();s.removeAllRanges();s.addRange(r);await sleep(300);
let dt=new DataTransfer();dt.setData('text/html',html);dt.setData('text/plain','');ed.dispatchEvent(new ClipboardEvent('paste',{clipboardData:dt,bubbles:true,cancelable:true}));await sleep(800);
for(let i=0;i<imgs.length;i++){const p=[...ed.querySelectorAll('p')].find(p=>p.textContent.trim()==='IMGMARK'+i);
const rr=document.createRange();rr.selectNodeContents(p);s=getSelection();s.removeAllRanges();s.addRange(rr);await sleep(400);
const b=await (await fetch(imgs[i])).blob();dt=new DataTransfer();dt.items.add(new File([b],imgs[i].split('/').pop(),{type:b.type}));const n0=ed.querySelectorAll('img').length;
ed.dispatchEvent(new ClipboardEvent('paste',{clipboardData:dt,bubbles:true,cancelable:true}));
for(let k=0;k<40;k++){await sleep(500);const ims=[...ed.querySelectorAll('img')];if(ims.length>n0&&ims.every(i=>i.src.includes('st-note.com')))break;}}
for(let k=0;k<12;k++){const p=[...ed.querySelectorAll('p')].find(p=>/^IMGMARK\d+$/.test(p.textContent.trim()));if(!p)break;const prev=p.previousElementSibling;
r=document.createRange();r.selectNodeContents(prev);r.collapse(false);r.setEnd(p,p.childNodes.length);s=getSelection();s.removeAllRanges();s.addRange(r);ed.focus();await sleep(300);document.execCommand('delete');await sleep(400);}
const ta=document.querySelector('textarea');Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,'value').set.call(ta,A.title);ta.dispatchEvent(new Event('input',{bubbles:true}));
const eb=await (await fetch(A.eye)).blob();const bm=await createImageBitmap(eb);const c=document.createElement('canvas');c.width=1280;c.height=670;const g=c.getContext('2d');g.fillStyle='#1b1f2b';g.fillRect(0,0,1280,670);g.drawImage(bm,305,0,670,670);
const o=await new Promise(res=>c.toBlob(res,'image/jpeg',0.92));const ef=new File([o],'eyecatch.jpg',{type:'image/jpeg'});
const oc=HTMLInputElement.prototype.click;HTMLInputElement.prototype.click=function(){if(this.type==='file'){const d=new DataTransfer();d.items.add(ef);this.files=d.files;this.dispatchEvent(new Event('change',{bubbles:true}));HTMLInputElement.prototype.click=oc;return;}return oc.call(this);};
document.querySelectorAll('*').forEach(e=>{if(e.scrollTop>0)e.scrollTop=0});
return 'figs='+ed.querySelectorAll('figure').length+'/'+imgs.length+' marks='+[...ed.querySelectorAll('p')].filter(p=>/IMGMARK/.test(p.textContent)).length+' len='+ed.innerText.length+' title='+ta.value.slice(0,15);

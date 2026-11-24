import glob,re
css=open('style.css').read()
parts=['const CH=[];']+[open(f).read() for f in sorted(glob.glob('content/ch*.js'))]
js=open('fontdata.js').read()+'\n'+'\n'.join(parts)+'\n'+open('engine.js').read()
html=f'''<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Financial Accounting Study Text</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap" rel="stylesheet">
<style>{css}</style></head><body><div id="app"></div>
<script>new MutationObserver(()=>{{for(const c of document.querySelectorAll('.stack td:not([data-l])')){{let i=0,p=c;while(p=p.previousElementSibling)i+=p.colSpan;c.dataset.l=c.closest('table').rows[0].cells[i]?.textContent||''}}}}).observe(document,{{childList:true,subtree:true}})</script>
<script>
{js}
</script></body></html>'''
open('dist/index.html','w').write(html)
print(len(html))

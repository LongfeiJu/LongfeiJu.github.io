CH.push({n:4,color:'#b5541c',title:'Completing the Accounting Cycle',
hook:'Wrapping up the year: the worksheet, closing the books, and a balance sheet that tells you whether the business can pay its bills.',
los:['Prepare a worksheet and explain its purpose.','Explain why closing entries are needed and prepare them.','Prepare a post-closing trial balance and list the nine steps of the accounting cycle.','Explain reversing entries and prepare correcting entries.','Prepare a classified balance sheet.','Measure liquidity with working capital and the current ratio.'],
why:`<p>By the end of Chapter 3 you could produce a correct set of statements. But the books aren't finished: the revenue and expense accounts still hold this year's totals. If you left them alone, next year's income statement would start with this year's sales already in it — like a basketball scoreboard that never resets between games.</p><p>This chapter finishes the cycle: an optional <b>worksheet</b> to organise the work, <b>closing entries</b> to reset the scoreboard, a <b>post-closing trial balance</b> to check, and a <b>classified balance sheet</b> that lets users judge liquidity — a bridge to the ratio analysis in Chapter 10.</p>`,
terms:{
'Worksheet':'A multi-column working paper used to organise adjustments and prepare statements; a tool, not a permanent record.',
'Closing entries':'Entries at period-end that transfer revenues, expenses and drawings to owner\'s capital and reset those accounts to zero.',
'Temporary accounts':'Revenue, expense, drawings (and Income Summary) accounts — closed every period.',
'Permanent accounts':'Balance-sheet accounts (assets, liabilities, capital) — never closed; their balances carry forward.',
'Post-closing trial balance':'A trial balance prepared after closing, listing only permanent accounts.',
'Accounting cycle':'The repeating sequence of steps from analysing transactions to the post-closing trial balance.',
'Reversing entry':'An optional entry on the first day of a new period that exactly reverses certain adjusting entries of the prior period.',
'Correcting entry':'An entry made whenever an error is discovered, to fix the accounts.',
'Classified balance sheet':'A balance sheet that groups assets and liabilities into standard subgroups (current, long-term, etc.).',
'Current assets':'Cash and other resources expected to be realised in cash, sold or consumed within one year or the operating cycle, whichever is longer.',
'Current liabilities':'Obligations expected to be paid from current assets (or new current liabilities) within one year or the operating cycle, whichever is longer.',
'Long-term investments':'Resources convertible to cash, but not expected to be within a year — e.g. shares of another company, land held for resale.',
'Capital assets':'Long-lived tangible assets (PPE, natural resources) and intangible assets used in the business.',
'Long-term liabilities':'Obligations expected to be paid after one year, e.g. long-term notes, bonds and mortgages payable.',
'Liquidity':'The ability to pay short-term obligations as they come due.',
'Working capital':'Current assets minus current liabilities.',
'Current ratio':'Current assets ÷ current liabilities; a measure of short-term debt-paying ability.'},
lessons:[
{t:'The worksheet',lo:1,h:`
${kt('Worksheet')}
<p class="lead">A <b>worksheet</b> is a big multi-column form that lets the accountant see the trial balance, the adjustments and the statements side by side. It is a <b>working tool</b>, not a permanent accounting record — like the scratch paper you use before writing your final exam answer.</p>
<figure><svg viewBox="0 0 660 120" role="img" aria-label="Worksheet columns"><g font-size="12" text-anchor="middle" font-weight="700"><rect x="4" y="10" width="100" height="44" class="al"/><text x="54" y="37">Account titles</text>
<rect x="108" y="10" width="106" height="44" class="a"/><text x="161" y="30" class="wt">Trial balance</text><text x="161" y="46" class="wt" font-weight="400">Dr | Cr</text>
<rect x="218" y="10" width="106" height="44" class="a"/><text x="271" y="30" class="wt">Adjustments</text><text x="271" y="46" class="wt" font-weight="400">Dr | Cr</text>
<rect x="328" y="10" width="106" height="44" class="a"/><text x="381" y="30" class="wt">Adjusted TB</text><text x="381" y="46" class="wt" font-weight="400">Dr | Cr</text>
<rect x="438" y="10" width="106" height="44" class="a"/><text x="491" y="30" class="wt">Income stmt</text><text x="491" y="46" class="wt" font-weight="400">Dr | Cr</text>
<rect x="548" y="10" width="106" height="44" class="a"/><text x="601" y="30" class="wt">Balance sheet</text><text x="601" y="46" class="wt" font-weight="400">Dr | Cr</text></g>
<g font-size="12" text-anchor="middle"><text x="161" y="78">① prepare</text><text x="271" y="78">② enter</text><text x="381" y="78">③ combine</text><text x="546" y="78">④ extend each balance to its statement</text><text x="546" y="100">⑤ total, find net income, balance</text></g></svg><figcaption>Illustration 4-1: the ten money columns of a worksheet and the five steps.</figcaption></figure>
<ol class="steps"><li>Enter the <b>trial balance</b>.</li><li>Enter the <b>adjustments</b>.</li><li>Combine them into <b>adjusted balances</b>.</li><li><b>Extend</b> each adjusted balance to the correct statement columns (revenues/expenses → income statement; assets, liabilities, capital, drawings → balance sheet).</li><li>Total the columns, compute <b>net income or loss</b>, and complete the worksheet.</li></ol>
<div class="ex" data-t="Finishing Pioneer's worksheet"><p>Using Pioneer's adjusted balances (<a class="xl" href="#c3-7">Lesson 3.7</a>):</p>
${tbl(['','Income stmt Dr','Income stmt Cr','Balance sheet Dr','Balance sheet Cr'],[['Column totals','7,758','10,600','22,450','19,608'],['Net income (balancing figure)','2,842','','','2,842'],['Totals','10,600','10,600','22,450','22,450']],{num:[1,2,3,4],tot:true})}
<p>Net income appears twice: as a debit to balance the income-statement columns, and as a credit in the balance-sheet columns (because it increases capital). If both pairs balance, the extension was done correctly. A net <i>loss</i> goes on the opposite sides.</p></div>
<div class="tip"><p>Balance-sheet debit total 22,450 = cash 15,200 + receivable 200 + supplies 1,000 + prepaid 550 + equipment 5,000 + <b>drawings 500</b>. Drawings is extended to the balance-sheet columns — not the income statement — because it isn't an expense.</p></div>`},
{t:'Closing entries',lo:2,h:`
${kt('Closing entries','Temporary accounts','Permanent accounts')}
<p class="lead">At the end of the period, the temporary accounts are emptied into owner's capital. This does two jobs:</p>
<ol><li>It <b>updates owner's capital</b> for the period's net income (or loss) and drawings.</li><li>It <b>resets revenue, expense and drawings accounts to zero</b>, ready for next period.</li></ol>
${tbl(['Temporary (nominal) — closed','Permanent (real) — not closed'],[['All revenue accounts','All asset accounts'],['All expense accounts','All liability accounts'],['Owner\'s drawings','Owner\'s capital']])}
<h2>The four closing entries</h2>
<figure><svg viewBox="0 0 640 220" role="img" aria-label="Closing process"><g text-anchor="middle" font-weight="700" font-size="14"><rect x="20" y="20" width="160" height="46" rx="8" class="al"/><text x="100" y="48">Expenses</text><rect x="460" y="20" width="160" height="46" rx="8" class="al"/><text x="540" y="48">Revenues</text><rect x="240" y="20" width="160" height="46" rx="8" class="a"/><text x="320" y="48" class="wt">Income Summary</text><rect x="240" y="150" width="160" height="46" rx="8" class="a"/><text x="320" y="178" class="wt">Owner's Capital</text><rect x="20" y="150" width="160" height="46" rx="8" class="al"/><text x="100" y="178">Drawings</text></g>
<path d="M458 43h-54M182 43h54M320 68v78M182 173h54" class="as" stroke-width="2.5" marker-end="url(#a4)"/><defs><marker id="a4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="a"/></marker></defs>
<g font-size="13" font-weight="700"><text x="430" y="36">①</text><text x="210" y="36">②</text><text x="332" y="112">③ net income</text><text x="208" y="166">④</text></g></svg><figcaption>Revenues and expenses go to Income Summary, its balance (net income) goes to capital, then drawings goes to capital.</figcaption></figure>
<ol class="steps"><li>Debit each <b>revenue</b> account for its balance; credit Income Summary for total revenues.</li><li>Debit Income Summary for total expenses; credit each <b>expense</b> account.</li><li>Debit Income Summary for its balance (= net income); credit Owner's Capital. (Reverse for a loss.)</li><li>Debit Owner's Capital; credit <b>Drawings</b> for its balance.</li></ol>
<div class="ex" data-t="Closing R. A. Lamb's merchandising accounts (Illustration slides)"><p>Data comes from the income-statement columns of the worksheet. Opening capital was $83,000.</p>
${je([['Dec 31','Sales',480000,''],['','Income Summary','',480000],['(1) Close revenue accounts.'],['31','Income Summary',450000,''],['','Sales Returns and Allowances','',12000],['','Sales Discounts','',8000],['','Cost of Goods Sold','',316000],['','Store Salaries Expense','',45000],['','Rent Expense','',19000],['','Freight-out','',7000],['','Advertising Expense','',16000],['','Utilities Expense','',17000],['','Depreciation Expense','',8000],['','Insurance Expense','',2000],['(2) Close debit-balance income-statement accounts.'],['31','Income Summary',30000,''],['','R. A. Lamb, Capital','',30000],['(3) Close net income (480,000 − 450,000).'],['31','R. A. Lamb, Capital',15000,''],['','R. A. Lamb, Drawings','',15000],['(4) Close drawings.']])}
${calc([['Opening capital',83000],['Add: net income',30000],['Less: drawings','(15,000)'],['=Ending capital','$98,000']])}</div>
<div class="warn"><p><b>Sales Returns and Allowances</b> and <b>Sales Discounts</b> have <i>debit</i> balances (they reduce sales), so they are closed with the expenses in entry 2, not with Sales. <b>Cost of Goods Sold</b> is a new account for merchandisers and is closed the same way.</p></div>
<div class="deep"><p>The slides' diagram shows revenues and expenses closed <i>directly</i> to Owner's Capital, while the journal entries use <b>Income Summary</b> as a middle stop. Both give the same capital balance; Income Summary just makes net income visible as one figure before it goes to capital.</p></div>
<p><b>Stop and check:</b> after posting, (1) does capital equal the ending capital on the statement of owner's equity? (2) Is every temporary account at zero?</p>`},
{t:'The post-closing trial balance and the accounting cycle',lo:3,h:`
${kt('Post-closing trial balance','Accounting cycle')}
<p class="lead">After closing, a <b>post-closing trial balance</b> proves that the <b>permanent</b> accounts — the only ones carried into next period — still balance.</p>
<div class="ex" data-t="Pioneer's post-closing trial balance (Illustration 4-8)">${tbl(['Account','Debit','Credit'],[['Cash','15,200',''],['Accounts Receivable','200',''],['Advertising Supplies','1,000',''],['Prepaid Insurance','550',''],['Office Equipment','5,000',''],['Accumulated Amortization','','83'],['Notes Payable','','5,000'],['Accounts Payable','','2,500'],['Unearned Revenue','','800'],['Salaries Payable','','1,200'],['Interest Payable','','25'],['C. R. Byrd, Capital','','12,342'],['Totals','$21,950','$21,950']],{num:[1,2],tot:true})}
<p>No revenues, expenses or drawings appear — they were closed. Capital is now the ending balance of $12,342.</p></div>
<h2>The nine steps of the accounting cycle</h2>
<figure><svg viewBox="0 0 520 330" role="img" aria-label="Accounting cycle"><g font-size="12.5" text-anchor="middle">
<circle cx="260" cy="165" r="118" class="ln" stroke-width="2" stroke-dasharray="4 5"/>
<g font-weight="700"><rect x="190" y="14" width="140" height="34" rx="17" class="a"/><text x="260" y="36" class="wt">1 Analyse</text>
<rect x="358" y="54" width="150" height="34" rx="17" class="al"/><text x="433" y="76">2 Journalize</text>
<rect x="388" y="122" width="126" height="34" rx="17" class="al"/><text x="451" y="144">3 Post</text>
<rect x="372" y="190" width="146" height="34" rx="17" class="al"/><text x="445" y="212">4 Trial balance</text>
<rect x="320" y="258" width="190" height="34" rx="17" class="al"/><text x="415" y="280">5 Adjusting entries</text>
<rect x="120" y="290" width="200" height="34" rx="17" class="al"/><text x="220" y="312">6 Adjusted trial balance</text>
<rect x="6" y="222" width="170" height="34" rx="17" class="al"/><text x="91" y="244">7 Financial statements</text>
<rect x="6" y="140" width="150" height="34" rx="17" class="al"/><text x="81" y="162">8 Closing entries</text>
<rect x="6" y="64" width="170" height="34" rx="17" class="al"/><text x="91" y="86">9 Post-closing TB</text></g>
<text x="260" y="160" class="mu">repeats every</text><text x="260" y="178" class="mu">period</text></g></svg><figcaption>Steps 1–3 happen during the period; steps 4–9 at the end. (Reversing entries are an optional step 10.)</figcaption></figure>`},
{t:'Reversing and correcting entries',lo:4,h:`
${kt('Reversing entry','Correcting entry')}
<h2>Reversing entries (optional)</h2>
<p class="lead">A <b>reversing entry</b> is made on the <b>first day of the new period</b> and is the exact opposite of an adjusting entry from the period before. Its only purpose is convenience: the bookkeeper can then record the next cash payment or receipt the normal way, without remembering the old accrual.</p>
<div class="ex" data-t="Reversing Pioneer's salary accrual"><p>(Added to show the idea; your slides refer this to an appendix.) Pioneer accrued $1,200 of salaries on October 31. Suppose $4,000 of salaries is paid on November 9, covering October's $1,200 plus $2,800 for November.</p>
${je([['Oct 31','Salaries Expense',1200,''],['','Salaries Payable','',1200],['Adjusting entry.'],['Nov 1','Salaries Payable',1200,''],['','Salaries Expense','',1200],['Reversing entry.'],['Nov 9','Salaries Expense',4000,''],['','Cash','',4000],['Paid salaries — recorded the normal way.']])}
<p>Salaries Expense for November = 4,000 − 1,200 = <b>$2,800</b>, exactly right, and Salaries Payable is back to zero. Without the reversal, the clerk would have to split the payment: Dr Salaries Payable 1,200, Dr Salaries Expense 2,800, Cr Cash 4,000.</p></div>
<div class="tip"><p>Reversing entries are typically used for <b>accruals</b> (accrued revenues and expenses), and for prepayments/pre-collections that were first recorded under the <b>expense or revenue method</b>.</p></div>
<h2>Correcting entries</h2>
<p>Errors should be fixed <b>as soon as they are discovered</b> with a <b>correcting entry</b>. Unlike adjusting entries, they can be made at any time, and can involve any combination of balance-sheet and income-statement accounts — even Cash. If the books are error-free, none are needed.</p>
<ol class="steps"><li>Work out the entry that <b>was</b> made.</li><li>Work out the entry that <b>should have been</b> made.</li><li>Record whatever entry turns the first into the second.</li></ol>
<div class="ex" data-t="Hunt Company's wages check (from the Cash deck)"><p>Check No. 630 for wages was recorded as $240 instead of the correct $420. Recorded: Dr Wages Expense 240 / Cr Cash 240. Should be: 420 / 420. Correction for the $180 difference:</p>${je([['','Wages Expense',180,''],['','Cash','',180],['To correct check No. 630 recorded at $240 instead of $420.']])}<p>You'll meet this item again in Hunt's bank reconciliation (<a class="xl" href="#c5-7">Lesson 5.7</a>).</p></div>`},
{t:'The classified balance sheet',lo:5,h:`
${kt('Classified balance sheet','Current assets','Long-term investments','Capital assets','Current liabilities','Long-term liabilities')}
<p class="lead">A <b>classified balance sheet</b> groups items into standard subgroups so users can see, at a glance, which assets will soon become cash and which debts are due soon.</p>
${tbl(['Assets','Liabilities and equity'],[['Current assets','Current liabilities'],['Long-term investments','Long-term liabilities'],['Capital assets (PPE, natural resources, intangibles)','Owner\'s / partners\' / shareholders\' equity']])}
<h2>The groups</h2>
<p><b>Current assets</b> — cash and resources expected to be realised in cash, sold or consumed within <b>one year or the operating cycle, whichever is longer</b>. Listed in order of <b>liquidity</b> (how quickly they turn into cash): cash, temporary investments, receivables, inventory, prepaids.</p>
<p><b>Long-term investments</b> — can be turned into cash but aren't expected to be within that time: shares or bonds of another company, land held for resale.</p>
<p><b>Capital assets</b> — (1) property, plant and equipment and natural resources (land, buildings, machinery, timber, oil reserves), and (2) intangible assets with no physical substance (patents, copyrights, trademarks).</p>
<p><b>Current liabilities</b> — paid from current assets within one year or the operating cycle, whichever is longer: accounts payable, unearned revenue, interest payable, the current portion of long-term debt.</p>
<p><b>Long-term liabilities</b> — due after one year: long-term notes, bonds, mortgages, lease liabilities.</p>
<p><b>Equity</b> — a proprietorship has one Capital account; a partnership one per partner; a corporation has <b>shareholders' equity</b> = share capital + retained earnings.</p>
<div class="ex" data-t="Pioneer's classified balance sheet (Illustration 4-17)"><p>Of Pioneer's $5,000 note payable, $1,000 is due within a year and $4,000 later.</p>
${calc([['Cash',15200],['Accounts receivable',200],['Advertising supplies',1000],['Prepaid insurance',550],['=Total current assets','16,950'],['Office equipment 5,000 less accumulated amortization 83',4917],['=Total assets','$21,867']])}
${calc([['Notes payable (current portion)',1000],['Accounts payable',2500],['Unearned revenue',800],['Salaries payable',1200],['Interest payable',25],['=Total current liabilities','5,525'],['Notes payable (long-term)',4000],['=Total liabilities','9,525'],['C. R. Byrd, Capital',12342],['=Total liabilities and owner\'s equity','$21,867']])}</div>
<div class="ph"><p>Your Exercise 4 asked when trade receivables are current: within one year <b>or</b> the normal operating cycle, <b>whichever is longer</b>. PAS 1 also lets entities present items in order of liquidity when that is more relevant (common for banks).</p></div>`},
{t:'Liquidity: working capital and the current ratio',lo:6,h:`
${kt('Liquidity','Working capital','Current ratio')}
<p class="lead"><b>Liquidity</b> is the ability to pay short-term debts when they come due. Two simple measures use the classified balance sheet.</p>
${calc([['Working capital = Current assets − Current liabilities',''],['Current ratio = Current assets ÷ Current liabilities','']])}
<p>The <b>current ratio</b> (or working-capital ratio) is the more dependable indicator, because it adjusts for size: ₱100,000 of working capital is comfortable for a small clinic and dangerously thin for a hospital chain.</p>
<div class="ex" data-t="Pioneer's liquidity"><p>Using Lesson 4.5's figures:</p>${calc([['Working capital = 16,950 − 5,525','$11,425'],['Current ratio = 16,950 ÷ 5,525','3.07 : 1']])}<p>Pioneer has about $3.07 of current assets for every $1 of current debt.</p></div>
<div class="ex" data-t="Community Hospital Supplies (pre-midterm Q15)"><p>Current assets: cash ₱5,000,000; receivables ₱6,700,000; accrued interest receivable ₱600,000; inventory ₱500,000; prepaid insurance ₱300,000. Current liabilities: accounts payable ₱8,500,000; income tax payable ₱1,440,000.</p>
${calc([['Current assets',13100000],['Current liabilities','9,940,000'],['=Working capital','₱3,160,000'],['Current ratio = 13,100,000 ÷ 9,940,000','1.32'],['Quick ratio = (5,000,000 + 6,700,000 + 600,000) ÷ 9,940,000','1.24']])}
<p>The quick (acid-test) ratio leaves out inventory and prepaids — see <a class="xl" href="#c10-4">Lesson 10.4</a>.</p></div>
<div class="warn"><p>Working capital is a <b>peso amount</b>; the current ratio is a <b>ratio</b>. Exam options love to pair a correct ratio with an incorrect working capital (₱13,100,000 is total current assets, not working capital).</p></div>`}
],
sum:['A worksheet is an optional ten-column working tool: trial balance, adjustments, adjusted trial balance, income statement and balance sheet columns. Net income balances both pairs of statement columns.',
'Closing entries move revenues, expenses (via Income Summary) and drawings into owner\'s capital and reset temporary accounts to zero. Contra-revenues (sales returns, discounts) and COGS close with the expenses.',
'The post-closing trial balance lists only permanent accounts. The cycle: analyse, journalize, post, trial balance, adjust, adjusted TB, statements, close, post-closing TB.',
'Reversing entries (optional) undo accruals on day one of the next period to simplify recording. Correcting entries fix errors whenever found: compare what was recorded with what should have been.',
'A classified balance sheet groups current assets, long-term investments, capital assets, current and long-term liabilities, and equity; "current" means within one year or the operating cycle, whichever is longer.',
'Working capital = CA − CL; current ratio = CA ÷ CL (Pioneer: $11,425 and 3.07:1).'],
mcq:[
['A worksheet is:',['A permanent accounting record','A required financial statement','A working tool for the accountant','The same as the general ledger'],2,'It is a supplementary device, not a permanent record.'],
['Which account is NOT closed?',['Service Revenue','Owner\'s Drawings','Salaries Expense','Unearned Revenue'],3,'Unearned Revenue is a liability — permanent.'],
['Sales Discounts is closed by:',['Debiting it with revenues','Crediting it with the expenses','Debiting capital directly','It is not closed'],1,'It has a debit balance, so it is credited along with the expense accounts.'],
['Lamb\'s revenue ₱480,000 and debit-balance accounts ₱450,000; drawings ₱15,000; opening capital ₱83,000. Ending capital:',['₱113,000','₱98,000','₱68,000','₱83,000'],1,'83,000 + 30,000 − 15,000 = 98,000.'],
['The post-closing trial balance contains:',['Only temporary accounts','Only permanent accounts','All accounts','Only income-statement accounts'],1,'Temporary accounts are zero after closing.'],
['A reversing entry is made:',['At the end of the period','On the first day of the next period','Whenever an error is found','Never for accruals'],1,'It reverses certain prior-period adjusting entries on day one.'],
['A wages check of ₱420 was recorded as ₱240. The correcting entry is:',['Dr Cash 180 / Cr Wages Exp 180','Dr Wages Exp 180 / Cr Cash 180','Dr Wages Exp 420 / Cr Cash 420','No entry needed'],1,'Expense and cash were both understated by 180.'],
['Current assets are realised within:',['One year only','The operating cycle only','One year or the operating cycle, whichever is shorter','One year or the operating cycle, whichever is longer'],3,'The longer of the two.'],
['Land held for resale (not used in operations) is classified as:',['Current asset','Long-term investment','Property, plant and equipment','Intangible asset'],1,'It is an investment, not an operating asset.'],
['Current assets ₱13,100,000 and current liabilities ₱9,940,000. Working capital and current ratio are:',['₱3,160,000 and 1.32','₱13,100,000 and 1.32','₱3,160,000 and 1.24','₱9,940,000 and 0.76'],0,'13.1M − 9.94M = 3.16M; 13.1 ÷ 9.94 = 1.32.']],
sa:[
['Give the two purposes of closing entries.','<p>(1) To update owner\'s capital for the period\'s net income/loss and drawings; (2) to reduce the temporary accounts (revenues, expenses, drawings) to zero so they are ready to accumulate next period\'s amounts.</p>'],
['Why is drawings extended to the balance-sheet columns of the worksheet rather than the income-statement columns?','<p>Drawings is a withdrawal of equity by the owner, not an expense incurred to earn revenue, so it doesn\'t affect net income. It reduces capital, which is a balance-sheet item.</p>'],
['Why is the current ratio a better liquidity measure than working capital?','<p>Working capital is an absolute amount, so it can\'t be compared across companies of different sizes. The current ratio expresses the relationship as a ratio, making comparisons meaningful.</p>']],
prob:[
['From Pioneer\'s adjusted balances, prepare the closing entries: Service Revenue 10,600; expenses — Adv. Supplies 1,500, Amortization 83, Insurance 50, Salaries 5,200, Rent 900, Interest 25; Drawings 500. Then compute ending capital (opening capital 0, investment 10,000).',je([['Oct 31','Service Revenue',10600,''],['','Income Summary','',10600],['31','Income Summary',7758,''],['','Adv. Supplies Expense','',1500],['','Amortization Expense','',83],['','Insurance Expense','',50],['','Salaries Expense','',5200],['','Rent Expense','',900],['','Interest Expense','',25],['31','Income Summary',2842,''],['','C. R. Byrd, Capital','',2842],['31','C. R. Byrd, Capital',500,''],['','C. R. Byrd, Drawings','',500]])+calc([['Investment',10000],['Net income',2842],['Drawings','(500)'],['=Ending capital','$12,342']])],
['A company has: cash ₱50,000; receivables ₱600,000; inventory ₱250,000; equipment ₱2,300,000; accounts payable ₱600,000; other payables ₱100,000; long-term debt ₱2,000,000. Compute total current assets, working capital and current ratio.',calc([['Current assets (50,000 + 600,000 + 250,000)',900000],['Current liabilities (600,000 + 100,000)',700000],['=Working capital','₱200,000'],['Current ratio = 900,000 ÷ 700,000','1.29 : 1']])+'<p>This is the "typical balance sheet" from your FS Analysis deck (Chapter 10).</p>']]
});

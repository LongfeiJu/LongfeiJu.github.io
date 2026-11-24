CH.push({n:6,color:'#c0392b',title:'Receivables',
hook:'Selling on credit is easy; getting paid is the hard part. How companies record, value and manage what customers owe.',
los:['Identify the types of receivables and when revenue from a credit sale is recognised.','Record credit sales, sales discounts, and sales returns and allowances, and compute net sales.','Value receivables using the allowance method, including write-offs and recoveries.','Estimate uncollectible accounts using the percentage-of-receivables and aging methods.','Assess how well a company manages its receivables using turnover and collection period.','Account for notes receivable and foreign-currency receivables.'],
why:`<p>A clinic that bills an HMO, a supplier that gives a pharmacy 30 days to pay, a school that lets parents pay tuition in instalments — they have all "sold" something but haven't been paid. That claim is a <b>receivable</b>, and for many businesses it is the largest current asset.</p><p>Two questions drive this chapter: <b>how much will we actually collect?</b> (bad-debt estimates) and <b>how fast?</b> (turnover ratios). Your Exercise 4 had over ten questions on the allowance method alone.</p>`,
terms:{
'Receivable':'A claim for money, goods or services from another party.',
'Accounts receivable':'A current asset: money customers owe for goods or services sold on credit (an informal promise to pay).',
'Notes receivable':'A formal written promise (promissory note) from a customer to pay a sum, usually with interest, on a set date.',
'Sales discount':'A reduction in price for customers who pay within the discount period; a contra-revenue account.',
'Sales returns and allowances':'Goods returned by customers or price reductions given; a contra-revenue account.',
'Contra-revenue':'An account deducted from sales (sales discounts, returns and allowances).',
'Gross sales':'Total sales recorded before deducting discounts and returns.',
'Net sales':'Gross sales minus sales discounts and sales returns and allowances.',
'Bad debt':'An account receivable that will not be collected (uncollectible account).',
'Allowance for bad debts':'A contra-asset account holding the estimated uncollectible amount of receivables (also Allowance for Doubtful Accounts).',
'Net realizable value':'The amount of receivables expected to be collected: Accounts Receivable minus the allowance.',
'Write-off':'Removing a specific worthless account from the books: Dr Allowance, Cr Accounts Receivable.',
'Aging of accounts receivable':'Grouping receivables by how long they have been outstanding and applying a higher loss percentage to older groups.',
'Percentage of sales method':'Estimating bad-debt expense as a percentage of credit sales (income-statement approach).',
'Accounts receivable turnover':'Sales ÷ average accounts receivable — how many times receivables are collected in a year.',
'Average collection period':'365 ÷ receivables turnover — the average number of days to collect a credit sale.',
'Maturity date':'The date on which a note is due to be paid.',
'Dishonored note':'A note not paid at maturity; it is transferred (with interest) to accounts receivable.',
'Foreign currency transaction':'A transaction whose price is set in a currency other than the company\'s own (functional) currency.',
'Exchange gain or loss':'The change in the home-currency value of a foreign-currency receivable or payable between the transaction date and settlement or reporting date.',
'Forward contract':'An agreement to exchange currencies at a set rate on a future date; used to reduce exchange-rate risk.'},
lessons:[
{t:'Types of receivables and revenue recognition',lo:1,h:`
${kt('Receivable','Accounts receivable','Notes receivable')}
<p class="lead">A <b>receivable</b> is a claim for money, goods or services. The two main types:</p>
${tbl(['','Accounts receivable','Notes receivable'],[['Form','Informal — an invoice','Formal written promissory note'],['Interest','Usually none','Usually yes'],['Typical term','30–60 days','Months, sometimes longer'],['Legal claim','Ordinary','Stronger']],{cls:'stack'})}
<h2>When is revenue from a credit sale recognised?</h2>
<p>The deck lists the IAS 18 conditions for selling goods: the seller has transferred the <b>significant risks and rewards</b> of ownership; keeps no managerial involvement or control; the revenue can be <b>measured reliably</b>; it is <b>probable</b> the money will be received; and the costs can be measured reliably. For services, the <b>stage of completion</b> must also be measurable.</p>
<div class="fix"><p><b>IAS 18 is no longer in force.</b> Since January 1, 2018 it has been replaced by <b>IFRS 15 / PFRS 15, Revenue from Contracts with Customers</b>. The modern test is whether the seller has <b>transferred control</b> of the goods or services (satisfied a performance obligation), using a five-step model: identify the contract → identify the performance obligations → determine the price → allocate the price → recognise revenue as each obligation is satisfied. For most simple credit sales the answer is the same: at delivery.</p></div>
<div class="ph"><p>Your pre-midterm asked about the "inventory of a service provider" — under PFRS 15-era terms, costs of services not yet billed are <b>unbilled services</b> (older texts: work in progress). Your exercise key used "unbilled services."</p></div>`},
{t:'Credit sales, discounts, returns and net sales',lo:2,h:`
${kt('Sales discount','Sales returns and allowances','Contra-revenue','Gross sales','Net sales')}
<p class="lead">Under a perpetual system, every sale needs <b>two entries</b>: one for the selling price, one to move the cost out of inventory.</p>
<div class="ex" data-t="Hot Pot's jam sales (amounts in NT$)"><p>Hot Pot sells 30 jars of jam for cash and 20 on credit at NT$10 each. The jars cost NT$400 in total.</p>${je([['','Cash',300,''],['','Accounts Receivable',200,''],['','Sales Revenue','',500],['Sold 30 jars for cash and 20 on credit.'],['','Cost of Goods Sold',400,''],['','Inventory','',400],['To record the cost of goods sold.'],['Later','Cash',200,''],['','Accounts Receivable','',200],['Collected the credit sale.']])}</div>
<h2>Sales discounts</h2>
<p>The seller's side of a purchase discount. <b>Sales Discounts</b> is a <b>contra-revenue</b> account: it has a debit balance and is deducted from sales.</p>
<div class="ex" data-t="Customer pays within 2/10"><p>If the NT$200 credit sale had terms 2/10, n/30 and the customer paid in time:</p>${je([['','Cash',196,''],['','Sales Discounts (200 × 2%)',4,''],['','Accounts Receivable','',200]])}</div>
<h2>Sales returns and allowances</h2>
<p>Also a contra-revenue account. If returned goods are resaleable, a second entry puts their <b>cost</b> back into inventory.</p>
<div class="ex" data-t="Returns, then a discounted collection"><p>Before any collections, customers return goods sold for NT$150: NT$100 from cash customers (refunded) and NT$50 from credit customers. The goods cost NT$120.</p>${je([['','Sales Returns and Allowances',150,''],['','Cash','',100],['','Accounts Receivable','',50],['','Inventory',120,''],['','Cost of Goods Sold','',120]])}
<p>The remaining NT$150 receivable is then collected within the discount period: discount = (200 − 50) × 2% = NT$3.</p>${calc([['Sales revenue',500],['Less: sales discounts','(3)'],['Less: sales returns and allowances','(150)'],['=Net sales','NT$347']])}</div>
<div class="fix"><p>The slide's explanation line says "NT$50 from <i>cash</i> customers" twice; the second should read <b>credit</b> customers (that's why Accounts Receivable is credited for 50).</p></div>
${calc([['Gross sales',''],['− Sales discounts',''],['− Sales returns and allowances',''],['=Net sales','']])}
<div class="ex" data-t="Hendrix Company (Quiz Yourself)"><p>Credit sales $100,000; cash sales $40,000; cost of goods sold $112,000. Credit customers took $2,700 of discounts when paying $90,000 of their accounts. $4,500 of goods (cost $3,600) was returned by cash customers.</p>${je([['','Cash',40000,''],['','Accounts Receivable',100000,''],['','Sales','',140000],['','Cost of Goods Sold',112000,''],['','Inventory','',112000],['','Cash',87300,''],['','Sales Discounts',2700,''],['','Accounts Receivable','',90000],['','Sales Returns',4500,''],['','Cash','',4500],['','Inventory',3600,''],['','Cost of Goods Sold','',3600]])}${calc([['Gross sales',140000],['Less: sales discounts','(2,700)'],['Less: sales returns','(4,500)'],['=Net sales','$132,800']])}</div>`},
{t:'Bad debts and the allowance method',lo:3,h:`
${kt('Bad debt','Allowance for bad debts','Net realizable value','Write-off')}
<p class="lead">Some customers never pay. The question is <b>when</b> to record that loss.</p>
${tbl(['','Direct write-off method','Allowance method'],[['Records the loss…','when a specific account is found worthless','at period-end, by estimate, before the loss is known'],['GAAP?','<b>No</b> — violates matching','<b>Yes</b>'],['Balance-sheet receivable','At full amount (overstated)','At net realizable value']],{cls:'stack'})}
<h2>Step 1 — Estimate and record at year-end</h2>
<div class="ex" data-t="Recording the estimate"><p>Because of an economic downturn, Hot Pot estimates its receivables are impaired by NT$4,500.</p>${je([['Dec 31','Bad Debt Expense',4500,''],['','Allowance for Bad Debts','',4500],['To record estimated bad debts for the year.']])}<p>Bad Debt Expense is a <b>selling expense</b> on the income statement. The Allowance is a <b>contra-asset</b> deducted from Accounts Receivable.</p></div>
<h2>Step 2 — Write off a specific account</h2>
<div class="ex" data-t="Writing off Jake Palmer"><p>In 2018, Jake Palmer's NT$1,500 account is identified as uncollectible.</p>${je([['2018','Allowance for Bad Debts',1500,''],['','Accounts Receivable','',1500],['Wrote off Jake Palmer\'s account.']])}
${tbl(['','Before write-off','After write-off'],[['Accounts receivable','50,000','48,500'],['Less: allowance','4,500','3,000'],['Net realizable value','45,500','45,500']],{num:[1,2],tot:true})}<p>The write-off changes <b>neither</b> net receivables <b>nor</b> income — the expense was already recorded when estimated.</p></div>
<h2>Step 3 — Recovery of an account written off</h2>
<div class="ex" data-t="Jake Palmer pays after all"><p>Two entries: reinstate the account, then record the collection.</p>${je([['','Accounts Receivable',1500,''],['','Allowance for Bad Debts','',1500],['Reinstated account previously written off.'],['','Cash',1500,''],['','Accounts Receivable','',1500],['Collected in full.']])}</div>
<div class="tip"><p>Exercise 4 favourites: a write-off under the allowance method has <b>no effect on net income</b> (under direct write-off it <b>decreases</b> income). A recovery <b>increases the allowance</b> and has <b>no effect on bad-debt expense or net income</b>.</p></div>`},
{t:'Estimating uncollectible accounts',lo:4,h:`
${kt('Aging of accounts receivable','Percentage of sales method')}
<p class="lead">How do we arrive at the estimate? Two families of methods.</p>
${tbl(['Approach','Method','Focus','What you compute'],[['Income-statement','Percentage of (credit) sales','Matching expense to sales','The <b>expense</b> directly'],['Balance-sheet','Percentage of total receivables','Valuing receivables','The required <b>ending allowance</b>'],['Balance-sheet','Aging the receivables','Valuing receivables (more accurate)','The required <b>ending allowance</b>']],{cls:'stack'})}
<div class="warn"><p>With the <b>balance-sheet</b> methods you compute the <b>target balance</b> of the allowance, then record only the amount needed to reach it — so the existing balance matters. With the <b>percentage-of-sales</b> method the result <i>is</i> the expense; the existing allowance balance is ignored.</p></div>
<div class="ex" data-t="Percentage of total receivables"><p>Hot Pot estimates 12% of its NT$50,000 year-end receivables is uncollectible. Required allowance = 50,000 × 12% = NT$6,000 (so the collectible value is NT$44,000).</p>
${je([['(a) Allowance had a 0 balance','Bad Debt Expense',6000,''],['','Allowance for Bad Debts','',6000],['(b) Allowance had a NT$2,000 credit balance','Bad Debt Expense',4000,''],['','Allowance for Bad Debts','',4000]])}<p>In (b), 6,000 − 2,000 = 4,000 is enough to bring the allowance up to 6,000.</p></div>
<h2>Aging the receivables</h2>
<p>Each receivable is grouped by how long it is <b>past due</b>; older groups get higher loss percentages, because the longer a debt is unpaid, the less likely it will be paid.</p>
<div class="ex" data-t="Hot Pot's aging schedule (Exhibit 7.3)">${tbl(['Age','Balance','% uncollectible','Estimate'],[['Current','23,000','1.5%','345'],['1–30 days past due','9,990','4%','400'],['31–60 days','12,260','20%','2,452'],['61–90 days','2,250','40%','900'],['91–120 days','1,000','60%','600'],['Over 120 days','1,500','80%','1,200'],['Total','50,000','','5,897']],{num:[1,2,3],tot:true})}
<p>With an existing NT$2,000 credit balance in the allowance:</p>${je([['Dec 31','Bad Debt Expense',3897,''],['','Allowance for Bad Debts','',3897],['To bring the allowance to NT$5,897 (5,897 − 2,000).']])}</div>
<div class="ex" data-t="Solving for the expense (Quiz Yourself)"><p>Credit sales $500,000; allowance at start $14,500; write-offs during the year $12,300; aging says $16,000 will be uncollectible. Use the allowance "T-account":</p>${calc([['Beginning allowance + Expense − Write-offs = Ending allowance',''],['14,500 + Expense − 12,300 = 16,000',''],['=Bad debt expense','$13,800']])}</div>
<div class="ex" data-t="Percentage of sales (added illustration)"><p>If a company instead used 1% of the same $500,000 credit sales, the expense would simply be <b>$5,000</b>, whatever the allowance balance. (Not on your slides; added so you can compare the approaches.)</p></div>
<h2>Presentation</h2>
<p>Hot Pot's partial balance sheet shows Accounts receivable NT$10,000, less Allowance NT$500 = <b>NT$9,500</b>; its income statement shows Bad debt expense NT$500 under operating expenses.</p>`},
{t:'How well are receivables managed?',lo:5,h:`
${kt('Accounts receivable turnover','Average collection period')}
<p class="lead">Two ratios tell you how quickly a company turns its receivables into cash.</p>
${calc([['Accounts receivable turnover = Sales revenue ÷ Average accounts receivable',''],['Average collection period = 365 ÷ Accounts receivable turnover','']])}
<p>Average receivables = (beginning + ending) ÷ 2. A <b>higher</b> turnover and a <b>shorter</b> collection period mean faster collection.</p>
<div class="case" data-t="A supermarket vs an electronics maker">${tbl(['','Carrefour','Philips'],[['Sales (€ millions)','76,495','24,244'],['Average receivables (€ millions)','2,265','4,602'],['Turnover','34 times','5.3 times'],['Collection period','10.7 days','68.9 days']],{num:[1,2]})}<p>Carrefour sells mostly for cash or card to shoppers, so it collects in under 11 days. Philips sells on credit to businesses and waits over two months. Neither is "bad" — always compare with the industry and the company's own credit terms.</p></div>
<div class="ex" data-t="Google, 2015 (Quiz Yourself)">${calc([['Average receivables = (11,556 + 9,383) ÷ 2','$10,469.5 million'],['Turnover = 74,989 ÷ 10,469.5','7.16 times'],['=Collection period = 365 ÷ 7.16','≈ 51 days']])}</div>
<div class="tip"><p>Rule of thumb from Chapter 10: the collection period should not greatly exceed the <b>credit terms</b>. A 51-day collection period with 30-day terms suggests slow-paying customers or loose credit policy. Some exam problems use 360 days instead of 365 — follow the question.</p></div>`},
{t:'Notes receivable',lo:6,h:`
${kt('Maturity date','Dishonored note')}
<p class="lead">A <b>promissory note</b> is a formal credit instrument with a stronger legal claim than an invoice. Companies often accept one to replace an overdue account.</p>
<ul><li><b>Face amount</b> — the amount written on the note.</li><li><b>Issuance date</b> and <b>due (maturity) date</b>.</li><li><b>Interest rate</b> — usually stated per year.</li></ul>
${calc([['Interest revenue = Face value × Annual rate × Term of the note (in years)','']])}
<div class="ex" data-t="HoHo Tea Co. (amounts in £)"><p>May 1, 2017: HoHo Tea accepts a 90-day, 12% note from CoMo Computer to settle CoMo's £5,000 account. (The slide treats 90 days as 3 months.)</p>${je([['May 1','Notes Receivable — CoMo',5000,''],['','Accounts Receivable — CoMo','',5000],['Settled account with a note.']])}
${calc([['Interest = 5,000 × 12% × 3/12','£150']])}${je([['Jul 30','Cash',5150,''],['','Notes Receivable — CoMo','',5000],['','Interest Revenue','',150],['Received face amount plus interest.']])}</div>
<h2>Dishonored notes</h2>
<p>If the maker doesn't pay at maturity, the note is <b>dishonored</b>. It's moved to Accounts Receivable for <b>face plus interest</b> — the company has still earned the interest and still has a claim.</p>
${je([['Jul 30','Accounts Receivable — CoMo',5150,''],['','Notes Receivable — CoMo','',5000],['','Interest Revenue','',150],['Transferred dishonored note to accounts receivable.']])}
<div class="ex" data-t="Pearl Company (Quiz Yourself)"><p>Aug 1: Pearl accepts a two-month, 12% note for Rock Company's $1,000 account. Interest = 1,000 × 12% × 2/12 = $20.</p>${je([['Aug 1','Notes Receivable — Rock',1000,''],['','Accounts Receivable — Rock','',1000],['Oct 1','Cash',1020,''],['','Notes Receivable — Rock','',1000],['','Interest Revenue','',20]])}
<p>If instead the note is dishonored and the bank charges Pearl a $5 fee, Pearl passes the fee on to Rock:</p>${je([['Oct 1','Accounts Receivable — Rock',1025,''],['','Notes Receivable — Rock','',1000],['','Interest Revenue','',20],['','Cash','',5]])}</div>`},
{t:'Foreign-currency receivables',lo:6,h:`
${kt('Foreign currency transaction','Exchange gain or loss','Forward contract')}
<p class="lead">If a sale is priced in another currency, the seller doesn't know how many of its own pesos (or dollars) it will receive until the customer pays. That is a <b>foreign currency transaction</b>.</p>
<p>The rules: record the sale at the exchange rate <b>on the date of sale</b>; then any change in the rate before settlement (or a reporting date in between) is an <b>exchange gain or loss</b>.</p>
<div class="ex" data-t="American Company sells to Korea"><p>American Company sells goods for ₩20,000,000 (Korean won), payment due July 12. It prepares quarterly statements on June 30.</p>
${tbl(['Date','US$ per ₩1','US$ value of receivable','Gain / (loss)'],[['Apr 23 (sale)','0.0010','20,000','—'],['Jun 30 (statements)','0.0007','14,000','(6,000)'],['Jul 12 (collected)','0.0008','16,000','2,000']],{num:[1,2,3]})}
${je([['Apr 23','Accounts Receivable (fc)',20000,''],['','Sales Revenue','',20000],['Jun 30','Foreign Exchange Loss',6000,''],['','Accounts Receivable (fc)','',6000],['Jul 12','Cash',16000,''],['','Accounts Receivable (fc)','',14000],['','Foreign Exchange Gain','',2000]])}
<p>Second quarter: sales $20,000, exchange loss $6,000, receivable $14,000. Third quarter: cash collected $16,000, exchange gain $2,000. Over the whole deal: <b>net exchange loss of $4,000</b> (expected $20,000, received $16,000).</p></div>
<div class="fix"><p>The slide text says the sale was on <b>March 23</b>, but the rate table and entry use <b>April 23</b>. The amounts are the same either way; use the date in the table.</p></div>
<h2>Reducing the risk</h2>
<ul><li>Price the sale in your <b>own currency</b> (then the customer bears the risk).</li><li>Enter a <b>forward contract</b> — agree today on the rate for the future exchange. A forward contract is an example of a <b>derivative</b>.</li></ul>
<div class="ph"><p>For a Philippine company, the "home" (functional) currency is usually the peso, so a sale priced in US dollars creates the same kind of exchange gain or loss as the peso–dollar rate moves (PAS 21).</p></div>`}
],
sum:['Receivables are claims for money, goods or services: accounts receivable (informal) and notes receivable (formal, with interest). Revenue from a credit sale is recognised when control transfers (PFRS 15, replacing IAS 18 shown on the slides).',
'Perpetual credit sales need a sales entry and a cost entry. Sales discounts and sales returns and allowances are contra-revenues; Net sales = Gross sales − discounts − returns (Hendrix: $132,800). Discounts apply only to amounts not returned.',
'The allowance method (GAAP) records estimated bad debts at period-end (Dr Bad Debt Expense, Cr Allowance). Write-offs (Dr Allowance, Cr A/R) don\'t change net receivables or income; recoveries reinstate the account then record the cash.',
'Balance-sheet methods (percentage of receivables, aging) find the required ending allowance and adjust for its existing balance; the percentage-of-sales method computes the expense directly.',
'Receivables turnover = sales ÷ average receivables; collection period = 365 ÷ turnover. Compare with credit terms and industry.',
'Note interest = face × rate × time. Dishonored notes move to A/R at face plus interest. Foreign-currency receivables are recorded at the sale-date rate; later rate changes create exchange gains or losses.'],
mcq:[
['Which method of recording bad debts is consistent with accrual accounting?',['Direct write-off','Allowance method','Cash basis','None'],1,'It matches the estimated expense to the period of the sale.'],
['The method that focuses on the income statement is the allowance method based on:',['Aging of receivables','Balance of receivables','Credit sales','Direct write-off'],2,'Percentage of credit sales computes the expense directly.'],
['Under the allowance method, writing off a specific account:',['Decreases net income','Increases bad-debt expense','Decreases both A/R and the allowance','Increases the allowance'],2,'Dr Allowance, Cr A/R — net receivables are unchanged.'],
['Collection of an account previously written off (allowance method):',['Decreases net income','Increases the allowance and has no effect on bad-debt expense','Has no effect on the allowance','Increases bad-debt expense'],1,'The reinstatement credits the allowance; no expense entry.'],
['Allowance has a ₱2,000 credit balance; aging shows ₱5,897 required. Bad-debt expense:',['₱5,897','₱7,897','₱3,897','₱2,000'],2,'5,897 − 2,000 = 3,897.'],
['Beginning allowance $14,500, write-offs $12,300, required ending allowance $16,000. Expense:',['$16,000','$13,800','$1,500','$28,300'],1,'14,500 + X − 12,300 = 16,000.'],
['Gross sales $140,000, sales discounts $2,700, sales returns $4,500. Net sales:',['$140,000','$137,300','$135,500','$132,800'],3,'140,000 − 2,700 − 4,500.'],
['Sales $74,989M; average receivables $10,469.5M. Average collection period is about:',['7 days','51 days','36 days','10 days'],1,'Turnover 7.16; 365 ÷ 7.16 ≈ 51 days.'],
['A £5,000, 12%, 3-month note is dishonored at maturity. Accounts Receivable is debited for:',['£5,000','£5,150','£5,600','£150'],1,'Face plus the interest earned.'],
['A ₩20M receivable was worth $20,000 at the sale date and $14,000 at the reporting date. The company reports:',['A $6,000 exchange gain','A $6,000 exchange loss','Sales of $14,000','No entry until collection'],1,'The receivable lost $6,000 of dollar value.']],
sa:[
['Why does the direct write-off method violate GAAP?','<p>It records the bad-debt expense when an account is found worthless, often in a later period than the sale that caused it, so expenses aren\'t matched with revenues. It also reports receivables at more than the amount expected to be collected.</p>'],
['Explain why a write-off under the allowance method does not change net realizable value.','<p>Both Accounts Receivable and the Allowance fall by the same amount. Net realizable value (A/R − Allowance) stays the same; the loss was already recognised when the estimate was recorded.</p>'],
['When using aging, why must you consider the existing allowance balance, but not with the percentage-of-sales method?','<p>Aging gives the required <i>ending balance</i> of the allowance, so you record only the difference needed to reach it. Percentage-of-sales gives the <i>expense</i> for the period directly.</p>']],
prob:[
['Highland: credit sales ₱60,000; estimated uncollectible ₱8,000; actual write-off ₱3,000; later recovered ₱2,500 of the written-off accounts and collected it. Journalize under the allowance method, and give the write-off entry under the direct method.',je([['1','Accounts Receivable',60000,''],['','Sales','',60000],['2','Bad Debts Expense',8000,''],['','Allowance for Doubtful Accounts','',8000],['3','Allowance for Doubtful Accounts',3000,''],['','Accounts Receivable','',3000],['4','Accounts Receivable',2500,''],['','Allowance for Doubtful Accounts','',2500],['5','Cash',2500,''],['','Accounts Receivable','',2500]])+'<p>Direct method write-off: Dr Bad Debts Expense 3,000 / Cr Accounts Receivable 3,000 (no estimate entry).</p>'],
['Pearl accepts a 2-month, 12% note dated Aug 1 for a $1,000 account. Record (a) acceptance, (b) collection on Oct 1, (c) dishonor on Oct 1 with a $5 bank charge passed to the customer.',je([['(a) Aug 1','Notes Receivable',1000,''],['','Accounts Receivable','',1000],['(b) Oct 1','Cash',1020,''],['','Notes Receivable','',1000],['','Interest Revenue','',20],['(c) Oct 1','Accounts Receivable',1025,''],['','Notes Receivable','',1000],['','Interest Revenue','',20],['','Cash','',5]])]]
});

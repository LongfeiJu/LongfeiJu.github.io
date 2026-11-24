CH.push({n:7,color:'#8a6d00',title:'Inventory and Materials',
hook:'From the stockroom to cost of goods sold: counting, costing and controlling the goods a business sells or makes.',
los:['Define inventory and describe merchandise and manufacturing inventories and their cost flows.','Compare the periodic and perpetual inventory systems and record purchases and sales under each.','Determine which goods and which costs belong in inventory, including purchase discounts.','Apply FIFO, LIFO, weighted-average and specific identification under periodic and perpetual systems.','Describe materials control procedures, documents and the accounting entries for materials.','Compute the economic order quantity, order point and safety stock.','Account for spoiled units, defective units, scrap and waste.'],
why:`<p>For a pharmacy, a bakery or a manufacturer, inventory is often the biggest current asset — and cost of goods sold the biggest expense. Get inventory wrong and both the balance sheet and profit are wrong at the same time.</p><p>This chapter, built from your "Accounting for Materials" deck, covers two halves: the <b>financial-accounting</b> side (periodic vs perpetual, cost-flow methods — heavily tested on your pre-midterm) and the <b>cost-accounting</b> side (how a factory controls, orders and accounts for raw materials, including EOQ and spoilage).</p>`,
terms:{
'Inventory':'Assets held for sale in the ordinary course of business, in production for sale (work in process), or to be used up in production (raw materials and supplies).',
'Merchandise inventory':'Goods bought ready-made for resale.',
'Raw materials':'Materials on hand that will be used to make products.',
'Work in process':'Partly finished products still in production (WIP).',
'Finished goods':'Completed products ready for sale.',
'Periodic inventory system':'No running record of inventory; ending inventory is found by physical count and cost of goods sold is computed at period-end.',
'Perpetual inventory system':'A continuous record of inventory, updated with every purchase and sale; cost of goods sold is recorded at each sale.',
'Cost of goods sold':'The cost of the inventory sold during the period (COGS).',
'Cost of goods available for sale':'Beginning inventory plus net purchases.',
'FOB shipping point':'Ownership passes to the buyer when goods leave the seller; the buyer pays freight.',
'FOB destination':'Ownership passes when goods reach the buyer; the seller pays freight.',
'Consignment':'Goods held by a dealer (consignee) for sale on behalf of the owner (consignor); they remain the consignor\'s inventory.',
'Freight-in':'Transportation cost on goods purchased; part of inventory cost.',
'Gross method':'Recording purchases at the full invoice price; discounts taken are recorded when paid.',
'Net method':'Recording purchases at the price net of the cash discount; discounts not taken are recorded as interest/discounts lost.',
'FIFO':'First-in, first-out: the oldest costs go to cost of goods sold; ending inventory is at the newest costs.',
'LIFO':'Last-in, first-out: the newest costs go to cost of goods sold; ending inventory is at the oldest costs. Not permitted under PFRS/IFRS.',
'Weighted average':'Cost of goods available for sale ÷ units available; one average unit cost for the period (periodic).',
'Moving average':'A new average unit cost computed after every purchase (perpetual).',
'Specific identification':'Each unit is tracked at its own actual cost.',
'Purchase requisition':'Form used by the storekeeper to tell the purchasing agent that materials are needed.',
'Purchase order':'The order, prepared by the purchasing agent, that authorises the supplier to ship materials.',
'Receiving report':'Form the receiving clerk uses to count and identify materials received.',
'Materials requisition':'Form authorised factory staff use to withdraw materials from the storeroom.',
'Debit-credit memorandum':'Document used when a shipment does not match the order and/or the invoice.',
'Economic order quantity':'EOQ — the order size that minimises total ordering and carrying costs.',
'Ordering cost':'Costs of placing and receiving orders: purchasing staff, communication, record-keeping.',
'Carrying cost':'Costs of holding stock: storage, handling, interest, insurance, taxes, theft, obsolescence.',
'Lead time':'The time between placing an order and receiving the materials.',
'Order point':'The stock level at which a new order should be placed: daily usage × lead time (plus safety stock).',
'Safety stock':'Extra inventory kept as a cushion against stock-outs.',
'Spoiled units':'Units that fail production standards and are sold for salvage value or discarded.',
'Defective units':'Units that fail standards but can be reworked into good or irregular units.',
'Scrap':'Leftover material that cannot be reused for the same purpose but may be sold or used elsewhere.',
'Waste':'Leftover material with no use or resale value, which may cost money to dispose of.',
'Gross profit ratio':'Gross profit ÷ net sales.',
'Inventory turnover':'Cost of goods sold ÷ average inventory.'},
lessons:[
{t:'What inventory is and how its cost flows',lo:1,h:`
${kt('Inventory','Merchandise inventory','Raw materials','Work in process','Finished goods')}
<p class="lead"><b>Inventory</b> is assets a company (1) intends to <b>sell</b> in the normal course of business, (2) has <b>in production</b> for future sale, or (3) uses up in <b>producing</b> goods to be sold.</p>
${tbl(['Merchandiser','Manufacturer'],[['One account: <b>Merchandise Inventory</b> — goods bought ready for resale','Three accounts: <b>Raw Materials</b>, <b>Work in Process</b>, <b>Finished Goods</b>']])}
<p>Inventory control is a key feature of any cost-accounting system: inventory includes raw materials, work in progress, finished and semi-finished products, spare parts and by-products.</p>
<h2>Manufacturing cost flow</h2>
<figure><svg viewBox="0 0 660 200" role="img" aria-label="Manufacturing inventory cost flow"><defs><marker id="a7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="a"/></marker></defs>
<g text-anchor="middle" font-size="13" font-weight="700"><rect x="10" y="20" width="130" height="44" rx="8" class="al"/><text x="75" y="47">Raw Materials</text>
<rect x="10" y="80" width="130" height="44" rx="8" class="al"/><text x="75" y="107">Direct Labor</text>
<rect x="10" y="140" width="130" height="44" rx="8" class="al"/><text x="75" y="160">Manufacturing</text><text x="75" y="176">Overhead</text>
<rect x="250" y="80" width="130" height="44" rx="8" class="a"/><text x="315" y="107" class="wt">Work in Process</text>
<rect x="420" y="80" width="110" height="44" rx="8" class="a"/><text x="475" y="107" class="wt">Finished Goods</text>
<rect x="560" y="80" width="94" height="44" rx="8" class="al"/><text x="607" y="100">Cost of</text><text x="607" y="116">Goods Sold</text></g>
<path d="M142 42c60 0 60 50 104 54M142 102h104M142 162c60 0 60-50 104-54M382 102h34M532 102h24" class="as" stroke-width="2" marker-end="url(#a7)"/>
<g font-size="11.5" class="mu"><text x="188" y="54">(4) used</text><text x="182" y="96">(5) applied</text><text x="188" y="160">(6) applied</text><text x="399" y="142" text-anchor="middle">(7) completed</text><text x="543" y="142" text-anchor="middle">(8) sold</text></g></svg><figcaption>(1)–(3) costs are incurred; (4)–(6) they enter production; (7) finished units transfer out; (8) sold units become cost of goods sold.</figcaption></figure>
<div class="ph"><p>Exercise items based on <b>PAS 2</b>: inventories include materials or supplies consumed in production <i>or in rendering services</i>; a property developer's lots held for sale <b>are</b> inventory; a factory's machinery is <b>not</b> (it's PPE); a brokerage's shares held for resale are inventory for that business.</p></div>`},
{t:'Periodic versus perpetual systems',lo:2,h:`
${kt('Periodic inventory system','Perpetual inventory system','Cost of goods sold','Cost of goods available for sale')}
<p class="lead">Two systems measure ending inventory and cost of goods sold (COGS).</p>
${tbl(['Event','Periodic','Perpetual'],[['Purchase of inventory','Dr <b>Purchases</b>','Dr <b>Inventory</b>'],['Sale of inventory','Record the sale only — no COGS entry','Record the sale <b>and</b> Dr COGS / Cr Inventory'],['Returns, freight, discounts','Separate accounts (Purchase Returns, Freight-in, Purchase Discounts)','Directly in Inventory'],['End of period','Physical count → compute COGS','No separate COGS computation needed (count still taken to check)']],{cls:'stack'})}
<h2>The periodic COGS model</h2>
${calc([['Beginning inventory',''],['+ Net purchases',''],['=Cost of goods available for sale',''],['− Ending inventory (from physical count)',''],['=Cost of goods sold','']])}
<div class="ex" data-t="Matrix, Inc. — both systems"><p>Matrix buys $600,000 of merchandise on account and sells goods costing $540,000 for $820,000 on account. Beginning inventory was $120,000; the year-end count shows $180,000.</p>
<p><b>Perpetual</b></p>${je([['','Inventory',600000,''],['','Accounts Payable','',600000],['','Accounts Receivable',820000,''],['','Sales','',820000],['','Cost of Goods Sold',540000,''],['','Inventory','',540000]])}
<p><b>Periodic</b></p>${je([['','Purchases',600000,''],['','Accounts Payable','',600000],['','Accounts Receivable',820000,''],['','Sales','',820000],['No COGS entry at the time of sale.']])}
${calc([['Beginning inventory',120000],['Plus: purchases',600000],['Cost of goods available for sale',720000],['Less: ending inventory','(180,000)'],['=Cost of goods sold','$540,000']])}
${je([['12/31','Cost of Goods Sold',540000,''],['','Inventory (ending)',180000,''],['','Inventory (beginning)','',120000],['','Purchases','',600000],['Year-end entry to record COGS.']])}</div>
<div class="ex" data-t="A perpetual stock card"><p>Item "Super X", unit cost ₱200, storage room:</p>${tbl(['Date','Explanation','Qty in','Qty out','On hand','Balance (₱)'],[['Jan 1','Beginning','','','8','1,600'],['Jan 31','Sold','','5','3','600'],['Feb 5','Purchased','10','','13','2,600'],['Mar 6','Sales return','','(1)','12','2,400']],{num:[2,3,4,5]})}<p>Recap: purchases 10 units (₱2,000); COGS 4 units net (₱800); ending 12 units (₱2,400).</p></div>
<h2>Pros and cons</h2>
<p><b>Perpetual advantages:</b> continuous inventory amounts; COGS without a count; data for min/max stock levels and for quantities at each location; a basis for measuring theft; records sales at both price and cost; easily computerised. <b>Disadvantages:</b> time-consuming, costly, more clerical work.</p>
<p><b>Periodic disadvantages:</b> requires a full physical count each time statements are prepared; weak control for purchasing.</p>
<div class="tip"><p>Pre-midterm/exercise items: "In a periodic system COGS is determined by subtracting ending inventory from goods available for sale" ✓. "Perpetual… does NOT provide COGS information needed to record sales at both price and cost" is the <b>EXCEPT</b> option. And a perpetual business <b>still does</b> physical counts (to detect shrinkage) — "cannot conduct a count" is false.</p></div>`},
{t:'What goes into inventory?',lo:3,h:`
${kt('FOB shipping point','FOB destination','Consignment','Freight-in','Gross method','Net method')}
<p class="lead">General rule: inventory includes <b>all goods the company owns on the inventory date, wherever they are</b>. Two tricky groups: goods in transit and goods on consignment.</p>
${tbl(['Situation','Whose inventory?'],[['In transit, <b>FOB shipping point</b>','Buyer\'s — ownership passed when shipped'],['In transit, <b>FOB destination</b>','Seller\'s — until it arrives'],['Goods <b>on consignment</b> (held by a dealer for the owner)','The owner\'s (consignor), not the dealer\'s'],['Goods sold but held for the customer','The customer\'s']])}
<div class="ex" data-t="General Pharmacy (pre-midterm Q22)"><p>The year-end count of ₱600,000 included the items below. What should ending inventory be?</p>
${calc([['Inventory as counted',600000],['In transit TO a customer, FOB destination — still ours: keep','0'],['In transit FROM supplier, FOB destination — not ours yet','(62,000)'],['Held on consignment from Unilab — Unilab\'s','(22,500)'],['Paid for and held at a patient\'s request — sold','(94,000)'],['Goods carried at selling price ₱150,000 (cost + 20%): cost = 150,000 ÷ 1.20 = 125,000','(25,000)'],['=Correct ending inventory','₱396,500']])}</div>
<h2>Costs included in inventory</h2>
<p>Inventory cost = invoice price + freight-in − purchase returns − purchase discounts. Under PAS 2 cost also includes import duties and <i>non-recoverable</i> taxes, and (for manufacturers) conversion costs including <b>fixed production overhead</b>.</p>
<div class="warn"><p><b>Not</b> inventory cost (Exercise 4): trade discounts (deducted), <b>recoverable</b> purchase taxes (e.g. input VAT), <b>storage of finished goods</b>, abnormal waste, administrative costs and <b>selling costs</b> — these are expenses.</p></div>
<h2>Gross vs net method for purchase discounts</h2>
<div class="ex" data-t="Matrix: $20,000 on 2/10, n/30, partly paid late">${tbl(['Date','Gross method','Net method'],[['10/5 purchase','Purchases 20,000 / A/P 20,000','Purchases 19,600 / A/P 19,600'],['10/14 pay $14,000 of invoice in time','A/P 14,000 / Purchase Discounts 280 / Cash 13,720','A/P 13,720 / Cash 13,720'],['11/4 pay $6,000 late','A/P 6,000 / Cash 6,000','A/P 5,880 + Interest Expense 120 / Cash 6,000']],{cls:'stack'})}
<p>The <b>net</b> method treats a missed discount as a financing cost — the purchase only ever "cost" 98%. Your Exercise 4 asked which methods may be used: <b>both</b> net and gross.</p></div>
<div class="ex" data-t="Net method, perpetual system"><p>Matrix buys $6,000 on 2/10, n/30; pays $160 freight-in; returns $200 of damaged goods; sells everything for $8,300.</p>${je([['','Inventory (6,000 × 98%)',5880,''],['','Accounts Payable','',5880],['','Inventory',160,''],['','Cash','',160],['','Accounts Payable',200,''],['','Inventory','',200],['','Accounts Receivable',8300,''],['','Sales Revenue','',8300],['','Cost of Goods Sold',5840,''],['','Inventory','',5840]])}<p>COGS = 5,880 + 160 − 200 = $5,840. Under periodic, the same total appears as Purchases 5,880 − Returns 200 + Freight-in 160 = net purchases 5,840.</p></div>
<div class="fix"><p>Strictly, under the net method the returned goods were recorded at net, so the return would be $196 (200 × 98%). The slide uses $200 for simplicity.</p></div>
<div class="ex" data-t="Cost-flow purchase with freight (pre-midterm Q23)"><p>See <a class="xl" href="#c5-3">Lesson 5.3</a> for the trade-discount-plus-cash-discount calculation (₱315,000).</p></div>`},
{t:'Cost-flow methods under the periodic system',lo:4,h:`
${kt('FIFO','LIFO','Weighted average','Specific identification')}
<p class="lead">When identical units are bought at different prices, which cost goes to COGS and which stays in ending inventory? The <b>cost-flow assumption</b> decides — and the physical flow of goods doesn't have to match it.</p>
<div class="tip"><p>Pre-midterm Q2: the primary purpose of a flow assumption is to <b>determine which unit costs are assigned to inventory and which to cost of goods sold</b>.</p></div>
<div class="ex" data-t="Yore Frame, Inc. — September data"><p>A count on September 30 shows 600 frames on hand, so 1,950 − 600 = 1,350 were sold.</p>${tbl(['Date','Units','Unit cost','Total'],[['Beginning inventory','800','$22.00','$17,600'],['Sep 3 purchase','300','24.00','7,200'],['Sep 15 purchase','250','25.00','6,250'],['Sep 21 purchase','200','27.00','5,400'],['Sep 29 purchase','400','28.00','11,200'],['Goods available for sale','1,950','','$47,650']],{num:[1,2,3],tot:true})}</div>
<h2>FIFO — first in, first out</h2>
<p>The oldest costs are sold first; ending inventory is the <b>most recent</b> purchases.</p>
${calc([['Ending inventory: 400 × $28 + 200 × $27 = 11,200 + 5,400','$16,600'],['=COGS: 47,650 − 16,600','$31,050']])}
<h2>LIFO — last in, first out</h2>
<p>The newest costs are sold first; ending inventory is the <b>oldest</b> costs.</p>
${calc([['Ending inventory: 600 × $22 (from beginning inventory)','$13,200'],['=COGS: 47,650 − 13,200 (= 200 × 22 + all purchases 30,050)','$34,450']])}
<h2>Weighted average</h2>
${calc([['Average unit cost = 47,650 ÷ 1,950','$24.4359'],['Ending inventory: 600 × 24.4359','$14,661.54'],['=COGS: 1,350 × 24.4359','$32,988.46']])}
<h2>Specific identification</h2>
<p>Each item is tracked at its own cost (cars, jewellery). Accurate — but if items are identical, management could pick which costs to "sell," so <b>income can be manipulated</b>.</p>
<h2>When prices are rising</h2>
${tbl(['','FIFO','LIFO'],[['COGS','Lower (older, cheaper costs)','Higher (newer costs)'],['Ending inventory','Close to current replacement cost','Old, low costs'],['Net income and taxes','Higher','Lower'],['Allowed under PFRS/IFRS?','Yes','<b>No</b>']],{cls:'stack'})}
<div class="fix"><p>The slide says LIFO "is not officially endorsed" by PFRS/IFRS. More precisely, <b>PAS 2 prohibits LIFO</b>; only FIFO, weighted average and specific identification are allowed. LIFO still appears in exams (and is allowed under US GAAP), so you must be able to compute it.</p></div>`},
{t:'Cost-flow methods under the perpetual system',lo:4,h:`
${kt('Moving average')}
<p class="lead">Under perpetual, costs are assigned <b>at each sale</b>, so the timing of sales matters. Yore Frame's sales were: <b>600 units on Sep 1, 300 on Sep 10, 450 on Sep 30</b>.</p>
<h2>FIFO perpetual — same answer as periodic</h2>
${tbl(['Sale','Oldest units on hand at that moment','COGS'],[['Sep 1 — 600','600 @ $22 (beginning)','13,200'],['Sep 10 — 300','200 @ $22 + 100 @ $24','6,800'],['Sep 30 — 450','200 @ $24 + 250 @ $25','11,050'],['Total','','31,050']],{num:[2],tot:true})}
<p>Units left: <b>200 @ $27 + 400 @ $28 = $16,600</b>. COGS <b>$31,050</b> — identical to periodic FIFO.</p>
<h2>LIFO perpetual — differs from periodic</h2>
${tbl(['Sale','Newest units on hand at that moment','COGS'],[['Sep 1 — 600','600 from beginning inventory @ $22','13,200'],['Sep 10 — 300','all 300 from the Sep 3 purchase @ $24','7,200'],['Sep 30 — 450','400 @ $28 (Sep 29) + 50 @ $27 (Sep 21)','12,550'],['Total','','32,950']],{num:[2],tot:true})}
${calc([['Ending inventory: 200 @ $22 + 250 @ $25 + 150 @ $27 = 4,400 + 6,250 + 4,050','$14,700']])}
<h2>Moving average</h2>
<p>A new average is computed after every purchase:</p>
${tbl(['Date','Event','Units','Unit cost','Balance'],[['Beginning','','800','22.000','17,600.00'],['Sep 1','Sold 600 @ 22.000 (13,200)','200','22.000','4,400.00'],['Sep 3','Bought 300 @ 24','500','23.200','11,600.00'],['Sep 10','Sold 300 @ 23.200 (6,960)','200','23.200','4,640.00'],['Sep 15–29','Bought 250, 200, 400','1,050','26.181','27,490.00'],['Sep 30','Sold 450 @ 26.181 (11,781.45)','600','26.181','15,708.55']],{num:[2,3,4]})}
${calc([['New average after Sep 3 = 11,600 ÷ 500','$23.200'],['New average after Sep 29 = 27,490 ÷ 1,050','$26.181'],['=COGS = 13,200 + 6,960 + 11,781.45','$31,941.45']])}
<h2>Summary (perpetual)</h2>
${tbl(['','Average','FIFO','LIFO'],[['Cost of goods sold','31,941','31,050','32,950'],['Ending inventory','15,709','16,600','14,700'],['Total (always = goods available)','47,650','47,650','47,650']],{num:[1,2,3],tot:true})}
<div class="tip"><p>FIFO gives the <b>same</b> results under periodic and perpetual. LIFO and average generally do <b>not</b>, because the "last-in" or "average" at the moment of each sale depends on the timing of purchases.</p></div>

<h2>Two inventory ratios</h2>
${calc([['Gross profit ratio = Gross profit ÷ Net sales',''],['Inventory turnover = Cost of goods sold ÷ Average inventory','']])}
<p>Low turnover versus the industry suggests excess or wrong inventory. Inventory write-downs and changes in inventory method are ways earnings can be manipulated, reducing <b>earnings quality</b>. See <a class="xl" href="#c10-4">Lesson 10.4</a>.</p>`},
{t:'Controlling and accounting for materials',lo:5,h:`
${kt('Purchase requisition','Purchase order','Receiving report','Materials requisition','Debit-credit memorandum')}
<p class="lead">In a factory, raw materials are cash in another form. Effective cost control needs: assigned duties, a list of who may approve spending, goals, reports comparing goals to actual, corrective action, and follow-up.</p>
<p><b>Physical control:</b> limited access to storage areas, segregation of duties, accurate recording. <b>Investment control:</b> keep enough stock, of enough variety, without tying up working capital needed elsewhere.</p>
<h2>The people</h2>
${tbl(['Person','Responsibility'],[['Purchasing agent','Buys raw materials'],['Receiving clerk','Receives incoming shipments'],['Storeroom keeper','Has charge of materials after receipt; keeps bin cards'],['Production supervisor','Runs the department that uses the materials']])}
<h2>The paper trail</h2>
<ol class="steps"><li>Stock reaches its <b>re-order point</b> → storekeeper prepares a <b>purchase requisition</b>.</li><li>Purchasing chooses the best supplier (quality, price) and issues a <b>purchase order</b>.</li><li>Goods arrive → receiving clerk counts them on a <b>receiving report</b> and compares with the PO. The <b>vendor's invoice</b> is checked against both. A <b>debit-credit memorandum</b> is used if they don't match.</li><li>A foreman needs materials → presents a <b>materials requisition</b>; storekeeper checks authorisation, issues, updates the bin card. Unused items come back with a <b>returned materials report</b>.</li><li>Accounting prices the requisition (FIFO, average…) and charges the job or overhead.</li></ol>
<h2>Materials accounting entries</h2>
${je([['','Materials',"xx",''],['','Accounts Payable','',"xx"],['Purchased from vendor.'],['','Work in Process (direct materials)',"xx",''],['','Factory Overhead Control (indirect materials)',"xx",''],['','Materials','',"xx"],['Issued to production.'],['','Accounts Payable',"xx",''],['','Cash','',"xx"],['Paid the vendor.'],['','Finished Goods',"xx",''],['','Work in Process','',"xx"],['Transferred completed work.'],['','Accounts Receivable',"xx",''],['','Sales','',"xx"],['','Cost of Goods Sold',"xx",''],['','Finished Goods','',"xx"],['Sold finished goods on account.']])}
<div class="tip"><p>The Materials account in the general ledger is supported by a <b>stores (materials) ledger</b> with one account per item — a subsidiary ledger (<a class="xl" href="#c2-4">Lesson 2.4</a>). Exercise 4: Work in Process does <b>not</b> track all direct-material <i>purchases</i> — only materials <i>issued</i> to jobs.</p></div>`},
{t:'How much to order, and when: EOQ, order point, safety stock',lo:6,h:`
${kt('Economic order quantity','Ordering cost','Carrying cost','Lead time','Order point','Safety stock')}
<p class="lead">Order too often and you drown in ordering costs; order too much at once and you pay to store it. The <b>economic order quantity (EOQ)</b> is the order size that minimises the two together.</p>
<p><b>Ordering costs:</b> purchasing/receiving/inspection wages, communication, accounting and record-keeping. <b>Carrying costs:</b> storage and handling, interest on money tied up, insurance and taxes, theft, deterioration and obsolescence, records. A third cost, <b>stock-out cost</b>, is lost sales, lost goodwill and expensive rush orders.</p>
<h2>Tabular method</h2>
<div class="ex" data-t="Annual demand 10,000 units; ₱10 per order; carrying cost ₱0.80 per unit per year">${tbl(['Order size','No. of orders','Ordering cost','Average inventory','Carrying cost','Total cost'],[['100','100','1,000','50','40','1,040'],['300','33','330','150','120','450'],['500','20','200','250','200','<b>400</b>'],['700','14','140','350','280','420'],['900','11','110','450','360','470']],{num:[0,1,2,3,4,5]})}
<p>Orders = demand ÷ order size; average inventory = order size ÷ 2; carrying cost = average inventory × ₱0.80. The minimum total is at 500 units. Ordering and carrying costs move in <b>opposite directions</b>.</p></div>
<h2>Formula method</h2>
${calc([['EOQ = √(2 × O × Q ÷ C)',''],['O = cost per order; Q = annual units required; C = carrying cost per unit per year','']])}
<div class="ex" data-t="Formula, same data">${calc([['EOQ = √(2 × 10,000 × 10 ÷ 0.80) = √250,000','500 units']])}</div>
<div class="ex" data-t="Part X"><p>Annual use 5,000 units; ordering cost $10; unit cost $0.50; carrying cost 10% of unit cost.</p>${calc([['C = 0.50 × 10%','$0.05'],['EOQ = √(2 × 5,000 × 10 ÷ 0.05) = √2,000,000','≈ 1,414 units']])}</div>
<figure><svg viewBox="0 0 480 240" role="img" aria-label="EOQ cost curves"><path d="M50 20v180h410" class="ln" stroke-width="1.5"/><path d="M60 40 C120 150 220 175 450 182" class="ln" stroke-width="2.5" stroke-dasharray="6 4"/><path d="M60 192 L450 70" class="as" stroke-width="2.5"/><path d="M70 60 C140 150 190 120 230 118 C300 116 380 88 450 52" class="as" stroke-width="3.5"/><path d="M228 118v82" class="ln" stroke-dasharray="3 4"/><circle cx="228" cy="118" r="5" class="a"/><text x="232" y="216" font-size="12" text-anchor="middle">EOQ</text><text x="455" y="48" font-size="12" text-anchor="end">Total cost</text><text x="455" y="88" font-size="12" text-anchor="end">Carrying cost</text><text x="440" y="176" font-size="12" text-anchor="end">Ordering cost</text><text x="60" y="16" font-size="12">Cost</text><text x="455" y="216" font-size="12" text-anchor="end">Units per order</text></svg><figcaption>Ordering cost falls as order size grows; carrying cost rises; total cost is lowest at the EOQ.</figcaption></figure>
<h2>Order point and safety stock</h2>
${calc([['Order point = Daily usage × Lead time (days)',''],['Daily usage 300 × lead time 4 days','1,200 units'],['Add: safety stock',800],['=Revised order point','2,000 units']])}
<p>When stock falls to 1,200 units (or 2,000 with safety stock), order <b>1,414</b> units (the EOQ). Lead time is the gap between placing and receiving an order.</p>`},
{t:'Spoiled units, defective units, scrap and waste',lo:7,h:`
${kt('Spoiled units','Defective units','Scrap','Waste')}
${tbl(['Item','Meaning'],[['<b>Spoiled units</b>','Fail standards; sold for salvage value or thrown away'],['<b>Defective units</b>','Fail standards but can be reworked into good units or "irregulars"'],['<b>Scrap</b>','Leftover material not reusable for the same purpose; may be sold for a small amount'],['<b>Waste</b>','Leftover with no use or resale value; may cost money to dispose of']])}
<h2>Spoiled units: two treatments</h2>
<p><b>Charged to all production</b> — spoilage is normal to the process (within the company's limit). An allowance is built into the factory overhead rate; the loss goes to Factory Overhead Control, so the job's unit cost doesn't rise. <b>Charged to the specific job</b> — the job's exacting specifications caused it; the loss stays in the job, raising the cost of its good units. Abnormal spoilage (above the limit) goes to a <b>loss account</b>.</p>
<div class="ex" data-t="Job 3056: 4,000 units at ₱40 each"><p>Unit costs: direct materials ₱15, direct labor ₱13, overhead ₱12 (including a ₱1 allowance for spoiled work). 200 units (a normal number) were rejected and sold for ₱18 each.</p>
<p><b>1. Loss charged to all production</b></p>${je([['a','Work in Process (4,000 × 40)',160000,''],['','Materials (× 15)','',60000],['','Payroll (× 13)','',52000],['','Factory Overhead Applied (× 12)','',48000],['b','Spoiled Goods (200 × 18)',3600,''],['','Factory Overhead Control (loss)',4400,''],['','Work in Process (200 × 40)','',8000],['c','Finished Goods (3,800 × 40)',152000,''],['','Work in Process','',152000]])}
<p><b>2. Loss charged to the specific job</b> — the overhead rate excludes the ₱1 allowance (₱11):</p>${je([['a','Work in Process',156000,''],['','Materials','',60000],['','Payroll','',52000],['','Factory Overhead Applied (× 11)','',44000],['b','Spoiled Goods',3600,''],['','Work in Process','',3600],['c','Finished Goods',152400,''],['','Work in Process','',152400]])}
<p>Good units now cost 152,400 ÷ 3,800 = <b>₱40.11</b> each, slightly above ₱40.</p></div>
<h2>Defective units</h2>
<div class="ex" data-t="Reworking 300 defective units"><p>Rework costs: materials ₱2,000, labor ₱4,000, overhead ₱2,000 (total ₱8,000).</p>${tbl(['','Charged to all production','Charged to the job'],[['Rework entry','Dr Factory Overhead Control 8,000 / Cr Materials 2,000, Payroll 4,000, FOH Applied 2,000','Dr Work in Process 8,000 / Cr the same three'],['Transfer to finished goods','160,000 (4,000 × ₱40)','164,000 (156,000 + 8,000)']],{cls:'stack'})}</div>
<h2>Scrap and waste</h2>
${tbl(['Situation','Entry'],[['Scrap traceable to a job','Dr Scrap Materials / Cr Work in Process'],['Scrap not traceable to a job','Dr Scrap Materials / Cr Factory Overhead Control'],['Scrap from factory supplies / value unknown until sold','Dr Cash / Cr Scrap Revenue (Miscellaneous Income)'],['Waste disposal, all jobs','Dr Factory Overhead Control / Cr Accounts Payable'],['Waste disposal, specific job','Dr Work in Process — Job / Cr Accounts Payable']],{cls:'stack'})}
<div class="warn"><p>Scrap or waste above a predetermined normal rate signals inefficiency; management should investigate. Disposal costs are expected to rise as landfills fill up.</p></div>`}
],
sum:['Inventory is held for sale, in production, or for use in production. Merchandisers have one inventory account; manufacturers have raw materials, work in process and finished goods.',
'Periodic: purchases go to a Purchases account and COGS = beginning + purchases − ending (by count). Perpetual: Inventory is updated for every purchase and sale, with a COGS entry at each sale.',
'Inventory includes all goods owned, wherever located: FOB shipping point goods in transit belong to the buyer; FOB destination to the seller; consigned goods to the consignor. Cost = price + freight-in − returns − discounts; exclude selling, storage of finished goods and recoverable taxes.',
'FIFO assigns oldest costs to COGS; LIFO newest (prohibited by PAS 2); weighted/moving average uses an average. Yore Frame periodic COGS: FIFO $31,050, LIFO $34,450, average $32,988; perpetual: FIFO $31,050, LIFO $32,950, moving average $31,941.',
'Materials control uses requisitions, purchase orders, receiving reports, invoices, debit-credit memos and materials requisitions, with separation of duties; purchases debit Materials and issues debit WIP or overhead.',
'EOQ = √(2OQ/C) minimises ordering plus carrying cost; order point = daily usage × lead time, plus safety stock.',
'Normal spoilage can be charged to all production (via overhead) or to the specific job; abnormal spoilage goes to a loss. Rework costs, scrap recoveries and waste disposal follow the same job-vs-all-production logic.'],
mcq:[
['The primary purpose of an inventory flow assumption is to:',['Increase inventory turnover','Increase gross profit','Determine which unit costs go to inventory and which to COGS','Minimise taxes'],2,'It assigns costs between ending inventory and COGS.'],
['In a periodic system, COGS is determined by:',['Entries at each sale','Goods available for sale minus ending inventory','Net sales × cost ratio','Daily counts'],1,'COGS is a residual after the physical count.'],
['Goods in transit shipped FOB shipping point at year-end belong to the:',['Seller','Buyer','Carrier','Neither'],1,'Ownership passes when they leave the seller.'],
['Which is NOT included in inventory cost?',['Freight-in','Import duties','Storage cost of finished goods','Purchase price net of trade discounts'],2,'Storage after production is a period expense.'],
['Yore Frame (periodic): 1,950 units available for $47,650; 600 on hand. FIFO ending inventory:',['$13,200','$14,661.54','$16,600','$31,050'],2,'400 × 28 + 200 × 27 = 16,600.'],
['Under rising prices, which method gives the highest net income?',['FIFO','LIFO','Weighted average','All the same'],0,'FIFO matches older, cheaper costs with current revenue.'],
['Under PAS 2, LIFO is:',['Required','Preferred','Allowed with disclosure','Prohibited'],3,'Only FIFO, weighted average and specific identification are allowed.'],
['Annual demand 10,000 units, ordering cost ₱10, carrying cost ₱0.80. EOQ:',['250','500','1,000','1,414'],1,'√(2 × 10,000 × 10 ÷ 0.80) = 500.'],
['Daily usage 300 units, lead time 4 days, safety stock 800. Order point:',['1,200','800','2,000','1,414'],2,'300 × 4 + 800 = 2,000.'],
['The document used when a shipment does not match the order or invoice is the:',['Purchase order','Receiving report','Vendor\'s invoice','Debit-credit memorandum'],3,'It records the discrepancy and the adjustment.']],
sa:[
['Why does FIFO give the same result under periodic and perpetual systems, while LIFO doesn\'t?','<p>FIFO always sells the oldest units first, so the units left at the end are always the latest purchases regardless of when sales occur. LIFO takes the newest units <i>at the time of each sale</i>, which depends on which purchases have arrived by then; periodic LIFO takes the newest of the whole period.</p>'],
['Distinguish ordering costs from carrying costs and explain why they move in opposite directions.','<p>Ordering costs are incurred per order (purchasing staff, communication, records); carrying costs are incurred for holding stock (storage, interest, insurance, obsolescence). Larger orders mean fewer orders (lower ordering cost) but more stock on hand (higher carrying cost).</p>'],
['When should spoilage be charged to a specific job rather than to all production?','<p>When the spoilage results from the job itself — exacting specifications or a difficult process. Normal spoilage arising from the general process is charged to all production through the overhead rate; abnormal spoilage goes to a loss account.</p>']],
prob:[
['Using Yore Frame\'s data (beginning 800 @ $22; purchases 300 @ $24, 250 @ $25, 200 @ $27, 400 @ $28; 600 units on hand), compute ending inventory and COGS under periodic FIFO, LIFO and weighted average.',tbl(['Method','Ending inventory','COGS'],[['FIFO: 400 @ 28 + 200 @ 27','16,600','31,050'],['LIFO: 600 @ 22','13,200','34,450'],['Weighted average: 47,650 ÷ 1,950 = 24.4359','14,661.54','32,988.46']],{num:[1,2]})],
['A pharmacy counted ₱600,000 of inventory including: goods in transit to a customer FOB destination ₱25,000; goods in transit from a supplier FOB destination ₱62,000; consigned goods from a supplier ₱22,500; goods sold and held for a customer ₱94,000; goods counted at a selling price of ₱150,000 (cost plus 20% markup). Compute correct ending inventory.',calc([['Count',600000],['Keep goods to customer (still ours)','0'],['Less: inbound FOB destination','(62,000)'],['Less: consigned-in goods','(22,500)'],['Less: goods already sold','(94,000)'],['Less: markup in 150,000 (150,000 − 125,000)','(25,000)'],['=Correct inventory','₱396,500']])]]
});

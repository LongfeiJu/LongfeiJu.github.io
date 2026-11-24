CH.push({n:1,color:'#0b6e69',title:'Accounting Concepts & Principles',
hook:'The ground rules every accountant agrees on — and why the numbers mean anything at all.',
los:['Explain what accounting is, who uses it, and how it differs from bookkeeping and auditing.','Distinguish accounting concepts, conventions and principles, and describe GAAP (PAS/PFRS) and the Conceptual Framework.','Explain the five basic assumptions of accounting.','Apply the measurement, revenue recognition, expense recognition and full-disclosure principles.','Describe the accounting constraints and the qualitative characteristics of useful information.','Identify the basic financial statements, their elements, and real versus nominal accounts.'],
why:`<p>Imagine five people each describing the same basketball game, but every one of them uses a different scoring system. Nobody could compare anything. Accounting avoids that chaos by having everyone follow the <b>same set of ground rules</b>. This chapter is those ground rules.</p><p>Your lecturer's slides quote a CPA saying the basic concepts are "the real foundation" of every board-exam subject — and that is not an exaggeration. Every later chapter (adjusting entries, inventory, depreciation, cash flows) is just one of these principles applied to a specific situation. When you get stuck later, you'll usually find the answer by coming back here.</p>`,
terms:{
'Accounting':'An information system that identifies, records and communicates the economic events of an organisation to people who use that information to make decisions.',
'Bookkeeping':'The recording part of accounting — keeping a systematic, chronological record of transactions.',
'Auditing':'An independent examination of financial statements to check that they are presented fairly.',
'GAAP':'Generally Accepted Accounting Principles — the agreed rules, assumptions and procedures for measuring, recording and reporting financial activity.',
'PFRS':'Philippine Financial Reporting Standards — the official accounting standards in the Philippines, adopted from the international standards (IFRS).',
'PAS':'Philippine Accounting Standards — the older-numbered part of the PFRS family (e.g. PAS 1 on presenting financial statements).',
'IFRS':'International Financial Reporting Standards — global accounting standards issued by the IASB, used by over 140 jurisdictions.',
'Conceptual Framework':'The "constitution" of accounting: a coherent set of concepts (purpose, users, qualities, elements) that standard-setters build all the specific standards on.',
'Economic entity':'The assumption that a business is separate from its owners, so only the business\'s own transactions go in its books.',
'Going concern':'The assumption that a business will keep operating long enough to carry out its plans — it is not about to close down.',
'Monetary unit':'The assumption that money is the common measuring stick and that its value is stable (inflation is ignored).',
'Periodicity':'The time-period assumption: a business\'s life can be chopped into artificial periods (month, quarter, year) for reporting.',
'Accrual basis':'Recording revenue when earned and expenses when incurred, regardless of when cash moves.',
'Fiscal year':'Any 12-month accounting period; often used for a year that starts in a month other than January.',
'Calendar year':'A 12-month accounting period running January 1 to December 31.',
'Interim period':'An accounting period shorter than one year, such as a month or a quarter.',
'Historical cost':'Recording assets at what was actually paid for them (their acquisition price).',
'Fair value':'The price at which an asset could be exchanged, or a liability settled, between knowledgeable, willing parties in an arm\'s-length deal.',
'Revenue recognition principle':'Record revenue in the period it is earned — not simply when cash is received.',
'Matching principle':'Record expenses in the same period as the revenues they helped earn.',
'Full disclosure principle':'Financial statements must report all information that would make a difference to users, including notes and supplementary schedules.',
'Materiality':'An item is material if leaving it out or misstating it could change a user\'s decision.',
'Relevance':'Information is relevant if it can make a difference to a decision (it has predictive or confirmatory value).',
'Faithful representation':'Information shows what really happened: it is complete, neutral and free from error.',
'Predictive value':'Information helps users forecast future outcomes.',
'Confirmatory value':'Information helps users check or correct their earlier predictions.',
'Comparability':'Information can be compared across companies and across periods.',
'Verifiability':'Independent people using the same methods would reach the same result.',
'Timeliness':'Information reaches decision-makers in time to influence their decisions.',
'Understandability':'Information is presented clearly enough for a reasonably informed user to understand.',
'Asset':'A resource controlled by the entity as a result of past events, from which future economic benefits are expected.',
'Liability':'A present obligation of the entity, arising from past events, that will require an outflow of resources.',
'Equity':'The owners\' residual interest in the assets after deducting all liabilities (Assets − Liabilities).',
'Real accounts':'Permanent accounts — assets, liabilities and equity. Their balances carry forward and are not closed at period-end.',
'Nominal accounts':'Temporary accounts — revenues, expenses (and drawings). They are closed to zero at the end of each period.',
'Operating cycle':'The time it takes to buy inventory, sell it, and collect the cash.'},
lessons:[
{t:'What accounting is — and who uses it',lo:1,h:`
${kt('Accounting','Bookkeeping','Auditing')}
<p class="lead">Accounting is often called the <b>"language of business."</b> Just as English lets people share ideas, accounting lets a business tell outsiders what it owns, what it owes, and how well it did.</p>
<p>A simple definition: <b>accounting is an information system that identifies, records and communicates the economic events of an organisation to interested users.</b> Notice the three verbs — they happen in that order:</p>
<ol class="steps"><li><b>Identify</b> — decide which events are economic transactions (selling a service, yes; a manager's birthday, no).</li><li><b>Record</b> (measure) — put the event into the books in pesos, in date order.</li><li><b>Communicate</b> — summarise the records into financial statements and explain them.</li></ol>
<div class="tip"><p>A classic quiz item asks which process comes <i>first</i>: identifying, measuring, communicating or interpreting. The answer is <b>identifying</b> — you can't measure something you haven't recognised as a transaction yet.</p></div>
<h2>Bookkeeping vs accounting vs auditing</h2>
${tbl(['','What it does','Everyday comparison'],[['Bookkeeping','Records transactions accurately, in order','Writing every expense in a diary'],['Accounting','Records <i>and</i> classifies, summarises, analyses and interprets','Reading the diary and deciding how to budget next month'],['Auditing','An independent outsider checks that the statements are fair','A friend double-checking your budget before you show it to the bank']],{cls:'stack'})}
<p>So bookkeeping is one part of accounting. Your slides list another description to watch out for: accounting is <b>not</b> an "exact science" — it involves estimates and judgement (you'll see this with depreciation and bad debts).</p>
<h2>Who uses accounting information?</h2>
<p><b>Internal users</b> run the business: owners-managers, department heads, the finance team. <b>External users</b> are outside it: investors, lenders and other creditors (the <i>primary</i> users), plus suppliers, customers, employees and government agencies.</p>
<div class="ph"><p>Government users you will meet in Philippine exam questions: the <b>BIR</b> (Bureau of Internal Revenue — taxes), the <b>SEC</b> (Securities and Exchange Commission — registers and regulates corporations), and the <b>BSP</b> (Bangko Sentral ng Pilipinas — the central bank, which regulates banks). Your slides' quiz describes the BSP as regulating banks and import/export activity. Managers are <i>internal</i> users, so they are the usual "except" answer when a question lists external users.</p></div>
<h2>A very short history</h2>
<p>Double-entry bookkeeping — where every transaction is recorded on two sides — was described in print by the Italian friar <b>Luca Pacioli</b> in 1494, which is why he is called the "father of modern accounting." (Spelling matters on your quizzes: <i>Luca Pacioli</i>.) The slides note that internal and external reporting practices developed further during the <b>Industrial Revolution</b>, when large factories needed outside investors.</p>
<div class="warn"><p>Read quiz options slowly: your course's quizzes like near-identical distractors (Pacioli / Paciolo / Paciole; Florentine / Florentino).</p></div>
<h2>Businesses do three kinds of things</h2>
<p>Every business <b>finances</b> itself (gets money from owners or lenders), <b>invests</b> that money in assets (equipment, buildings), and <b>operates</b> (buys, sells, pays expenses). Keep these three words in mind — they come back as the three sections of the cash-flow statement in <a class="xl" href="#c9-1">Lesson 9.1</a>.</p>`},
{t:'Concepts, conventions, principles — and GAAP',lo:2,h:`
${kt('GAAP','PFRS','PAS','IFRS','Conceptual Framework')}
<p class="lead">Accounting rules come in three layers. Think of building a house: the ground it stands on, the building habits every carpenter follows, and the building code.</p>
${tbl(['Layer','What it is','Examples from the slides'],[['<b>Concepts</b> ("postulates", "assumptions")','Ideas accountants <i>assume</i> to be true before recording anything — the "bedrock"','Separate entity, going concern, time period, accrual, monetary unit'],['<b>Conventions</b>','Practices accepted because they have been used for so long; every transaction has a value received and a value given','Debit and credit; the dual-aspect concept'],['<b>Principles</b>','The rules of first importance; the basis for all detailed procedures','Cost, revenue recognition, matching, full disclosure']],{cls:'stack'})}
<p>Principles are different from <i>procedures, rules and methods</i>: procedures are the "how-to" details of recording, classifying, summarising and presenting a transaction, while principles are the "why."</p>
<h2>GAAP</h2>
<p><b>Generally Accepted Accounting Principles (GAAP)</b> is the umbrella name for the standard principles, assumptions and procedures that accountants use uniformly. They are developed from experience, research and careful study, and become "generally accepted" by agreement in the profession.</p>
<p>Why does GAAP matter? Because an auditor's report says the statements are presented "in conformity with" the applicable framework. If everyone used their own rules, that sentence would mean nothing.</p>
<div class="ph"><p>The GAAP used in the Philippines is the <b>PFRS</b> family, which includes the older-numbered <b>PAS</b> standards (for example, PAS 1 on presenting financial statements, PAS 2 on inventories, PAS 16 on property, plant and equipment). PFRS are adopted from the international standards (<b>IFRS</b>) by the Financial Reporting Standards Council. Your pre-midterm asked what the current Philippine standard is called; because PAS and PFRS are both in force and both come from IFRS, "all of the above" was the intended answer there.</p></div>
<h2>The Conceptual Framework</h2>
<p>The <b>Conceptual Framework for Financial Reporting</b> is the coherent system of concepts that flows from one objective: providing information that helps users make decisions. It is not itself a standard — it is the foundation that standard-setters use to write consistent standards, like a constitution that later laws must respect.</p>
<div class="deep"><p>Your Quiz 1 quoted the <b>2018 revised Conceptual Framework</b>: the primary users of general-purpose financial reports are <b>present and potential investors, lenders and other creditors</b>, who use the information to decide about (1) buying, selling or holding equity or debt, (2) providing or settling loans, and (3) voting on or influencing management's actions. All three statements are true.</p></div>`},
{t:'The five basic assumptions',lo:3,h:`
${kt('Economic entity','Going concern','Monetary unit','Periodicity','Accrual basis')}
<p class="lead">Before recording a single peso, accountants assume five things. If any of them is false, the numbers would be meaningless.</p>
<h2>1. Economic (separate) entity</h2>
<p>The business is treated as separate and distinct from the people who own and run it. If Ms. Atlo owns a clinic and buys groceries for her family, that purchase is <b>not</b> a clinic expense. This is what lets the books show a "true and fair" picture of the business alone.</p>
<h2>2. Going concern</h2>
<p>We assume the business will keep operating long enough to carry out its plans. That's why we can record a 10-year machine at cost and spread that cost over 10 years: we expect the business to still be here to use it. Your slides link this to two conventions:</p>
<ul><li><b>Objectivity</b> — measurements must be definite and verifiable.</li><li><b>Historical cost</b> — supports objectivity by using the actual purchase price.</li></ul>
<div class="warn"><p>If a business is about to liquidate (close down and sell everything), the going-concern assumption no longer holds, and assets would be reported at what they could be sold for instead.</p></div>
<h2>3. Monetary unit (stable money)</h2>
<p>Money is the common measuring stick. Accounting generally ignores inflation and deflation and treats a peso from 2010 as equal to a peso today. Your Quiz 1 calls this the <b>stable monetary unit</b> principle: recording all transactions in one uniform currency.</p>
<h2>4. Periodicity (time period)</h2>
<p>A business's life is divided into artificial periods so we can report results regularly. Every statement must say what date or period it covers.</p>
${tbl(['Type of period','Meaning'],[['Calendar year','12 months, January 1 – December 31'],['Fiscal year','12 months starting in any month other than January (e.g. July 1 – June 30)'],['Interim period','Shorter than a year — a month or a quarter']])}
<h2>5. Accrual basis</h2>
<p>All financial statements <b>except the statement of cash flows</b> are prepared on the accrual basis. Revenue includes income earned but not yet collected (accrued income); expenses include amounts incurred but not yet paid (accrued expenses). This is the idea behind adjusting entries in <a class="xl" href="#c3-1">Lesson 3.1</a>.</p>
<div class="ex" data-t="Accrual basis, from your pre-midterm"><p>ABM Clinic collected ₱15,000 in March for February credit services, ₱40,000 for March cash services, and billed ₱25,000 of March services on credit. What is March revenue?</p>${calc([['March cash services',40000],['March credit services (earned, not yet collected)',25000],['February collections — earned in February, so excluded','—'],['=March revenue','₱65,000']])}</div>
<div class="tip"><p>IAS 1 (PAS 1) requires accrual accounting for every statement <b>except</b> the cash-flow statement. A quiz statement saying the income statement or the statement of changes in equity is excluded is <b>false</b>.</p></div>`},
{t:'The basic principles',lo:4,h:`
${kt('Historical cost','Fair value','Revenue recognition principle','Matching principle','Full disclosure principle')}
<p class="lead">Assumptions tell us what we take for granted. Principles tell us how to measure and when to record.</p>
<h2>1. Measurement principles</h2>
<p><b>Cost (historical cost) principle</b> — assets and liabilities are recorded at their acquisition price. It is verifiable (there's a receipt), so it supports faithful representation.</p>
<p><b>Fair value principle</b> — the amount for which an asset could be exchanged, or a liability settled, between knowledgeable and willing parties in an arm's-length transaction (a deal between strangers, neither under pressure). It is more current but needs more judgement.</p>
<div class="ex" data-t="Cost vs fair value"><p>A clinic bought land for ₱1,000,000. Five years later similar land sells for ₱1,600,000. Under the cost principle the land stays at ₱1,000,000. Under fair value it would be shown at ₱1,600,000. Most items you'll meet in this course use cost.</p></div>
<h2>2. Revenue recognition principle</h2>
<p>Revenue (income) is an increase in economic benefits — inflows of assets or decreases in liabilities — that increases equity, <b>other than</b> contributions from owners. The rule: <b>record revenue when it is earned</b>, which the slides say is generally at the <b>point of sale</b>, measured at the fair value of what is received or receivable.</p>
<p>The slides list exceptions:</p>
<ul><li><b>Earlier recognition</b> — at completion of production, or by percentage of completion (long construction jobs).</li><li><b>Later recognition</b> — when collection is doubtful: cash/profit-recovery, cost-recovery, or installment methods (revenue only as cash comes in).</li></ul>
<div class="fix"><p>The slides describe the older "point of sale" rules. Since 2018, revenue under <b>PFRS 15</b> is recognised when the business <b>satisfies a performance obligation by transferring control</b> of a good or service to the customer — either at a point in time or over time (the modern replacement for percentage-of-completion). For exam questions on this deck, the slide wording still works; just know the current standard uses "transfer of control."</p></div>
<div class="ex" data-t="Unearned revenue — Quiz 1 and pre-midterm"><p>Patient Jay pays ABC Physical Therapy ₱2,000 in December for services to be done in 45 days. ABC has received cash but <b>has not earned it</b>. So ABC debits Cash and credits <b>Unearned Revenue — a liability</b> (ABC owes Jay a service). Crediting Service Revenue now would violate the revenue recognition (realization) principle.</p></div>
<h2>3. Expense recognition (matching) principle</h2>
<p>An expense is an outflow or using-up of assets, or incurring of liabilities, from delivering goods or services. The <b>matching principle</b>: costs incurred to generate this period's revenue should appear as expenses in the <b>same</b> period's income statement. Your slides give three ways to apply it:</p>
${tbl(['Method','When it is used','Examples'],[['Associating cause and effect ("direct matching")','The cost is directly tied to a sale','Cost of sales, sales commissions'],['Systematic and rational allocation','The cost benefits several periods','Depreciation, amortisation'],['Immediate recognition','No future benefit can be identified','Salaries, rent, utilities, interest']],{cls:'stack'})}
<div class="fix"><p>The slide labels the third way just "Expense Recognition"; textbooks and your quizzes call it <b>immediate recognition</b>.</p></div>
<div class="case" data-t="Jose Marie's tax trick (Quiz 1)"><p>Jose Marie overstated expenses and understated revenues to lower taxable income. Reporting expenses that don't belong to the period's revenues breaks the <b>matching principle</b>.</p></div>
<h2>4. Full-disclosure principle</h2>
<p>Statements must report <b>all relevant information</b> about the business's affairs — including important events after the reporting date — usually through the <b>notes to the financial statements</b> and supplementary schedules. Think of the notes as the "fine print" that explains the numbers.</p>`},
{t:'Constraints and qualitative characteristics',lo:5,h:`
${kt('Materiality','Relevance','Faithful representation','Predictive value','Confirmatory value','Comparability','Verifiability','Timeliness','Understandability')}
<p class="lead">What makes accounting information <i>useful</i>? The Conceptual Framework answers with two "must-have" qualities and four "nice-to-have" qualities — limited by two practical constraints.</p>
<h2>Two constraints</h2>
<p><b>Cost constraint</b> (cost-benefit) — the benefit of reporting information should outweigh the cost of producing it. A business won't spend ₱50,000 tracking ₱500 of paper clips.</p>
<p><b>Materiality</b> — an item is material if omitting or misstating it would change a decision. A ₱300 stapler can simply be expensed even though it lasts years; a ₱3 million machine cannot.</p>
<h2>Fundamental qualities (must have)</h2>
<figure><svg viewBox="0 0 640 250" role="img" aria-label="Fundamental and enhancing qualities"><rect x="210" y="8" width="220" height="40" rx="8" class="a"/><text x="320" y="33" text-anchor="middle" class="wt" font-size="15" font-weight="700">Useful information</text>
<rect x="40" y="80" width="250" height="40" rx="8" class="al"/><text x="165" y="105" text-anchor="middle" font-size="15" font-weight="700">Relevance</text>
<rect x="350" y="80" width="250" height="40" rx="8" class="al"/><text x="475" y="105" text-anchor="middle" font-size="15" font-weight="700">Faithful representation</text>
<path d="M320 48v16H165v16M320 64h155v16" class="ln" stroke-width="2"/>
<text x="165" y="142" text-anchor="middle" font-size="13">predictive value</text><text x="165" y="160" text-anchor="middle" font-size="13">confirmatory value</text><text x="165" y="178" text-anchor="middle" font-size="13">(materiality)</text>
<text x="475" y="142" text-anchor="middle" font-size="13">complete</text><text x="475" y="160" text-anchor="middle" font-size="13">neutral</text><text x="475" y="178" text-anchor="middle" font-size="13">free from error</text>
<rect x="20" y="200" width="600" height="40" rx="8" fill="none" class="as" stroke-width="2"/><text x="320" y="225" text-anchor="middle" font-size="14">Enhancing: comparability · verifiability · timeliness · understandability</text></svg><figcaption>The two fundamental qualities and four enhancing qualities.</figcaption></figure>
<p><b>Relevance</b> — information can make a difference in a decision because it has:</p>
<ul><li><b>Predictive value</b> — it helps forecast the future (last year's sales help predict this year's).</li><li><b>Confirmatory value</b> — it helps check or correct earlier predictions ("Was my forecast right?").</li></ul>
<p><b>Faithful representation</b> — the information shows what really happened. Its main purpose, per the slides, is <b>to achieve public trust and confidence</b> in the statements. It must be <b>complete</b>, <b>neutral</b> (no bias) and <b>free from error</b>.</p>
<div class="ex" data-t="Which quality is missing?"><p>Your Exercise 4 asked: "When inventory is misstated, the presentation lacks…?" A misstatement means the numbers don't match reality, so it lacks <b>faithful representation</b>.</p></div>
<h2>Enhancing qualities (nice to have)</h2>
${tbl(['Quality','Plain-English meaning'],[['Comparability','You can compare this company with others, and with its own past years'],['Verifiability','Two independent people would get the same answer — this is what external auditing checks'],['Timeliness','It arrives in time to matter; late information loses relevance'],['Understandability','Presented clearly for a reasonably informed reader']])}
<div class="fix"><p>One slide lists "Decision-usefulness, Relevant-Disclosure, Reporting Format" as qualitative characteristics. These are better read as the <i>purposes</i> the characteristics serve (choosing methods, deciding what to disclose, choosing a presentation). For exams, use the fundamental/enhancing list above.</p></div>`},
{t:'The financial statements and their elements',lo:6,h:`
${kt('Asset','Liability','Equity')}
<p class="lead">Financial statements are formal reports that group the effects of transactions into broad classes according to their economic characteristics.</p>
<h2>The complete set (PAS 1)</h2>
${tbl(['Statement','Other name','What it shows'],[['1. Statement of financial position','Balance sheet','Assets, liabilities and equity <b>at a date</b>'],['2. Statement of comprehensive income','Income statement (profit or loss)','Revenues and expenses <b>for a period</b>'],['3. Statement of changes in equity','Statement of owner\'s equity','How equity moved during the period'],['4. Statement of cash flows','Cash-flow statement','Sources and uses of cash for the period'],['5. Notes','—','Explanations, policies and details']],{cls:'stack'})}
<div class="tip"><p>The statement of financial position shows <b>liquidity, solvency and financial position</b>. It does <b>not</b> show profitability — that's the income statement. This was a quiz "except" item.</p></div>
<h2>The elements</h2>
<p><b>Assets</b> — resources owned or controlled by the entity, resulting from past events, that are expected to bring future benefits. <b>Liabilities</b> — existing obligations from past events that will require an outflow. <b>Equity</b> — the residual interest: what is left for owners after deducting liabilities.</p>
<p class="calc" style="text-align:center;font-weight:700">Assets = Liabilities + Equity</p>
<p><b>Revenue</b> increases assets or decreases liabilities from operations, raising equity — but is not an owner's contribution. <b>Expenses</b> decrease assets or increase liabilities from operations, lowering equity — but are not owner withdrawals or repayments of debt.</p>
<div class="ex" data-t="Using the equation (Quiz 1)"><p>Total assets rose ₱80,000 while total liabilities fell ₱48,000. Since Equity = Assets − Liabilities:</p>${calc([['Change in assets','+80,000'],['Less: change in liabilities','−(−48,000) = +48,000'],['=Change in equity','+₱128,000 increase']])}<p>Second item: cash income of ₱50,000 and expenses paid of ₱26,000 raise equity by the net income, <b>₱24,000</b>.</p></div>
<div class="ex" data-t="Finding a missing asset (Quiz 1)"><p>Vehicles ₱600,000, goodwill ₱120,000, cash ₱30,000; owner's equity ₱1,000,000; unearned revenue ₱500,000; bonds payable ₱50,000. What is land?</p>${calc([['Liabilities + equity (500,000 + 50,000 + 1,000,000)','1,550,000'],['Less: other assets (600,000 + 120,000 + 30,000)','(750,000)'],['=Land','₱800,000']])}<p>₱800,000 wasn't among the choices — so the answer was "None of the above." Don't be afraid of that option when your arithmetic is solid.</p></div>
<h2>Recognition, management's role and limitations</h2>
<p><b>Recognition</b> means recording an item in the statements. The slides give two criteria: it is <b>probable</b> that future benefits will flow, and the item can be <b>measured reliably</b>.</p>
<div class="fix"><p>Those two criteria come from the older Framework. The <b>2018 Conceptual Framework</b> instead asks whether recognising the item gives <b>relevant</b> information and a <b>faithful representation</b>. The idea is similar; the wording changed.</p></div>
<p><b>Management</b> (or the owner) is primarily responsible for the statements: it makes sure they are general-purpose reports and reviews and approves adjustments.</p>
<p><b>Limitations</b> of financial statements: they rely on <b>estimates</b>; <b>historical cost</b> doesn't show current values or the time value of money; and <b>internally developed intangibles</b> (a well-loved brand built over years) are usually not on the balance sheet.</p>`},
{t:'Real and nominal accounts',lo:6,h:`
${kt('Real accounts','Nominal accounts','Operating cycle')}
<p class="lead">Every account is either a "keeper" that carries over to next year, or a "scoreboard" that resets to zero.</p>
${tbl(['','Real (permanent) accounts','Nominal (temporary) accounts'],[['Which accounts','Assets, liabilities, owner\'s equity (capital)','Revenues, expenses (and owner\'s drawings)'],['At period-end','<b>Not closed</b> — balance carries forward','<b>Closed</b> to zero'],['Appear on','Statement of financial position','Income statement (drawings: statement of changes in equity)'],['Analogy','Your savings balance','This season\'s basketball scoreboard']],{cls:'stack'})}
<div class="tip"><p>Trap items from your quizzes: <b>Unearned Revenue</b> is a <i>liability</i> (real), not a revenue (nominal), even though it has "revenue" in its name. A <b>Loss on Sale of Investment</b> is <i>nominal</i>, even though it relates to an asset. Goodwill and cash are real.</p></div>
<h2>Classifying assets: current vs noncurrent</h2>
<p>Assets have a normal <b>debit</b> balance and are split into current and noncurrent. A <b>current asset</b> is cash or a cash equivalent not restricted from current use, or an asset expected to be realised, sold or consumed within the normal <b>operating cycle</b>, or held mainly for trading, or expected to be realised within <b>twelve months</b> of the reporting date.</p>
<div class="ex" data-t="Current assets (pre-midterm)"><p>MEDICAL shows: accounts payable ₱50,000, accounts receivable ₱96,000, cash ₱114,000, office equipment ₱240,000, office supplies ₱24,000, prepaid expense ₱40,000. Current assets?</p>${calc([['Cash',114000],['Accounts receivable',96000],['Office supplies',24000],['Prepaid expense',40000],['=Current assets','₱274,000']])}<p>Office equipment is noncurrent; accounts payable is a liability.</p></div>
<p>The rest of the classified balance sheet (long-term investments, PPE, current and long-term liabilities) is in <a class="xl" href="#c4-5">Lesson 4.5</a>.</p>`}
],
sum:['Accounting identifies, records and communicates economic events for decision-makers. Bookkeeping is only the recording part; auditing is an independent check. Users are internal (managers) or external (investors, lenders, BIR, SEC, BSP).',
'Concepts are basic assumptions, conventions are long-standing practices (debit/credit), and principles are the rules of first importance. GAAP in the Philippines means PFRS (including PAS), adopted from IFRS. The Conceptual Framework is the foundation for all standards.',
'Five assumptions: separate economic entity, going concern, stable monetary unit, periodicity (calendar/fiscal/interim), and accrual basis (all statements except cash flows).',
'Assets are measured at historical cost (sometimes fair value). Revenue is recognised when earned (today: when control transfers, PFRS 15). Expenses are matched by cause-and-effect, systematic allocation, or immediate recognition. Full disclosure requires the notes.',
'Constraints: cost-benefit and materiality. Fundamental qualities: relevance (predictive, confirmatory) and faithful representation (complete, neutral, error-free). Enhancing: comparability, verifiability, timeliness, understandability.',
'The complete set of statements: financial position, comprehensive income, changes in equity, cash flows, notes. Elements: assets, liabilities, equity, revenue, expenses. Real accounts carry forward; nominal accounts are closed each period.'],
mcq:[
['Which accounting process comes first?',['Measuring','Communicating','Identifying','Interpreting'],2,'You must identify an event as a transaction before you can measure, record or communicate it.'],
['A clinic owner pays her family\'s grocery bill from her personal account. Which assumption tells us not to record it in the clinic\'s books?',['Going concern','Economic entity','Periodicity','Monetary unit'],1,'The business is separate from its owner; her personal spending is not a business transaction.'],
['A 12-month period that starts in any month other than January is a:',['Calendar year','Interim period','Fiscal year','Operating cycle'],2,'That is the definition of a fiscal year.'],
['A consulting firm records advance cash from a client as Dr Cash, Cr Revenue. Which principle is violated?',['Cost','Matching','Full disclosure','Revenue recognition (realization)'],3,'The revenue has not yet been earned, so it should be Unearned Revenue (a liability).'],
['Depreciation expense is an example of which expense-recognition approach?',['Cause and effect','Systematic and rational allocation','Immediate recognition','Full disclosure'],1,'A machine benefits many periods, so its cost is spread systematically over them.'],
['The main objective of faithful representation is to:',['Help forecast the future','Achieve public trust and confidence in the statements','Reduce reporting cost','Make statements shorter'],1,'That is the purpose stated in your slides.'],
['Information that helps users check or correct past predictions has:',['Predictive value','Confirmatory value','Timeliness','Neutrality'],1,'Confirmatory value confirms or changes earlier expectations.'],
['Which is a nominal account?',['Unearned Revenue','Goodwill','Loss on Sale of Property','Cash'],2,'Gains and losses are income-statement items and are closed each period.'],
['Which statement is NOT prepared on the accrual basis?',['Statement of financial position','Statement of comprehensive income','Statement of changes in equity','Statement of cash flows'],3,'The cash-flow statement reports cash receipts and payments only.'],
['Assets increased ₱80,000 and liabilities decreased ₱48,000. Equity:',['Increased ₱32,000','Decreased ₱32,000','Increased ₱128,000','Decreased ₱128,000'],2,'ΔEquity = ΔAssets − ΔLiabilities = 80,000 − (−48,000) = +128,000.']],
sa:[
['Explain the difference between relevance and faithful representation, with an example of each.','<p><b>Relevance</b> means information can change a decision — e.g., this year\'s sales trend helps a lender predict repayment ability (predictive value). <b>Faithful representation</b> means the information shows what really happened — complete, neutral, free from error — e.g., inventory counted and costed correctly. Information can be relevant but useless if it isn\'t faithful, and vice versa; both are required.</p>'],
['Why does the going-concern assumption allow us to spread the cost of equipment over many years?','<p>Because we assume the business will keep operating long enough to use the equipment for its whole life. If it were about to close, the equipment would instead be shown at what it could be sold for, and spreading cost over future years would make no sense.</p>'],
['Distinguish real from nominal accounts and explain why Unearned Revenue is a real account.','<p>Real accounts (assets, liabilities, equity) carry their balances forward; nominal accounts (revenues, expenses, drawings) are closed to zero each period. Unearned Revenue is an obligation to deliver a future service — a liability — so it is real despite its name.</p>']],
prob:[
['Business has: vehicles ₱600,000; goodwill ₱120,000; cash ₱30,000; owner\'s equity ₱1,000,000; unearned revenue ₱500,000; bonds payable ₱50,000; land = ?. Find land, and classify each item as asset, liability or equity.','<p>Assets: land, vehicles, goodwill, cash. Liabilities: unearned revenue, bonds payable. Equity: owner\'s equity.</p>'+calc([['Liabilities (500,000 + 50,000)',550000],['Equity',1000000],['Total liabilities + equity',1550000],['Less: known assets (600,000 + 120,000 + 30,000)','(750,000)'],['=Land','₱800,000']])],
['Beginning capital ₱137,500; additional investment ₱20,000; withdrawal ₱12,500; ending capital ₱130,000. Compute the net income or loss.','<p>Ending capital = Beginning + Investment + Net income − Withdrawals.</p>'+calc([['Beginning capital',137500],['Add: additional investment',20000],['Less: withdrawals','(12,500)'],['Capital before profit or loss',145000],['Ending capital',130000],['=Net loss (145,000 − 130,000)','₱15,000']])]]
});

# Financial Accounting Study Text

An interactive, textbook-style study site built from Financial Accounting lecture decks (10 chapters, 68 lessons, practice questions, PDF export, day/night mode).

- `index.html` — the built, self-contained site.
- `content/ch01.js … ch10.js` — chapter text, examples and practice questions.
- `engine.js`, `style.css` — navigation, reading modes, glossary pop-ups, quizzes, in-page PDF writer.
- `build.py` — run `python3 build.py` to rebuild the site (then copy dist/index.html to index.html).

Note: the PDF button saves files through the Claude artifact downloads feature; outside claude.ai it builds the PDF but can't save it.

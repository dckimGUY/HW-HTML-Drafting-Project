shelfMenuHTML.tab5.folder2.HTML = `
<button id="furyLeftMargin"      class="button_ button_furyLeftMargin"      title="draw the left margin on the page, and switch to program configuration 'i8'."></button>
<button id="furyInputArticle"    class="button_ button_furyInputArticle"    title="put a new blank article"></button>
<button id="furyBreakArticle"    class="button_ button_furyBreakArticle"    title="divide the article up into paragraphs"></button>
<button id="furyInputParagraph"  class="button_ button_furyInputParagraph"  title="put a new blank paragraph"></button>
<button id="furyBreakParagraph"  class="button_ button_furyBreakParagraph"  title="divide the paragraph up into sentences"></button>
<button id="furyInputSentence"   class="button_ button_furyInputSentence"   title="put a new blank sentence"></button>
<button id="furyInputHeading1"   class="button_ button_furyInputHeading1"   title="put heading level 1"></button>
<button id="furyInputHeading2"   class="button_ button_furyInputHeading2"   title="put heading level 2"></button>
<button id="furyInputHeading3"   class="button_ button_furyInputHeading3"   title="put heading level 3"></button>
<button id="furyInputBlockquote" class="button_ button_furyInputBlockquote" title="put blockquote"></button>
<button id="furyGlobb"           class="button_ button_furyGlobb"           title="globb the whole works"></button>
<textarea id="furyRulesInfo"     class="textarea_ input_furyRulesInfo dckimPixelMono" placeholder="empty" spellcheck="false">
"USE THE LEFT EDGE!"
"globb" sticks things together
"break" takes things apart

    - Loose sentences, headings, and blockquotes are globbed together into paragraphs.

    - If there are no loose sentences, etc, then paragraphs are globbed together into articles.

    - Existing paragraphs act as delimiters, meaning that loose sentences, etc, will be globbed between the paragraphs but 'the globbing' will not pass them.

    - Articles do not glob with anything and nothing globs to articles that are already made.

    - Existing articles, like paragraphs, act as delimiters. That is, paragraphs between articles will be globbed together into new articles.

TIP: You are still in the same HTML Drafting Program... I just used the system settings to make it look this way.

</textarea>
`;

import hljs from "highlight.js";
import MarkdownIt from "markdown-it";

const Markdown: MarkdownIt = MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre><code class="hljs">' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          "</code></pre>"
        );
      } catch (__) {
        // noop
      }
    }
    return (
      '<pre><code class="hljs">' +
      Markdown.utils.escapeHtml(str) +
      "</code></pre>"
    );
  },
});

export { Markdown };

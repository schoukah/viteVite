import "reveal.js/dist/reveal.css";
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
import "reveal.js/dist/theme/simple.css";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealMenu from "reveal.js-menu/menu.esm.js";

const deck = new Reveal({ plugins: [Markdown, RevealMenu] });
deck.initialize({ hash: true });

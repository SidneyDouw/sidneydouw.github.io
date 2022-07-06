// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/**\n * Global Reset of all HTML Elements\n *\n */\nhtml,\nbody {\n  border: 0;\n  font-family: 'Helvetica-Neue', 'Helvetica', Arial, sans-serif;\n  line-height: 1.5;\n  margin: 0;\n  padding: 0;\n}\ndiv,\nspan,\nobject,\niframe,\nimg,\ntable,\ncaption,\nthead,\ntbody,\ntfoot,\ntr,\ntr,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nfigure,\nhgroup,\nmenu,\nnav,\nfooter,\nheader,\nsection,\nsummary,\nmark,\naudio,\nvideo {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\naddress,\ncit,\ncode,\ndel,\ndfn,\nem,\nins,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nb,\ni,\nhr,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nlegend,\nlabel {\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  margin: 0;\n  padding: 0;\n}\narticle,\naside,\ncanvas,\nfigure,\nfigure img,\nfigcaption,\nhgroup,\nfooter,\nheader,\nnav,\nsection,\naudio,\nvideo {\n  display: block;\n}\ntable {\n  border-collapse: separate;\n  border-spacing: 0;\n}\ntable caption,\ntable th,\ntable td {\n  text-align: left;\n  vertical-align: middle;\n}\na img {\n  border: 0;\n}\n:focus {\n  outline: 0;\n}\n@font-face {\n  font-family: 'BundesSans';\n  src: url('/fonts/BundesSans/BundesSansWeb-Regular.woff') format('woff'), url('/fonts/BundesSans/BundesSansWeb-Regular.ttf') format('truetype'), url('/fonts/BundesSans/BundesSansWeb-Regular.eot') format('embedded-opentype');\n}\n@font-face {\n  font-family: 'BundesSans';\n  src: url('/fonts/BundesSans/BundesSansWeb-Bold.woff') format('woff'), url('/fonts/BundesSans/BundesSansWeb-Bold.ttf') format('truetype'), url('/fonts/BundesSans/BundesSansWeb-Bold.eot') format('embedded-opentype');\n  font-weight: bold;\n}\n@font-face {\n  font-family: 'BundesSans';\n  src: url('/fonts/BundesSans/BundesSansWeb-Italic.woff') format('woff'), url('/fonts/BundesSans/BundesSansWeb-Italic.ttf') format('truetype'), url('/fonts/BundesSans/BundesSansWeb-Italic.eot') format('embedded-opentype');\n  font-style: italic;\n}\n@font-face {\n  font-family: 'BundesSans';\n  src: url('/fonts/BundesSans/BundesSansWeb-BoldItalic.woff') format('woff'), url('/fonts/BundesSans/BundesSansWeb-BoldItalic.ttf') format('truetype'), url('/fonts/BundesSans/BundesSansWeb-BoldItalic.eot') format('embedded-opentype');\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'BundesSerif';\n  src: url('/fonts/BundesSerif/BundesSerifWeb-Regular.eot') format('woff'), url('/fonts/BundesSerif/BundesSerifWeb-Regular.ttf') format('truetype'), url('/fonts/BundesSerif/BundesSerifWeb-Regular.eot') format('embedded-opentype');\n}\n@font-face {\n  font-family: 'BundesSerif';\n  src: url('/fonts/BundesSerif/BundesSerifWeb-Bold.woff') format('woff'), url('/fonts/BundesSerif/BundesSerifWeb-Bold.ttf') format('truetype'), url('/fonts/BundesSerif/BundesSerifWeb-Bold.eot') format('embedded-opentype');\n  font-weight: bold;\n}\n@font-face {\n  font-family: 'BundesSerif';\n  src: url('/fonts/BundesSerif/BundesSerifWeb-Italic.eot') format('woff'), url('/fonts/BundesSerif/BundesSerifWeb-Italic.ttf') format('truetype'), url('/fonts/BundesSerif/BundesSerifWeb-Italic.eot') format('embedded-opentype');\n  font-style: italic;\n}\n@font-face {\n  font-family: 'BundesSerif';\n  src: url('/fonts/BundesSerif/BundesSerifWeb-BoldItalic.woff') format('woff'), url('/fonts/BundesSerif/BundesSerifWeb-BoldItalic.ttf') format('truetype'), url('/fonts/BundesSerif/BundesSerifWeb-BoldItalic.eot') format('embedded-opentype');\n  font-weight: bold;\n  font-style: italic;\n}\n:root {\n  --app-height: 100%;\n  --current-background-color: #a3d4d2;\n}\nhtml,\nbody {\n  background-color: #eee;\n  font-family: 'BundesSans';\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'BundesSans';\n  font-style: italic;\n  font-weight: bold;\n}\nh2 {\n  font-size: 40px;\n  line-height: 40px;\n}\np {\n  font-size: 20px;\n  line-height: 20px;\n}\n.textbox {\n  margin: 0px auto;\n  width: calc(80% - (15px*2));\n  padding: 15px;\n  border-radius: 10px;\n  background-color: white;\n}\n.hint {\n  margin: 0px auto;\n  width: calc(80% - (15px*2));\n  font-size: 18px;\n}\n.boxshadow {\n  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.25);\n}\n.dottedBackground {\n  background-image: radial-gradient(black 20%, transparent 25%), radial-gradient(black 20%, transparent 25%);\n  background-size: 10px 10px;\n  background-position: 0 0, 15px 15px;\n}\n.question_buttonContainer {\n  display: grid;\n  grid-template-columns: 30% auto;\n}\n.ctaButton {\n  font-family: 'BundesSans';\n  font-weight: bold;\n  display: block;\n  width: calc(80% - (10px*2));\n  height: 50px;\n  margin: 0 auto;\n  border-radius: 50px;\n  background-color: white;\n  border: 2px solid #d10339;\n  color: #d10339;\n  font-size: 30px;\n  line-height: 30px;\n  transition: color 0.3s ease, border 0.3s ease, opacity 0.3s ease;\n}\n.ctaButton.disabled {\n  pointer-events: none;\n  opacity: 0.75;\n  color: #9c3852;\n  border-color: #9c3852;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
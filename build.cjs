const estrella = require("estrella");
const { sassPlugin } = require("esbuild-sass-plugin");
const fs = require("fs/promises");

estrella.build({
  entry: "src/index.tsx",
  outdir: "dist",
  bundle: true,
  plugins: [sassPlugin()]
}).then(async () => {
    let index_html = `<!DOCTYPE html>
  <html>
    <head>
      <link href="index.css" rel="stylesheet" />
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Nota: A Document Language for the Browser</title>
    </head>
    <body>
      <div id="container"></div>
      <script src="index.js"></script>
    </body>
  </html>`;

    await fs.writeFile("dist/index.html", index_html);
  });;
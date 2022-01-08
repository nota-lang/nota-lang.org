import React from "react";
import type {TemplateProps} from "@nota-lang/esbuild-utils/dist/template"

let Template: React.FC<TemplateProps> = ({ title, script, children }) => (
  <>
    <head>
      <link href="index.css" rel="stylesheet" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content="Making a world where you never have to use LaTeX again." />
      <meta property="og:image" content="https://nota-lang.org/android-chrome-512x512.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{title}</title>
    </head>
    <body className="no-edit">
      <header>
        <div className="logo"><a href="/"><span className="fancy">N</span>ota</a></div>
        <nav>
          <a href="/tutorial.html">Tutorial</a>
          <a href="/integration.html">Integration</a>
          <a href="https://github.com/nota-lang/nota">Github</a>
        </nav>
      </header>
      {children}
      <script src={script} type="module"></script>
    </body>
  </>
);

export default Template;
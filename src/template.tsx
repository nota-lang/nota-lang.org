import React from "react";
import type { TemplateProps } from "@nota-lang/esbuild-utils/dist/template.js";

let Template: React.FC<
  React.PropsWithChildren<TemplateProps & { className?: string; css?: string }>
> = ({ title, script, children, className, css }) => (
  <>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="Making a world where you never have to use LaTeX again."
      />
      <meta
        property="og:image"
        content="https://nota-lang.org/android-chrome-512x512.png"
      />
      <meta name="twitter:card" content="summary" />
      <title>{title}</title>
      <link href="/index.css" rel="stylesheet" />
      {css ? <link href={css} rel="stylesheet" /> : null}
    </head>
    <body className={className || "base-style"}>
      <header>
        <div className="logo">
          <a href="/">
            <span className="fancy">N</span>ota
          </a>
        </div>
        <nav>
          <a href="/examples.html">Examples</a>
          <a href="/playground.html">Playground</a>
          <a href="/reference.html">Reference</a>
          <a href="/integration.html">Integration</a>
        </nav>
      </header>
      {children}
      <script src={script} type="module" async></script>
    </body>
  </>
);

export default Template;

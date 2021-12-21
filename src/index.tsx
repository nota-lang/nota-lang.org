import React, { useState } from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import {
  Editor,
  OutputView,
  JsView,
  LocalState,
  StateContext,
} from "@nota-lang/nota-editor";

import "../static/index.html";

import "katex/dist/katex.min.css";
import "@nota-lang/nota-components/dist/nota-components.css";
import "@nota-lang/nota-editor/dist/nota-editor.css";
import "../css/app.scss";

let contents = `
// This code is editable!
%let[nota]{@strong{@Smallcaps{Nota}}}
@Definition[name="nota"][Label=nota]{
  #nota is a language for writing documents, like academic papers and blog posts.
}
The goal of @Ref{nota} is to @strong{bring documents into the #(20 + 1)st century.}

Documents contain a lot of structure --- for example, "@Ref{nota}" is a reference to a term defined in the preceding paragraph. @Ref{nota} enables authors to @em{represent} that structure, which allows the reading medium (the browser) to @em{understand} that structure, which in turn empowers readers to @em{use} that structure. Try clicking on any "@Ref{nota}" reference to see this idea in action.

A @Ref{nota} document compiles to a JavaScript program, meaning it's easy to:

@ul{
  @li{View documents on any device that has a web browser.}
  @li{Use variables, functions, and data structures to simplify document writing.}
  @li{Integrate with JavaScript libraries like @a[href="https://katex.org/"]{KaTeX}, @a[href="https://vega.github.io/vega-lite/"]{Vega-Lite}, and @a[href="https://github.com/penrose/penrose"]{Penrose}.}
  @li{Support accessibility needs like screen readers.}
}
`.trim();

let App = observer(() => {
  let [state] = useState(() => new LocalState(contents));

  return (
    <div>
      <header>
        <h1>Nota: A Document Language for the Browser</h1>
      </header>
      <StateContext.Provider value={state}>
        <div className="row">
          <div className="output">
            <OutputView result={state.translation} />
          </div>
          <div className="editor">
            <Editor />
          </div>
        </div>
      </StateContext.Provider>
      <div className="rest">
        <p>Nota is under active development. The core language design is being settled, and a public release with documentation will come shortly after. Check out our progress on <a href="https://github.com/nota-lang/nota">Github</a> or follow @wcrichton on <a href="https://twitter.com/wcrichton">Twitter</a>.</p>

        <p>If you are interested in contributing, please DM @wcrichton on Twitter or email <a href="mailto:wcrichto@cs.stanford.edu">wcrichto@cs.stanford.edu</a>.</p>
      </div>
    </div>
  );
});

ReactDOM.render(<App />, document.getElementById("container"));

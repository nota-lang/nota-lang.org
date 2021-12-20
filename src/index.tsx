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
@strong{Nota} is a language for writing documents.
`.trim();

let App = observer(() => {
  let [state] = useState(() => new LocalState(contents));

  return (
    <div>
      <header>
        <h1>Nota: A Document Language for the Browser</h1>
      </header>
      <div>
        <StateContext.Provider value={state}>
          {state.ready ? (
            <div class="row">
              <Editor />
              <OutputView result={state.translation} />
            </div>
          ) : (
            "Loading..."
          )}
        </StateContext.Provider>
      </div>
    </div>
  );
});

ReactDOM.render(<App />, document.getElementById("container"));

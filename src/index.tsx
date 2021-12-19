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

import "@nota-lang/nota-components/dist/nota-components.css";
import "@nota-lang/nota-editor/dist/nota-editor.css";
import "../css/app.scss";

import "../node_modules/@nota-lang/nota-editor/dist/*.wasm";

let contents = `
@strong{Nota} is a language for writing documents.
`.trim();

let App = observer(() => {
  let [state] = useState(() => {
    let state = new LocalState();
    state.contents = contents;
    return state;
  });

  return (
    <div>
      <h1>Nota: A Document Language for the Browser</h1>
      <div>
        <StateContext.Provider value={state}>
          {state.ready ? (
            <>
              <Editor />
              <OutputView result={state.translation} />
            </>
          ) : (
            "Loading..."
          )}
        </StateContext.Provider>
      </div>
    </div>
  );
});

ReactDOM.render(<App />, document.getElementById("container"));

import React, { useState } from "react";
import { document } from "@nota-lang/nota-components";
import {
  Editor,
  OutputView,
  JsView,
  LocalState,
  StateContext,
} from "@nota-lang/nota-editor";
import * as lang_rust from "@codemirror/lang-rust";
import { observer } from "mobx-react";
import classNames from "classnames";

// @ts-ignore
import flourish from "../static/flourish.jpg";
import "@nota-lang/nota-editor/dist/index.css";

export let NotaCode: React.FC<
  React.PropsWithChildren<{ fancy?: boolean; imports?: { [key: string]: any } }>
> = observer(({ fancy, children, imports }) => {
  let [state] = useState(
    () =>
      new LocalState((children as any).trim(), {
        "@codemirror/lang-rust": lang_rust,
        ...imports,
      })
  );
  let [show_js, set_show_js] = useState(false);

  return (
    <StateContext.Provider value={state}>
      <document.Row className={classNames("nota-code", { fancy })}>
        <div className="output">
          {show_js ? (
            <JsView result={state.translation} />
          ) : (
            <OutputView result={state.translation} />
          )}
          <button
            className="toggle-output"
            onClick={() => set_show_js(!show_js)}
          >
            {show_js ? "Show Nota" : "Show JS"}
          </button>
        </div>
        <Editor embedded />
        {fancy ? <img className="flourish" src={flourish} /> : null}
      </document.Row>
    </StateContext.Provider>
  );
});

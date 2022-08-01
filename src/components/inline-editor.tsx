import React, { useState } from "react";
import { document } from "@nota-lang/nota-components";
import {
  Editor,
  OutputView,
  JsView,
  LocalState,
  StateContext,
} from "@nota-lang/nota-editor";
import classNames from "classnames";

import "@nota-lang/nota-editor/dist/index.css";
import { observer } from "mobx-react";

export let InlineEditor: React.FC<
  React.PropsWithChildren<{ fancy?: boolean; imports?: { [key: string]: any } }>
> = observer(({ fancy, children, imports }) => {
  let [state] = useState(
    () => new LocalState({ contents: (children as any).trim(), imports })
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
        {fancy ? <img className="flourish" src="/static/flourish.png" /> : null}
      </document.Row>
    </StateContext.Provider>
  );
});

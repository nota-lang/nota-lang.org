import React, { useState } from "react";
import { Row } from "@nota-lang/nota-components";
import {
  Editor,
  OutputView,
  JsView,
  LocalState,
  StateContext,
} from "@nota-lang/nota-editor";
import { observer } from "mobx-react";
import classNames from "classnames";

import flourish from "../static/flourish.jpg";
import "@nota-lang/nota-editor/dist/index.css";

export let NotaCode: React.FC<{ fancy?: boolean }> = observer(
  ({ fancy, children }) => {
    let [state] = useState(() => new LocalState(children));
    let [show_js, set_show_js] = useState(false);

    return (
      <StateContext.Provider value={state}>
        <Row className={classNames("nota-code", {fancy})}>
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
        </Row>
      </StateContext.Provider>
    );
  }
);

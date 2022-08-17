import React, { useState, useEffect, useRef } from "react";
import {
  Editor,
  OutputView,
  JsView,
  LocalState,
  StateContext,
} from "@nota-lang/nota-editor";
import Split from "react-split";
import _ from "lodash";
import classNames from "classnames";
import { observer } from "mobx-react";

let useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    let update = _.debounce(() => {
      setSize([window.innerWidth, window.innerHeight]);
    }, 300);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
};

export let PageEditor: React.FC<{ contents: string; imports: string[] }> =
  observer(({ contents, imports }) => {
    let [width, _height] = useWindowSize();
    let [state] = useState(() => new LocalState({ contents, imports }));

    let onMobile = width < 800;
    let direction: "vertical" | "horizontal" = onMobile
      ? "vertical"
      : "horizontal";

    return (
      <StateContext.Provider value={state}>
        <div className="page-editor">
          <Split
            className={classNames("split", direction)}
            direction={direction}
          >
            <div>
              <OutputView result={state.translation} />
            </div>
            <Editor />
          </Split>
        </div>
      </StateContext.Provider>
    );
  });

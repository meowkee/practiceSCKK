import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PassInWay from "./passinway/PassInWay";
import './i18n'

export const Context = React.createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      passinway: new PassInWay(),
    }}
  >
    <Suspense fallback={<div>Кормим котят...</div>}>
      <App />
    </Suspense>
  </Context.Provider>,
  document.getElementById("root")
);

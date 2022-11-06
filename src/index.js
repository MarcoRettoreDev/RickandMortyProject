import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./Helpers/UseContext";
import ReactQuery from "./Helpers/ReactQuery";
import { App } from "./Components/App/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ContextProvider>
      <ReactQuery>
        <App />
      </ReactQuery>
    </ContextProvider>
  </BrowserRouter>
);

serviceWorkerRegistration.register();

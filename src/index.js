import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import ContextProvider from "./components/context";
import { Provider } from "react-redux";
import myStore from "./components/redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <ContextProvider>
  <Provider store={myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </ContextProvider>
);

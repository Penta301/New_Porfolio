import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import navsArr from "./utils/navsArr";
import RouteHandler from "./components/RouteHandler/RouteHandler";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen bg-slate-700 flex flex-col items-center">
        <div className="w-3/6">
          <NavBar elements={navsArr}></NavBar>
          <RouteHandler />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

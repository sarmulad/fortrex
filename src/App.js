import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Tokenomics from "pages/tokenomics";
import NotFound from "pages/notfound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

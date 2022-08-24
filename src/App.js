import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "pages/notfound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

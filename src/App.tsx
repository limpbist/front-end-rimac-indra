import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Plans from "./pages/plans";
import Resume from "./pages/resume";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PlanesyCoberturas" element={<Plans />} />
        <Route path="/ResumenDelSeguro" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;

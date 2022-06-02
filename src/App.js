import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Start from "./Pages/Start"
import About from "./Pages/About"

import NoPage from "./Pages/NoPage"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="start" element={<Start />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

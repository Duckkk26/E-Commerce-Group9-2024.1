import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Component/Header/Header";

import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Component/Header/Header";

import "./App.css";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobile" element={<ShopCategory category="Mobile" />}>
            <Route
              path=":brandName"
              element={<ShopCategory category="Mobile" />}
            />
          </Route>
          <Route path="/tablet" element={<ShopCategory category="Tablet" />} />
          <Route path="/laptop" element={<ShopCategory category="Laptop" />} />
          <Route
            path="/personalcomputer"
            element={<ShopCategory category="PersonalComputer" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Component/Header/Header";

import "./App.css";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";

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
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

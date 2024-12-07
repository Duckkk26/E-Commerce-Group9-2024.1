import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Header from "./Component/Header/Header";
import Footer from './Components/Footer/Footer'

import "./App.css";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";
import Cart from './Pages/Cart'
import Pay from './Pages/Pay';
import Order from './Pages/Order';
import OrderDetail from './Pages/OrderDetail';
import LoginSignup from './Pages/LoginSignup';

const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function App() {
  const isAuthenticated = localStorage.getItem('auth-token');
  
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <div className="clear"></div>
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
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/cart' element={<Cart />} />
            <Route path='/pay/*' element={<Pay />} />
            <Route path='/order' element={<Order />} />
            <Route path='/order/order-detail' element={<OrderDetail />}>
              <Route path=':orderId' element={<OrderDetail />} />
            </Route>
          </Route>
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import "./CSS/Admin.css";
import Navbar from "../Component/admin/Navbar/Navbar";
import Sidebar from "../Component/admin/Sidebar/Sidebar";
import AddAndEditProduct from "../Component/admin/AddAndEditProduct/AddAndEditProduct";
import ListProduct from "../Component/admin/ListProduct/ListProduct";
import { Route, Routes } from "react-router-dom";

function Admin() {
  return (
    <div>
      <Navbar />
      <div className="admin">
        <Sidebar />
        <Routes>
          <Route
            path="/addProduct"
            element={<AddAndEditProduct mode={"add"} />}
          />
          <Route path="/listProduct" element={<ListProduct />} />
          <Route path="/edit" element={<AddAndEditProduct mode={"edit"} />}>
            <Route
              path=":productId"
              element={<AddAndEditProduct mode={"edit"} />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Admin;

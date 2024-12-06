import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";

import "./CSS/Product.css";
import MenuBottomTabs from "../Components/MenuBottomTabs/MenuBottomTabs";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";

function Product() {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((item) => item.id === Number(productId));

  return (
    <div className="product-container">
      {product ? (
        <>
          <Breadcrumbs product={product} category={product.category} />
          <ProductDisplay product={product} />
        </>
      ) : (
        <></>
      )}
      <MenuBottomTabs active={"Home"} />
    </div>
  );
}

export default Product;

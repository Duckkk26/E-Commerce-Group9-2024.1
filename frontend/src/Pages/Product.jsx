import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Component/Breadcrumbs/Breadcrumbs";

import "./CSS/Product.css";
import MenuBottomTabs from "../Component/MenuBottomTabs/MenuBottomTabs";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Component/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Component/RelatedProducts/RelatedProducts";
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
          <DescriptionBox product={product} />
          <RelatedProducts category={product.category} />
        </>
      ) : (
        <></>
      )}
      <MenuBottomTabs active={"Home"} />
    </div>
  );
}

export default Product;

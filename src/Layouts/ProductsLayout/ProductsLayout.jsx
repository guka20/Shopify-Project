import React from "react";
import "./ProductsLayout.css";
const ProductsLayout = ({ title, children }) => {
  return (
    <div className="products-layout">
      {title}
      <div className="products-container">{children}</div>
    </div>
  );
};

export default ProductsLayout;

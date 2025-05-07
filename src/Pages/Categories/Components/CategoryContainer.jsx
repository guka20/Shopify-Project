import React from "react";
import "./CategoryContainer.css";
import { Link } from "react-router-dom";
const CategoryContainer = ({ category, slug }) => {
  return (
    <div className="category-container">
      <p className="title">{category}</p>
      <Link to={`/category/${slug}`} className="link">
        View products
      </Link>
    </div>
  );
};

export default CategoryContainer;

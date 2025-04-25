import React, { useEffect, useState } from "react";
import { getAllProducts } from "@/helper/api";
import { CartItem } from "@/components";
import ProductsLayout from "@/Layouts/ProductsLayout/ProductsLayout";
import "./Home.css";
const Home = () => {
  const [products, setProducts] = useState();
  
  useEffect(() => {
    getAllProducts(0,8).then((resp) => setProducts(resp.products));
  }, []);
  if (products?.length === 0) {
    return <h1>There are no any products</h1>;
  }
  return (
    <div className="home-page">
      {products === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <ProductsLayout title="Trending Products">
          {products.map((el) => (
            <CartItem
              id={el.id}
              title={el.title}
              category={el.category}
              thumbnail={el.thumbnail}
              price={el.price}
              discountPercentage={el.discountPercentage}
            />
          ))}
        </ProductsLayout>
      )}
    </div>
  );
};
export default Home;

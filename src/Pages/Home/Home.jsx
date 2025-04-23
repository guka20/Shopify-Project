import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../helper/api";

const Home = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    getAllProducts().then((resp) => setProducts(resp.products));
  }, []);
  if (products?.length === 0) {
    return <h1>There are no any products</h1>;
  }
  return (
    <div>
      {products === undefined ? (
        <h1>Loading...</h1>
      ) : (
        products.map((el) => (
          <p key={el.id}>
            {el.id} - {el.title}
          </p>
        ))
      )}
    </div>
  );
};
export default Home;

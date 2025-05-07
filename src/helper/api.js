import axios from "@/config/axios";

async function getAllProducts(skip, limit) {
  const resp = await axios.get("products", {
    params: {
      limit,
      skip,
    },
  });
  const { data } = resp;
  return data;
}

async function getCategoriesList() {
  const resp = await axios.get("products/categories");
  const { data } = resp;
  return data;
}

async function getCategoryProducts( category_id ) {
  const resp = await axios.get(`products/category/${category_id}`);
  const { data } = resp;
  return data;
}

export { getAllProducts, getCategoriesList, getCategoryProducts };

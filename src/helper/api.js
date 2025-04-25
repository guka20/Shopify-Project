import axios from "../config/axios";

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

export { getAllProducts };

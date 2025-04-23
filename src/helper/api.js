import axios from "../config/axios";

async function getAllProducts() {
  const resp = await axios.get("products");
  const { data } = resp;
  return data;
}

export { getAllProducts };

import React from "react";
import Table from "./Table.js";
import products from "../data/products.json";

function ProductTable() {
  return <Table data={products} />;
}

export default ProductTable;

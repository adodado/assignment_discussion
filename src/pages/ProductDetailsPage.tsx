import React from "react";
import ProductDetails from "../components/products/productDetails";

const ProductDetailsPage = (props: any) => {
  return <ProductDetails id={props.match.params.id} />;
};
export default ProductDetailsPage;

import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/products-interfaces";

import { ProductButtons } from "./ProductButtons.";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";

export { ProductButtons } from "./ProductButtons.";
export { ProductTitle } from "./ProductTitle";
export { ProductImage } from "./ProductImage";


// this way we can use ProductCard as a HOC with subcomponents
// like ProductCard.Title, ProductCard.Image, ProductCard.Buttons
// and we keep the typesafety with ProductCardHOCProps
//we use the ProductCardHOCProps interface to type the ProductCard object

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;

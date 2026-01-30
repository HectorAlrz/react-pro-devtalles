import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface ProductImageProps {
  img?: string;
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = "", title = "", className = "", style }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return <img style={style} className={`${styles.productImg} ${className}`} src={imgToShow} alt={title} />;
};

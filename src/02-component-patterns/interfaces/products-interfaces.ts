import { JSX } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons.";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  quantity: number;
}

export interface ShoppingCartItem extends Product {
  quantity: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
  maxCount?: number;
}
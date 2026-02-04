import { useState } from "react";
import { Product, ShoppingCartItem } from "../interfaces/products-interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ShoppingCartItem;
  }>({});

  const onProductCountChange = ({
    quantity,
    product,
  }: {
    quantity: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ShoppingCartItem = oldShoppingCart[product.id] || {
        ...product,
        quantity: 0,
      };

      if (Math.max(productInCart.quantity + quantity, 0) > 0) {
        productInCart.quantity += quantity;

        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCart;

      return rest;

      // if (quantity === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;

      //   return rest;
      // }

      // return { ...oldShoppingCart, [product.id]: { ...product, quantity } };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};

import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

function ShoppingPage() {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* <ProductCard product={product1}>
          <ProductCard.Image img={product1.img} title={product1.title} />
          <ProductCard.Title title={product1.title} className="text-bold" />
          <ProductCard.Buttons />
        </ProductCard> */}

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.quantity || 0}
          >
            <ProductImage
              img={product.img}
              title={product.title}
              className="custom-image text-bold"
            />
            <ProductTitle
              title={product.title}
              className="text-white text-bold"
            />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}

        <div className="shopping-cart">
          {Object.entries(shoppingCart).map(([key, product]) => {
            return (
              <ProductCard
                key={key}
                product={product}
                className="bg-dark text-white"
                style={{ width: "100px" }}
                onChange={(e) => onProductCountChange(e)}
                value={product.quantity}
              >
                <ProductImage
                  img={product.img}
                  title={product.title}
                  className="custom-image text-bold"
                />
                <ProductButtons
                  className="custom-buttons"
                  style={{ display: "flex", justifyContent: "center" }}
                />
              </ProductCard>
            );
          })}
        </div>

        {/* <ProductCard
          product={product}
          className="bg-dark text-white"
          style={{ backgroundColor: "purple" }}
        >
          <ProductImage
            img={product.img}
            title={product.title}
            className="custom-image text-bold"
          />
          <ProductTitle title={"Compound component"} className="text-white text-bold" />
          <ProductButtons
            className="custom-buttons"
            style={{ display: "flex", justifyContent: "end" }}
          />
        </ProductCard> */}
      </div>
    </div>
  );
}

export default ShoppingPage;

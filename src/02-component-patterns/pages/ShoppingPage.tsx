import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";
// import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

const product = products[0];

function ShoppingPage() {
  // const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            initialValues={{
              count: 4,
              maxCount: 10,
            }}
          >
            {({ reset, increaseBy, count, isMaxCountReached }) => (
              <>
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
                <button onClick={() => increaseBy(-2)}>-2</button>
                {!isMaxCountReached && (
                  <button onClick={() => increaseBy(2)}>+2</button>
                )}
                <span>{count}</span>
              </>
            )}
          </ProductCard>
        }
      </div>
    </div>
  );
}

export default ShoppingPage;

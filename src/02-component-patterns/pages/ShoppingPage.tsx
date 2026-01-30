import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

function ShoppingPage() {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image img={product.img} title={product.title} />
          <ProductCard.Title title={product.title} className="text-bold" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage
            img={product.img}
            title={product.title}
            className="custom-image text-bold"
          />
          <ProductTitle title={"Compound component"} className="text-white text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
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
        </ProductCard>
      </div>
    </div>
  );
}

export default ShoppingPage;

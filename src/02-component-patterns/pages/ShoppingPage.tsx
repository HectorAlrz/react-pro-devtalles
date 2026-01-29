import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

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
          <ProductCard.Title title={product.title} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage img={product.img} title={product.title} />
          <ProductTitle title={"Compound component"} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
}

export default ShoppingPage;

import ProductList from "./ProductList";

function Main({ products, onadd }) {
  return (
    <main className="block column-two">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <ProductList key={product.id} product={product} onAdd={onadd} />
        ))}
      </div>
    </main>
  );
}

export default Main;

function ProductList({ product, onAdd }) {
  return (
    <div className="space-between-products">
      <img src={product.image} alt={product.name} className="image-size"></img>
      <h4>{product.name}</h4>

      <div>${product.price}</div>

      <button onClick={() => onAdd(product)}>Add to cart</button>
    </div>
  );
}

export default ProductList;

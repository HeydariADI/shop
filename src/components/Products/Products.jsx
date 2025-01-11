function Products({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="items ">
      {products.map((product) => (
        <div className="item" key={product.id}>
          <img className="image" src={product.image} alt={product.title} />
          <p className="title">{product.title}</p>
          <p className="price">${product.price}</p>
          <button className="btn" onClick={() => onAddToCart(product)}>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;

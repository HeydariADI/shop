import { useState } from "react";

function Products({ products, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategory = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="category flex justify-evenly items-center border border-violet-400 rounded-md p-4">
        <button
          className={`category-item ${
            selectedCategory === "all" ? "active" : ""
          }`}
          onClick={(e) => handleCategory(e, "all")}
        >
          All
        </button>
        <button
          className={`category-item ${
            selectedCategory === "men's clothing" ? "active" : ""
          }`}
          onClick={(e) => handleCategory(e, "men's clothing")}
        >
          Men's clothing
        </button>
        <button
          className={`category-item ${
            selectedCategory === "jewelery" ? "active" : ""
          }`}
          onClick={(e) => handleCategory(e, "jewelery")}
        >
          Jewelery
        </button>
        <button
          className={`category-item ${
            selectedCategory === "electronics" ? "active" : ""
          }`}
          onClick={(e) => handleCategory(e, "electronics")}
        >
          Electronics
        </button>
        <button
          className={`category-item ${
            selectedCategory === "women's clothing" ? "active" : ""
          }`}
          onClick={(e) => handleCategory(e, "women's clothing")}
        >
          Women's clothing
        </button>
      </div>
      <div className="items">
        {filteredProducts.map((product) => (
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
    </div>
  );
}

export default Products;

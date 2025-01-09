import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Heading from "./components/Heading/Heading";
import Products from "./components/Products/Products";
import Modal from "./components/Modal/Modal";
import Cart from "./components/Cart/Cart";
import Loader from "./components/Loading/Loader";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage("ITEMS", []);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSearchChange = (newQuery) => {
    setQuery(newQuery);
    if (newQuery.length >= 1) {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(newQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts([]);
    }
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setCartItems((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  return (
    <div className="app flex flex-col gap-7">
      <Toaster />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Heading
            products={products}
            onSearchChange={handleSearchChange}
            setShowModal={setShowModal}
            cartItems={cartItems}
          />
          <Products
            products={filteredProducts.length > 0 ? filteredProducts : products}
            onAddToCart={handleAddToCart}
          />
          <Modal show={showModal} onClose={closeModal}>
            <Cart products={cartItems} onDelete={handleDelete} />
          </Modal>
        </>
      )}
    </div>
  );
}

export default App;

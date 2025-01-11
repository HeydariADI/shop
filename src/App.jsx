import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Heading from "./components/Heading/Heading";
import Products from "./components/Products/Products";
import Modal from "./components/Modal/Modal";
import Cart from "./components/Cart/Cart";
import Loader from "./components/Loading/Loader";
import useLocalStorage from "./hooks/useLocalStorage";
import Login from "./components/Login";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage("ITEMS", []);
  const [modalContent, setModalContent] = useState(null);

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
    <div className="app flex flex-col justify-center items-center p-4">
      <Toaster />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Heading
            products={products}
            onSearchChange={handleSearchChange}
            setShowModal={setShowModal}
            setModalContent={setModalContent}
            cartItems={cartItems}
          />
          <Products
            products={filteredProducts.length > 0 ? filteredProducts : products}
            onAddToCart={handleAddToCart}
          />
          <Modal show={showModal} onClose={closeModal}>
            {modalContent === "cart" && (
              <Cart products={cartItems} onDelete={handleDelete} />
            )}
            {modalContent === "login" && <Login />}
          </Modal>
        </>
      )}
    </div>
  );
}

export default App;

import {
  ArrowLeftEndOnRectangleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

// import { ShoppingCartIcon } from 'react-icons/fa';

function Heading({ onSearchChange, setShowModal, cartItems, setModalContent }) {
  // const [isOpenLogin, setIsOpenLogin] = useState(false);
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleOpenCartModal = () => {
    setModalContent("cart");
    setShowModal(true);
  };
  const handleOpenLoginModal = () => {
    setModalContent("login");
    setShowModal(true);
  };

  return (
    <div className="heading bg-violet-900 flex  justify-between items-center  w-full  p-10">
      <h1 className="text-white font-bold text-lg ">Shoping Cart </h1>
      <input
        type="text"
        onChange={handleSearchChange}
        className="w-1/2 p-4 m-5 border border-gray-200 focus:border-gray-400 rounded-lg text-gray-500 hover:bg-green-50 focus:shadow-lg"
        placeholder="Search for products..."
      />
      <div className="flex gap-5">
        <button
          className="flex justify-center items-center "
          onClick={handleOpenCartModal}
        >
          <ShoppingCartIcon className="cart " />
          <span className="cart_badge">{cartItems.length}</span>
        </button>
        <button
          className="flex justify-center items-center "
          onClick={handleOpenLoginModal}
        >
          <ArrowLeftEndOnRectangleIcon className="login" />
        </button>
      </div>
    </div>
  );
}

export default Heading;

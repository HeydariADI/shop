import { ShoppingCartIcon } from "@heroicons/react/24/outline";
// import { ShoppingCartIcon } from 'react-icons/fa';

function Heading({ onSearchChange, setShowModal, cartItems }) {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="heading bg-green-500 flex  justify-between items-center  p-10">
      <h1 className="text-white font-bold text-lg ">Shopping Cart</h1>
      <input
        type="text"
        onChange={handleSearchChange}
        className="w-1/2 p-4 m-5 border border-gray-200 focus:border-gray-400 rounded-lg text-gray-500 hover:bg-green-50 focus:shadow-lg"
        placeholder="Search for products..."
      />
      <button
        className="flex justify-center items-center "
        onClick={() => setShowModal(true)}
      >
        <ShoppingCartIcon className="cart " />
        <span className="cart_badge">{cartItems.length}</span>
      </button>
    </div>
  );
}

export default Heading;

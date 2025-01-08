import { TrashIcon } from "@heroicons/react/24/outline";

function Cart({ products, onDelete }) {
  if (products.length === 0)
    return (
      <p className="w-80 h-80 p-4 text-red-400 font-bold">
        No products in cart
      </p>
    );

  return (
    <div>
      <h2 className="border-b-2 border-slate-900 mb-2 p-2">Your Cart</h2>
      {products.map((product, index) => (
        <div
          key={index}
          className="cart-item border-b-2 border-gray-200 p-5 flex  justify-between items-center gap-10  bg-gray-100 "
        >
          <div className="flex p-2 justify-center items-center gap-3">
            <img
              className="cart-image w-16 h-16"
              src={product.image}
              alt={product.title}
            />
            <div className="cart-details ml-4">
              <p className="cart-title font-bold">{product.title}</p>
              <p className="cart-price text-gray-500">${product.price}</p>
            </div>
          </div>
          <TrashIcon
            className="text-red-400 w-6 h-6 cursor-pointer"
            onClick={() => onDelete(product.id)}
          />
        </div>
      ))}
      <button className="btn mt-2">to</button>
    </div>
  );
}

export default Cart;

import { FaTrashAlt } from "react-icons/fa";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import emptyCart from "../../public/close-up-toy-cart-with-easter-eggs.jpg";
import { cartActions } from "../store/cartSlice";

export default function ShoppingCart() {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  function handleIncrease(item) {
    dispatch(cartActions.increase(item));
  }

  function handleDecrease(item) {
    dispatch(cartActions.decrease(item));
  }

  function handleRemoveItem(item) {
    dispatch(cartActions.removeItem(item));
  }

  function handelCheckout() {
    navigate("Checkout");
  }

  return (
    <div className="container mx-auto min-h-96 px-4 py-8 md:px-16 lg:px-24">
      {items.length > 0 ? (
        <div>
          <div className="mt-7 w-1/2 bg-sky-400 px-2 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-600 md:text-2xl">
            Shopping Cart....
          </div>

          <div className="mt-10 flex w-full flex-col gap-8 md:flex-row">
            <div className="w-full md:w-2/3">
              <div className="mb-4 flex border-b px-4 text-xs font-bold">
                <div className="w-2/6 py-2">PRODUCTS</div>
                <div className="w-1/6 py-2 text-center">PRICE</div>
                <div className="w-1/6 py-2 text-center">QUANTITY</div>
                <div className="w-1/6 py-2 text-center">SUBTOTAL</div>
                <div className="w-1/6 py-2 text-center">REMOVE</div>
              </div>
              <div>
                {items.map((item) => (
                  <div
                    className="mt-6 flex items-center px-4 py-2 shadow-md"
                    key={item.id}
                  >
                    <div className="flex w-2/6 items-center">
                      <img
                        className="h-16 w-16 object-contain"
                        src={item.image}
                        alt={item.title}
                      />
                      <h3 className="ml-4 font-semibold">{item.title}</h3>
                    </div>
                    <div className="w-1/6 text-center">${item.price}</div>
                    <div className="flex w-1/6 items-center justify-center">
                      <button
                        onClick={() => handleDecrease(item)}
                        className="cursor-pointer px-1.5 text-xl font-bold text-sky-500 hover:text-sky-700"
                      >
                        <IoRemoveCircleOutline />
                      </button>
                      <span className="mx-2 text-xl">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item)}
                        className="cursor-pointer px-1 text-xl text-sky-500 hover:text-sky-700"
                      >
                        <IoAddCircleOutline />
                      </button>
                    </div>
                    <div className="w-1/6 text-center">${item.pluralItems}</div>
                    <div className="flex w-1/6 justify-center">
                      <button
                        onClick={() => handleRemoveItem(item)}
                        className="cursor-pointer text-sky-500 hover:text-sky-700"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="rounded-lg bg-white p-5 shadow-md">
                <h4 className="mb-3 font-bold">CART TOTAL</h4>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold">Total Items:</span>
                  <span className="font-bold">{items.length}</span>
                </div>
                <hr className="mb-4" />
                <div className="mb-3">
                  <span className="font-semibold">Shopping:</span>
                  <div className="ml-3">
                    <span>Shipping to: Address</span>
                    <div className="cursor-pointer text-sky-600 hover:underline">
                      change address
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-semibold">TotalPrice:</span>
                  <span className="font-bold">${totalAmount.toFixed(2)}</span>
                </div>
                <button
                  onClick={handelCheckout}
                  className="w-full cursor-pointer rounded bg-sky-500 px-4 py-2 font-bold text-white transition hover:bg-sky-700"
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <img
              src={emptyCart}
              alt="close-up-toy-cart-with-easter-eggs"
              className="mt-8 w-[250px]"
            />
          </div>
          <p className="mt-3 text-center text-red-400 underline md:text-2xl">
            Your cart is empty!!
          </p>
        </>
      )}
    </div>
  );
}

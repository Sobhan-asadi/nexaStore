import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Gestures from "../libs/Gestures";
import { productActions } from "../store/productSlice";

export default function AllProduct({ products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handelDetails(item) {
    dispatch(productActions.setProduct(item));
    navigate("details");
  }
  return (
    <>
      <div className="mt-16 w-1/2 bg-sky-400 px-2 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-600 md:text-2xl">
        PRODUCTS....
      </div>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
          {/* MAP */}
          {products &&
            products.map((product) => (
              <div
                className="cursor-pointer"
                onClick={() => handelDetails(product)}
                key={product.id}
              >
                <Gestures classes="m-4">
                  <div className="relative flex flex-col rounded-md bg-white p-4 shadow-lg">
                    <img
                      className="mb-4 h-40 w-full object-contain"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="my-2">
                      <h2 className="line-clamp-2 text-sm font-semibold">
                        {product.title}
                      </h2>
                      <p className="my-4 text-sky-600">${product.price}</p>
                    </div>

                    <div className="group absolute right-3 bottom-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-sky-500 text-base text-white transition-all hover:w-32 hover:bg-sky-700">
                      <span className="group-hover:hidden">+</span>
                      <span className="hidden group-hover:block">
                        Add to Cart
                      </span>
                    </div>
                  </div>
                </Gestures>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

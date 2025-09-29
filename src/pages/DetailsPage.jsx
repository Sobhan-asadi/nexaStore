import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Photoswipe from "../libs/Photoswipe";

const ProductDetails = () => {
  const product = useSelector((state) => state.product.product);
  const navigate = useNavigate();

  if (!product || !product.title)
    return (
      <div className="mt-12 text-center text-xl text-gray-500">
        No product selected
      </div>
    );
  const images = [
    {
      largeURL: product.image,
      thumbnailURL: product.image,
      width: 1200, // ابعاد واقعی عکس بزرگ (یا تخمینی)
      height: 1500,
    },
  ];
  return (
    <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-10 rounded-xl bg-white p-10 shadow-2xl md:flex-row md:gap-16">
      <div className="flex flex-1 items-center justify-center">
        <Photoswipe galleryID="product-gallery" images={images} />
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <Link
          to="/"
          className="mb-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-indigo-700"
        >
          Back
        </Link>
        <h1 className="mb-6 text-4xl font-bold text-gray-900">
          {product.title}
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          {product.description}
        </p>
        <div className="mb-6 text-3xl font-extrabold text-indigo-600">
          ${product.price}
        </div>
        <div className="flex flex-wrap gap-6 text-lg text-gray-600">
          <div className="rounded-full bg-indigo-100 px-5 py-2 font-semibold">
            Category: {product.category}
          </div>
          <div>
            Rating:{" "}
            <span className="font-bold text-yellow-500">
              {product.rating?.rate}
            </span>{" "}
            ({product.rating?.count} reviews)
          </div>
          <div className="mb-8 flex h-14 w-full items-center justify-center rounded-md bg-gray-700 text-lg leading-relaxed text-orange-500 underline underline-offset-1">
            Click on the image to see the full product image.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

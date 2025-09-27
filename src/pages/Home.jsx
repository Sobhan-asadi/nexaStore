import { Link, useLoaderData } from "react-router-dom";
import SliderMain from "../swiper/Slider";

const categories = [
  "Electonics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Sports",
  "Automotive",
];

export default function HomePage() {
  const data = useLoaderData();
  const showImag = data.slice(-10, 20);
  console.log(showImag);

  return (
    <div className="mt-2 bg-white px-4 md:px-16 lg:px-24">
      <div className="container mx-auto flex flex-col space-x-2 py-4 md:flex-row">
        <div className="w-full md:w-3/12">
          <div className="bg-sky-400 px-2 py-2.5 text-sm font-bold text-white shadow-sm shadow-sky-600">
            SHOP BY CATEGORIES
          </div>

          <ul className="mt-2 space-y-4 bg-gray-100 p-3 shadow-lg">
            {categories.map((category) => (
              <Link
                className="flex items-center border-b border-sky-300 py-2 text-sm font-medium"
                key={category}
              >
                <div className="mr-2 h-2 w-2 rounded-full border border-sky-600"></div>
                {category}
              </Link>
            ))}
          </ul>
        </div>

        <div className="relative mt-8 h-96 w-full md:mt-0 md:w-9/12">
          <SliderMain showImag={showImag} />
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  if (!res.ok) {
    return { message: "error" };
  } else {
    const data = res.json();
    return data;
  }
}

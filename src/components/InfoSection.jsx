import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";
import Gestures from "../libs/Gestures";

const infoItemes = [
  {
    id: 1,
    title: "24/7 Support",
    icon: <FaHeadset className="text-center text-3xl text-sky-600" />,
    description: "Always ready to assist you with your questions.",
  },
  {
    id: 2,
    title: "Multiple Payment Methods",
    icon: <FaMoneyBillWave className="text-3xl text-sky-600" />,
    description: "Secure and easy online and cash payment options.",
  },
  {
    id: 3,
    title: "Fast & Reliable Shipping",
    description:
      "Your products will reach their destination in the shortest time.",
    icon: <FaShippingFast className="text-3xl text-sky-600" />,
  },
  {
    id: 4,
    icon: <FaLock className="text-3xl text-sky-600" />,
    title: "Data Security",
    description:
      "Protecting your personal and financial information is our priority.",
  },
  {
    id: 5,
    icon: <FaTag className="text-3xl text-sky-600" />,
    title: "Special Discounts",
    description: "We always have special offers and various discounts for you.",
  },
];

export default function InfoSection() {
  return (
    <>
      <div className="mt-16 w-1/2 bg-sky-400 px-2 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-600 md:text-2xl">
        SERVICES....
      </div>
      <div className="mt-8 bg-white pt-12 pb-8">
        <div className="container mx-auto grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {infoItemes.map((item) => (
            <Gestures
              key={item.id}
              classes="m-3 rounded cursor-pointer shadow-lg flex flex-col items-center rounded p-4 text-center"
            >
              <div className="text-center">
                {item.icon}
                <h3 className="mt-4 text-xl">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </Gestures>
          ))}
        </div>
      </div>
    </>
  );
}

import { useSelector } from "react-redux";
import BillingAccordion from "../components/BillingAccordion";

export default function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  console.log(items);

  return (
    <div className="container mx-auto min-h-96 px-4 py-8 md:px-16 lg:px-24">
      <div className="mt-7 w-1/2 bg-sky-400 px-2 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-600 md:text-2xl">
        CHECKOUT....
      </div>
      <div className="mt-4 flex flex-col justify-between space-x-10 md:flex-row">
        <div className="md:w-2/3">
          {/* Billing Info */}
          <BillingAccordion
            title="Billing Information"
            inputs={[
              {
                label: "Full Name",
                type: "text",
                name: "billing_name",
                placeholder: "Enter your full name",
              },
              {
                label: "Email",
                type: "email",
                name: "billing_email",
                placeholder: "Enter your email",
              },
              {
                label: "Phone",
                type: "tel",
                name: "billing_phone",
                placeholder: "Enter phone number",
              },
            ]}
          />

          {/* Shipping Info */}
          <BillingAccordion
            title="Shipping Information"
            inputs={[
              {
                label: "Address",
                type: "textarea",
                name: "shipping_address",
                placeholder: "Enter full address",
              },
              {
                label: "City",
                type: "text",
                name: "shipping_city",
                placeholder: "Enter city",
              },
              {
                label: "Country",
                type: "select",
                name: "shipping_country",
                placeholder: "Choose country",
                options: [
                  { label: "USA", value: "us" },
                  { label: "Canada", value: "ca" },
                  { label: "Germany", value: "de" },
                ],
              },
              {
                label: "Postal Code",
                type: "number",
                name: "shipping_postal",
                placeholder: "Enter postal code",
              },
            ]}
          />
        </div>
        {/* Order Summary */}
        <div className="rounded-lg bg-white p-6 shadow-md md:w-1/3">
          <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="h-16 w-16 rounded-md object-contain"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price:</span>
              <span className="font-semibold">${totalAmount.toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-6 w-full cursor-pointer rounded-md bg-sky-600 py-2 text-white transition-all hover:bg-sky-800">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

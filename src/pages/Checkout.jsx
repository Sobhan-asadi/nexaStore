import { useState } from "react";
import {
  FaArrowLeft,
  FaCreditCard,
  FaShoppingBag,
  FaTruck,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import CheckoutField from "../components/checkout/CheckoutField";
import CheckoutSection from "../components/checkout/CheckoutSection";
import ChoiceCard from "../components/checkout/ChoiceCard";
import OrderSuccess from "../components/checkout/OrderSuccess";
import OrderSummary from "../components/checkout/OrderSummary";
import { cartActions } from "../store/cartSlice";
import {
  createDemoOrder,
  EXPRESS_SHIPPING_PRICE,
  FREE_SHIPPING_THRESHOLD,
  initialCheckoutForm,
  STANDARD_SHIPPING_PRICE,
  validateCheckoutForm,
} from "../utils/checkout";

export default function Checkout() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const [form, setForm] = useState(initialCheckoutForm);
  const [errors, setErrors] = useState({});
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [order, setOrder] = useState(null);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const standardShippingPrice =
    subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_PRICE;

  const shippingPrice =
    shippingMethod === "express"
      ? EXPRESS_SHIPPING_PRICE
      : standardShippingPrice;

  const total = subtotal + shippingPrice;

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateCheckoutForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      const firstErrorField = Object.keys(validationErrors)[0];

      document.querySelector(`[name="${firstErrorField}"]`)?.focus();

      return;
    }

    const completedOrder = createDemoOrder({
      form,
      items,
      subtotal,
      shippingPrice,
      shippingMethod,
      paymentMethod,
    });

    setOrder(completedOrder);
    dispatch(cartActions.clearCart());

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (order) {
    return <OrderSuccess order={order} />;
  }

  if (items.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <main className="bg-[#fafafa]">
      <div className="page-container py-8 sm:py-12 lg:py-16">
        <div className="mb-8 border-b border-zinc-200 pb-7">
          <Link
            to="/cart"
            className="flex w-fit items-center gap-2 text-sm font-semibold text-zinc-500 transition hover:text-zinc-950"
          >
            <FaArrowLeft className="text-xs" />
            Back to cart
          </Link>

          <p className="text-brand-700 mt-7 text-xs font-bold tracking-[0.18em] uppercase">
            Complete your order
          </p>

          <h1 className="font-display mt-2 text-3xl font-extrabold tracking-[-0.04em] text-zinc-950 sm:text-4xl">
            Checkout
          </h1>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Enter your delivery details and review your order before placing it.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_400px] xl:gap-12"
        >
          <div className="space-y-6">
            <CheckoutSection
              number="01"
              title="Contact information"
              description="We'll use these details for your order confirmation."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <CheckoutField
                  label="First name"
                  name="firstName"
                  value={form.firstName}
                  error={errors.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                />

                <CheckoutField
                  label="Last name"
                  name="lastName"
                  value={form.lastName}
                  error={errors.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                />

                <CheckoutField
                  label="Email address"
                  name="email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={handleChange}
                  autoComplete="email"
                />

                <CheckoutField
                  label="Phone number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  error={errors.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>
            </CheckoutSection>

            <CheckoutSection
              number="02"
              title="Shipping address"
              description="Where should we send your order?"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <CheckoutField
                    label="Street address"
                    name="address"
                    value={form.address}
                    error={errors.address}
                    onChange={handleChange}
                    autoComplete="street-address"
                  />
                </div>

                <div className="sm:col-span-2">
                  <CheckoutField
                    label="Apartment, suite, etc."
                    name="apartment"
                    value={form.apartment}
                    onChange={handleChange}
                    required={false}
                    autoComplete="address-line2"
                  />
                </div>

                <CheckoutField
                  label="City"
                  name="city"
                  value={form.city}
                  error={errors.city}
                  onChange={handleChange}
                  autoComplete="address-level2"
                />

                <div>
                  <label
                    htmlFor="country"
                    className="mb-2 block text-xs font-bold text-zinc-800"
                  >
                    Country
                  </label>

                  <select
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    autoComplete="country"
                    aria-invalid={Boolean(errors.country)}
                    aria-describedby={
                      errors.country ? "country-error" : undefined
                    }
                    className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-zinc-900 transition outline-none ${
                      errors.country
                        ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100"
                        : "focus:border-brand-500 focus:ring-brand-500/10 border-zinc-200 focus:ring-4"
                    }`}
                  >
                    <option value="">Select country</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="de">Germany</option>
                  </select>

                  {errors.country && (
                    <p
                      id="country-error"
                      className="mt-1.5 text-xs text-red-500"
                    >
                      {errors.country}
                    </p>
                  )}
                </div>

                <CheckoutField
                  label="Postal code"
                  name="postalCode"
                  value={form.postalCode}
                  error={errors.postalCode}
                  onChange={handleChange}
                  autoComplete="postal-code"
                />
              </div>
            </CheckoutSection>

            <CheckoutSection
              number="03"
              title="Shipping method"
              description="Choose how you'd like your order delivered."
            >
              <div className="grid gap-3">
                <ChoiceCard
                  name="shippingMethod"
                  value="standard"
                  checked={shippingMethod === "standard"}
                  onChange={() => setShippingMethod("standard")}
                  icon={FaTruck}
                  title="Standard delivery"
                  description="Estimated delivery in 4–7 business days"
                  price={
                    standardShippingPrice === 0
                      ? "Free"
                      : `$${standardShippingPrice.toFixed(2)}`
                  }
                />

                <ChoiceCard
                  name="shippingMethod"
                  value="express"
                  checked={shippingMethod === "express"}
                  onChange={() => setShippingMethod("express")}
                  icon={FaTruck}
                  title="Express delivery"
                  description="Estimated delivery in 1–3 business days"
                  price={`$${EXPRESS_SHIPPING_PRICE.toFixed(2)}`}
                />
              </div>
            </CheckoutSection>

            <CheckoutSection
              number="04"
              title="Payment"
              description="This portfolio demo simulates payment selection only."
            >
              <div className="grid gap-3">
                <ChoiceCard
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                  icon={FaCreditCard}
                  title="Credit or debit card"
                  description="Demo checkout — no real payment will be processed"
                  price="Demo"
                />

                <ChoiceCard
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                  icon={FaShoppingBag}
                  title="Pay on delivery"
                  description="Payment method simulated for this storefront demo"
                  price="Demo"
                />
              </div>
            </CheckoutSection>
          </div>

          <OrderSummary
            items={items}
            subtotal={subtotal}
            shippingPrice={shippingPrice}
            total={total}
          />
        </form>
      </div>
    </main>
  );
}

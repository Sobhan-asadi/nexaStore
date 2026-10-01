export const FREE_SHIPPING_THRESHOLD = 75;

export const STANDARD_SHIPPING_PRICE = 6.99;

export const EXPRESS_SHIPPING_PRICE = 14.99;

export const initialCheckoutForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  apartment: "",
  city: "",
  country: "",
  postalCode: "",
};

export function validateCheckoutForm(values) {
  const errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  }

  if (!values.address.trim()) {
    errors.address = "Address is required.";
  }

  if (!values.city.trim()) {
    errors.city = "City is required.";
  }

  if (!values.country) {
    errors.country = "Country is required.";
  }

  if (!values.postalCode.trim()) {
    errors.postalCode = "Postal code is required.";
  }

  return errors;
}

export function createDemoOrder({
  form,
  items,
  subtotal,
  shippingPrice,
  shippingMethod,
  paymentMethod,
}) {
  return {
    id: `NX-${Date.now().toString().slice(-8)}`,
    customer: form,
    items,
    subtotal,
    shipping: shippingPrice,
    total: subtotal + shippingPrice,
    shippingMethod,
    paymentMethod,
    createdAt: new Date().toISOString(),
  };
}

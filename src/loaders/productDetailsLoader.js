export default async function productDetailsLoader({ params }) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`,
  );

  if (!response.ok) {
    throw new Response("Product not found.", {
      status: response.status,
      statusText: response.statusText,
    });
  }

  const product = await response.json();

  if (!product?.id) {
    throw new Response("Product not found.", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return product;
}

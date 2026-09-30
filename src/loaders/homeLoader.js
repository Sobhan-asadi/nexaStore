export default async function homeLoader() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Response("Unable to load products.", {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return response.json();
}

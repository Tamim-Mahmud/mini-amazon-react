import { getShoppingCart } from "../components/Utilities/fakedb";

const cartProductLoaderData = async () => {
  const loadedData = await fetch("products.json");
  const products = await loadedData.json();

  const storedCart = getShoppingCart();

//   console.log(storedCart);

  let shoppingCart = [];

  for (const id in storedCart) {
    const newCart = products.find((product) => product.id === id);

    if (newCart) {
      const newQuantity = storedCart[id];
      newCart.quantity = newQuantity;
    }
    shoppingCart.push(newCart);
  }

  return shoppingCart;
};

export default cartProductLoaderData;

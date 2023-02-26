export const formatPrice = (price) => {
  const newNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
  console.log(price / 100);
  return newNumber;
};

export const formatPrice = (price) => {
  const newNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newNumber;
};
export const getUniqueValues = (products, title) => {
  let unique = products.map((item) => item[title]);
  if (title === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};

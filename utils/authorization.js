const productsStock = [
  "jackfruit",
  "mango",
  "banana",
  "guava",
  "pineapple",
  "apple",
  "orange",
  "lichi",
];

// "papaya",

// users products

const user1Products = ["banana", "guava", "papaya"];

const canBuyProducts = (stocks, usersProducts) => {
  return user1Products.reduce(
    (prev, product) => stocks && stocks.includes(product),
    false
  );
};

const isBuyProduct = canBuyProducts(productsStock, user1Products);

console.log(isBuyProduct);

const stock = [
  {
    productName: "mango",
    isStock: false,
  },
  {
    productName: "banana",
    isStock: true,
  },
  {
    productName: "jackfruit",
    isStock: true,
  },
];

//

const stockProducts = stock.map((item) => {
  item.isStock = !item.isStock;
  return item;
});

console.log(stockProducts);

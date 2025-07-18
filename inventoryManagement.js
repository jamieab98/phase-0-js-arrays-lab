// Write your code here
const products = [];
products.push("Laptop", "Phone", "Headphones", "Monitor")

function logFirstProduct () {
  console.log(products[0]);
}
logFirstProduct()

function addProduct(newProduct){
  console.log(newProduct);
  products.push(newProduct);
  console.log(products);
}
addProduct("Computer")

function updateProductName(position, newName) {
  products[position] = newName;
  console.log(products);
}
updateProductName(1, "macBook")

function removeLastProduct() {
  products.pop();
  console.log(products);
}
removeLastProduct()

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};

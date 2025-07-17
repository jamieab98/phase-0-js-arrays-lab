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
//  let strNewProduct = newProduct.toString();
//  products.push(strNewProduct);
//  console.log(strNewProduct);
}
addProduct("Computer")



// Export the necessary parts for testing
//module.exports = {
//  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
//  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
//  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
//  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
//  products
//};

interface Product {
  id: number;
  name: string;
  price: number;
  description?: number;
}

const addProduct = (product: Product) => {
  console.log({
    message: "Product Added Successfully",
    product,
  });
};

addProduct({
  name: "Test",
  price: 20,
  id: 1234,
});

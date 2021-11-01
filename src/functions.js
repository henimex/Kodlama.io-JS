class Customer {
    constructor(id, customerNumber) {
      this.id = id;
      this.customerNumber = customerNumber;
    }
  }
  
  let customer = new Customer(1, 11);
  
  console.log(customer);
  
  class IndividualCustomer extends Customer {
    constructor(firstName, id, customerNumber) {
      super(id, customerNumber);
      this.firstName = firstName;
    }
  }
  
  class CorporateCustomer extends Customer {
    constructor(campanyNumber, id, customerNumber) {
      super(id, customerNumber);
      this.campanyNumber = campanyNumber;
    }
  }
  
  let products = [
    { active: 1, id: 1, name: "Acer Laptop", unitPrice: 1500 },
    { active: 2, id: 2, name: "Asus Laptop", unitPrice: 2000 },
    { active: 1, id: 3, name: "HP Laptop", unitPrice: 2500 },
    { active: 1, id: 4, name: "Dell Laptop", unitPrice: 3000 },
    { active: 2, id: 5, name: "Casper Laptop", unitPrice: 3500 },
    { active: 1, id: 6, name: "SteelSeries Headphones", unitPrice: 4500 },
  ];
  
  products.map((p) => console.log(`${p.name}`));
  let filteredProducts = products.filter((p) => p.active == 1);
  console.log(filteredProducts);
  filteredProducts.map((p) =>
    console.log(`Filtered Product : ${p.name} : ${p.unitPrice}`)
  );
  
  let total = filteredProducts.reduce((acc, p) => acc + p.unitPrice, 0);
  console.log("Total Price : ", total);
  
  let taxAddedPrice = products
    .filter((p) => p.unitPrice > 2000)
    .map((fp) => {
      let taxedPrice = fp.unitPrice * 1.18;
      console.log(
        `Product \t\t\t: ${fp.name} \nPrice \t\t\t\t: ${fp.unitPrice} \nTaxed Value(%18) \t: ${taxedPrice}`
      );
      return taxedPrice;
    });
  
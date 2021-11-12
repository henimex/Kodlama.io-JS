let cart = [
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
  { id: 2, productName: "Bardak", quantity: 4, unitPrice: 30 },
  { id: 3, productName: "Kalem", quantity: 6, unitPrice: 20 },
  { id: 4, productName: "Şarj Kit", quantity: 11, unitPrice: 100 },
  { id: 5, productName: "Kitap", quantity: 9, unitPrice: 30 },
  { id: 6, productName: "Pot Plus", quantity: 5, unitPrice: 150 },
];

function addToCart(sepet) {
  sepet.push({ id: 7, productName: "Mouse", quantity: 1, unitPrice: 350 });
}

addToCart(cart);

cart.map((p) => {
  if (p.productName.startsWith("K")) {
    console.log("Foundt it Id: ", p.id);
  }
  console.log(
    `${p.productName} 'in Sepet Toplamı \t:${
      p.quantity * p.unitPrice
    } TL dir.  \n(Formul Acıklaması : ${p.unitPrice} x ${p.quantity})`
  );
});

let sayi = 10;
function topla(number) {
  number += 1;
}

console.log(topla(sayi));
console.log(sayi);

let quantityOver = cart.filter((p) => p.quantity > 2);
console.log("Filter Usage ", quantityOver);

let total = cart.reduce((acc, p) => acc + p.unitPrice, 0);
console.log(cart);
console.log(" Reduce Total Function : ", total);

function reverseIt(normalText) {
  let reversedText = "";

  for (let i = 0; i < normalText.length; i++) {
    reversedText = reversedText + normalText[normalText.length - 1 - i];
  }
  return reversedText;
}

let test = reverseIt("FERHAT");
console.log(test);


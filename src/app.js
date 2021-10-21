//#region 1. Gün
console.error("1. Gün Canlı Yayın");
console.log("Hello JavaScript with Kodlama.io by @engindemirog");

let krediler = [
  "Bir Kendine Bir Bankaya İki Devlete Araç Al Kredisi",
  "Paraya İhtiyacım Var Borç Ver Dahada ihtiyacım Olsun Kredisi",
  "Dolara Karşı Anlamsız Mücadele Kredisi",
  "Çocuğunu Okutmak İstiyorsan Donuna Kadar Alırız Kredisi.",
  "Bir Sıfırda Sen At Dönsün Dolaşsın Sana Girsin Kredisi",
  "Yolda Yürüyorsan Vergisini Verecek Veremezsen Kredi Veririz Kredisi",
  "Tarih Belirt Çalışırken Çırpmaya Devam Et Kredisi",
  "Fakirin Yüzü Güler mi? Güldürürüz Kredisi",
];

for (let i = 0; i < krediler.length; i++) {
  const element = krediler[i];
  console.log(element);
}

clear();

//1. Gün Ödevi
//https://www.kodlama.io/courses/1332369/lectures/32833622
console.error("1. Gün Ödevi");
let sayi1 = 10;
console.log("1st Line : ", sayi1);
sayi1 = "Jospeh HenimeX";
console.log("2nd Line : ", sayi1);
sayi1 = { Name: "Sample", Dec: "Declaration" };
console.log("3rd Line : ", sayi1);

maxla(1, 2);

function maxla(a, b) {
  return console.log(a + b);
}

let students = ["Ferhat", "Dilek", "Esila", "Ali Alp", sayi1];
console.log(students);

clear();

console.warn("Rest Spread Destructure");

//Rest
let showProducts = function (id, ...products) {
  console.log(id);
  console.log(products);
};

showProducts(1, "test", "ali", "vedahası");

//Spread
let points = [1, 6, 55, 24, 12, 6, 95, 65, 0];
console.log(points);
console.log("Spread ", ...points);
console.log(Math.max(...points));
console.log(..."ABC", "D", ..."DEF", "G");

//Destructure

let getMembers = function () {
  return { Name: "Ali Alp", Age: 5 };
};

let population = [10000, 20000, 30000, [50, 100, 150]];
let ages = [
  { Name: "Ferhat", Age: 30 },
  { Name: "Esila", Age: 15 },
  { Name: "Dilek", Age: 25 },
  getMembers(),
  { Name: "Unknown", Age: 99 },
  { Name: "Unknown", Age: 98 },
  { Name: "Unknown", Age: 97 },
  { Name: "Unknown", Age: 96 },
  { Name: "Unknown", Age: 95 },
  { Name: "Unknown", Age: 94 },
];
let member = { Name: "Ferhat", Age: 30 };
let [one, two, three, four, ...unknows] = ages;
let { Name, Age } = member;
let [small, medium, high, [veryHigh, max]] = population;

console.log("Object Destructed : ", Name, Age, " Must be the same decorator inside the object !");

console.log("Ages Destructed : ", one.Age, four.Age, unknows, unknows[2].Age);

console.log("Population Destructed : ", small, medium, high, veryHigh, max);

//#endregion

function clear() {
  console.clear();
}

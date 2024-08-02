const result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

const email = "mary.havrylova.2011@gmail.com";
console.log(email.includes("@"));
console.log(email.length);

const word1 = "My";
const word2 = "name";
const word3 = "is";
let fullname = word1 + " " + word2 + " " + word3;
fullname = fullname + " " + "Victor";
console.log(fullname);

const userName = "Анатолій Оргондович";
const payment = 1000000000;
const message = alert(
  `Дякуємо, що обрали нас, ${userName}. До оплати ${payment} гривень`
);

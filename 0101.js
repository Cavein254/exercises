let fruits = ["Apple", "Banana", "Mango", "Apple", "Mango", "Orange"];

let a = ["1", "1", "2", "3", "3", "1"];
let unique = fruits.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique);

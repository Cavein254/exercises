const arr = [2, 13, 4, -75, 22, 5];

function maxMin(arr) {
  let tempArr = arr;
  let maxMinArr = [];
  for (let i = 0; i < arr.length; i++) {
    let max = Math.max(...tempArr);
    tempArr = tempArr.filter((item) => item !== max);
    maxMinArr.push(max);
  }
  maxMinArr.pop();
  console.log(maxMinArr);
  return maxMinArr;
}

// console.log(arr.sort((a, b) => a - b));
console.log(arr.sort());

const arr2 = ["father", "mother", "children", "adam", "eve"];
console.log(arr2.sort());

const arr3 = ["Eve", "adam"];
console.log(
  arr3.sort((a, b) => a.toLowerCase().localeCompare(b.toLowercase))
  //   a.toLowerCase().localeCompare(b.toLowerCase());
);
console.log(arr3.sort(Intl.Collator().compare));
function smallToLarge(arr) {
  return arr.sort((a, b) => a - b);
}

console.log("-------");
console.log(smallToLarge(arr));

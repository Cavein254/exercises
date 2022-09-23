let arr = [5, 8, 2, 4, 2, 9, 3, 67, 6];
let MaxS = Number.NEGATIVE_INFINITY;
let MinS = Number.POSITIVE_INFINITY;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= MaxS) {
    MaxS = arr[i];
  }
}

console.log(MaxS);

function arrMin(arr) {
  return arr.reduce(function (p, v) {
    return p < v ? p : v;
  });
}

arrMin(arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= MinS) {
    MinS = arr[i];
  }
}
console.log("------:", MinS);

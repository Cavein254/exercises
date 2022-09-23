const arr = [2, 3, 4, 5, 22, 5];
let tempArr = arr;
let minMaxArr = [];
for (let i = 0; i < arr.length; i++) {
  let min = Math.min(...tempArr);
  tempArr = tempArr.filter((item) => item !== min);
  minMaxArr.push(min);
}
minMaxArr.pop();
console.log(minMaxArr);

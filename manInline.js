let a = [3, 331, 47, 490, 5, 78, 65];

let max = a[0];
for (let i = 1; i < a.length; i++) {
  if (max < a[i]) {
    max = a[i];
  }
}
console.log(max);

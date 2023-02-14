// let n = 4;
// for (let k = 1; k <= n; k++) {
//   let num_str = "";
//   for (let j = k; j >= 1; j--) {
//     num_str = num_str + " " + j;
//   }

//   let spaces_str = "";
//   for (let i = 1; i <= n - k; i++) {
//     spaces_str = spaces_str + "..";
//   }
//   num_str = spaces_str + num_str;
//   console.log(num_str);
// }

// let n = 10;
// for (let i = 1; i <= n; i++) {
//   console.log(normalNumber(i));
// }
// function normalNumber(n) {
//   let run = "";
//   for (let i = 1; i <= n; i++) {
//     run += i + " ";
//   }
//   return run;
// }

// let n = 10;
// for (let i = 1; i <= n; i++) {
//   console.log(normalNumber(i));
// }
// function normalNumber(n) {
//   let run = "";
//   for (let i = 1; i <= n; i++) {
//     run += i + " ";
//   }
//   return run;
// }

// let n = 10;
// let str = "";
// for (let i = 10; i >= 1; i--) {
//   str += i + " ";
// }
// console.log(str);
let n = 10;
for (let i = n; i >= 1; i--) {
  let str = "";
  for (let j = i; j >= 1; j--) {
    str += j + " ";
  }
  console.log(str);
}

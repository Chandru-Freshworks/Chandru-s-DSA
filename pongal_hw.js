// Home work 1
// for (let i = 1; i <= 4; i++) {
//   let row = "   ";
//   for (let k = 1; k <= 4 - i; k++) {
// row += "  ";
//   }
//   for (let j = i; j <= 4; j++) {
// row += j + " ";
//   }
//   console.log(row);
// }
// Home Work 2
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += i + " ";
//   }
//   console.log(row);
// }
// for (let i = n - 1; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += i + " ";
//   }
//   console.log(row);
// }

// Home work 3
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += k + " ";
//   }
//   console.log(row);
// }
// for (let i = n - 1; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += k + " ";
//   }
//   console.log(row);
// }
// Home work 4
// let n = 15;
// for (let i = 1; i <= n; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("Superstar Rajnikanth");
//   } else if (i % 3 == 0) {
//     console.log("Superstar");
//   } else if (i % 5 == 0) {
//     console.log("Rajnikanth");
//   } else {
//     console.log(i);
//   }
// }
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   let str = " ".repeat(n - i);
//   let str2 = "*".repeat(i * 2 - 1);
//   console.log(str + str2 + str);
// }

//
let n = 10;
for (let k = 1; k <= n; k++) {
  let num_str = "";
  for (let j = k; j >= 1; j--) {
    num_str = num_str + " " + j;
  }

  let spaces_str = "";
  for (let i = 1; i <= n - k; i++) {
    spaces_str = spaces_str + "..";
  }
  num_str = spaces_str + num_str;
  console.log(num_str);
}

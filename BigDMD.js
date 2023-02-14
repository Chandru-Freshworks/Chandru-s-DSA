// first half diamond function

let n = 3;

for (let i = 1; i <= n; i++) {
  console.log(first(n - i) + firstsequence(i) + firstSecondsequence(i - 1));
}
// second half diamond function
for (let i = 1; i < n; i++) {
  console.log(first(i) + firstsequence(n - i) + firstSecondsequence(n - i - 1));
}
// spaces function
function first(n) {
  let getSpacesFirst = "";
  for (let i = 1; i <= n; i++) {
    getSpacesFirst += "  ";
  }
  return getSpacesFirst;
}
// normal number sequences
function firstsequence(n) {
  let getfirstHalfsequence = "";
  for (let i = 1; i <= n; i++) {
    getfirstHalfsequence += i + " ";
  }
  return getfirstHalfsequence;
}
function firstSecondsequence(n) {
  let getfirstHalfsequence = "";
  for (let i = 1; i <= n; i++) {
    getfirstHalfsequence = i + " " + getfirstHalfsequence;
  }
  return getfirstHalfsequence;
}

// let n = 3;
// let str = "";
// for (let i = n; i >= 1; i--) {
//   str += i + " ";
// }
// console.log(str);

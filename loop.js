//for (let i = 1; i <= 100; i++) {
//  if (i % 2 == 1) {
//    console.log(i + "superstar");
//  } else {
//    console.log(i + "Rajini");
//  }
//}

// for (let i = 1; i <= 7; i++) {
//   let str = " ";
//   for (let j = 0; j < 7; j++) {
//     str += i + " ";
//   }
//   console.log(str);
// }

// let n = 5;
// let str = " ";
// for (let i = 1; i <= n; i++) {
//   str += i + " ";
//   console.log(str);
// }

let n = 3;
// Repeat n times
for (let i = 1; i <= n; i++) {
  //spaces + sequence of numbers
  console.log(getSpaces(n - i + 1) + getNumSequence(i));
}

//console.log( getSpaces(3) + getNumSequence(1));

//console.log( getSpaces(2) + getNumSequence(2));

//console.log( getSpaces(1) + getNumSequence(3));

function getSpaces(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = str + " ";
  }
  return str;
}

function getNumSequence(n) {
  let numseq_str = "";
  for (let i = 1; i <= n; i++) {
    numseq_str = numseq_str + i + " ";
  }
  return numseq_str;
}

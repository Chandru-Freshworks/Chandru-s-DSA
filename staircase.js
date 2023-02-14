let n = 10;
for (i = 1; i <= n - 1; i++) {
  console.log(
    leftNumber(i) + spaces(n - i) + spaces(n - (i + 1)) + rightNumber(i)
  );
}
console.log(lastleft(n) + lastright(n));
function leftNumber(n) {
  let number = "";
  for (let i = 1; i <= n; i++) {
    number += i + " ";
  }
  return number;
}
function spaces(n) {
  let spaces = "";
  for (let i = 1; i <= n; i++) {
    spaces += "  ";
  }
  return spaces;
}
function rightNumber(n) {
  let number = "";
  for (let i = n; i >= 1; i--) {
    number += i + " ";
  }
  return number;
}
function lastleft(n) {
  let lastnum = "";
  for (let i = 1; i <= n; i++) {
    lastnum += i + " ";
  }
  return lastnum;
}
function lastright(n) {
  let lastnum = "";
  for (let i = 1; i <= n - 1; i++) {
    lastnum = i + " " + lastnum;
  }
  return lastnum;
}

function fibs(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  let fibsArr = [0, 1];
  for (let i = 2; i < n; i++) {
    fibsArr.push(fibsArr[i - 1] + fibsArr[i - 2]);
  }
  return fibsArr;
}

function fibsRec(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  return fibsRec(n - 1).concat([fibsRec(n - 1)[n - 2] + fibsRec(n - 2)[n - 3]]);
}

console.log(fibs(8));
console.log(fibsRec(8));

function merge(arr1, arr2, arr) {
  let l1 = arr1.length;
  let l2 = arr2.length;
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < l1 && j < l2) {
    if (arr1[i] < arr2[j]) {
      arr[k] = arr1[i];
      i++;
    } else {
      arr[k] = arr2[j];
      j++;
    }
    k++;
  }
  while (i < l1) {
    arr[k] = arr1[i];
    i++;
    k++;
  }
  while (j < l2) {
    arr[k] = arr2[j];
    j++;
    k++;
  }
}

function mergeSort(arr) {
  const n = arr.length;
  if (n < 2) return;
  let mid = Math.floor(n / 2);
  let leftArr = new Array(mid);
  let rightArr = new Array(n - mid);
  let i;

  for (i = 0; i < mid; i++) {
    leftArr[i] = arr[i];
  }
  for (i = mid; i < n; i++) {
    rightArr[i - mid] = arr[i];
  }
  mergeSort(leftArr);
  mergeSort(rightArr);
  merge(leftArr, rightArr, arr);
}

let arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
let arr2 = [105, 79, 100, 110];
mergeSort(arr1);
mergeSort(arr2);
console.log(arr1);
console.log(arr2);

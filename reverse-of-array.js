//reverse array
const reverseArray = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length / 2; i++) {
    let other = length - i - 1;
    let temp = arr[i];
    arr[i] = arr[other];
    arr[other] = temp;
  }
  return arr;
}

const ar = [52, 35, 89, 10, 55, 0, 7, 3, 9, 4, 0, 5, 8, 9, 3, 'abc', 'te', 98];
console.log(reverseArray(ar));
function bubbleSort(arr) {
  let swapVar = 0;
  let noSwaps = false;
  while (!noSwaps) {
    let swapCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swapVar = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swapVar;
        swapCount++;
      }
    } if (!swapCount) {
      noSwaps = true;
    }
  }
  return arr;
}

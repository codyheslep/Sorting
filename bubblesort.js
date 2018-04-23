function bubbleSort(arr) {
  let noSwaps = false;
  while (!noSwaps) {
    let swapCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let firstVar = arr[i]
        let secondVar = arr[i + 1]
        arr[i] = swap(firstVar, secondVar)[0]
        arr[i + 1] = swap(firstVar, secondVar)[1]
        swapCount++
      }
    } if (!swapCount) {
      noSwaps = true;
    }
  }
  return arr;
}

function swap(valOne, valTwo) {
  console.count();
  let swapVar
  swapVar = valOne
  valOne = valTwo
  valTwo = swapVar
  return [valOne, valTwo]
}


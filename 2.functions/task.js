function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let avg = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    avg = avg + arr[i];
  }
  avg = avg / arr.length;
  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {
  let summ = 0;
  for (i = 0; i < arr.length; i++) {
    summ = summ + arr[i];
  }
  return summ;
}

function differenceMaxMinWorker(...arr) {
  let max = 0;
  let min = 0;
  let diff = 0;
  if (arr.length != 0) {
    max = Math.max(...arr);
    min = Math.min(...arr);
  }
  diff = max - min;
  return diff;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
    }
  }
  difference = sumEvenElement - sumOddElement;
  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let avg = 0;
  let count = 0;
  if (arr.length != 0) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement = sumEvenElement + arr[i];
        count++;
      }
    }
    avg = sumEvenElement / count;
  } else {
    avg = 0;
  }
  return avg;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const currentData = arrOfArr[i];
    const result = func(...currentData);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}

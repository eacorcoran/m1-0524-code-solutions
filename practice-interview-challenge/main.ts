interface rangeInfo {
  average: number;
  evens: number[];
  odds: number[];
  range: number[];
  total: number;
}

function getRangeReport(start: number, end: number): rangeInfo {
  let rangeArray: number[] = [];
  let evenArray: number[] = [];
  let oddArray: number[] = [];
  let totalNum: number = 0;
  let evenCount: number = 0;
  let oddCount: number = 0;
  if (start > end) {
    throw Error('Start must be <= End');
  } else {
    for (let i = 0; i <= end - start; i++) {
      rangeArray[i] = start + i;
      totalNum = totalNum + start + i;
      if (start + i === 0 || (start + i) % 2 === 0) {
        evenArray[evenCount] = start + i;
        evenCount = evenCount + 1;
      } else {
        oddArray[oddCount] = start + i;
        oddCount = oddCount + 1;
      }
    }
  }
  const rangeOutput: rangeInfo = {
    average: totalNum / rangeArray.length,
    evens: evenArray,
    odds: oddArray,
    range: rangeArray,
    total: totalNum,
  };

  return rangeOutput;
}

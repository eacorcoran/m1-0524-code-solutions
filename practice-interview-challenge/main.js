"use strict";
function getRangeReport(start, end) {
    let rangeArray = [];
    let evenArray = [];
    let oddArray = [];
    let totalNum = 0;
    let evenCount = 0;
    let oddCount = 0;
    if (start > end) {
        throw Error('Start must be <= End');
    }
    else {
        for (let i = 0; i <= end - start; i++) {
            rangeArray[i] = start + i;
            totalNum = totalNum + start + i;
            if (start + i === 0 || (start + i) % 2 === 0) {
                evenArray[evenCount] = start + i;
                evenCount = evenCount + 1;
            }
            else {
                oddArray[oddCount] = start + i;
                oddCount = oddCount + 1;
            }
        }
    }
    const rangeOutput = {
        average: totalNum / rangeArray.length,
        evens: evenArray,
        odds: oddArray,
        range: rangeArray,
        total: totalNum,
    };
    return rangeOutput;
}

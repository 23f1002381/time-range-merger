const { mergeTimeRanges } = require('./timeRangeMerger');

// Test Case 1
console.log('Test Case 1:');
const ranges1 = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold1 = 200;
console.log('Input:', JSON.stringify(ranges1));
console.log('Threshold:', threshold1);
console.log('Output:', JSON.stringify(mergeTimeRanges(ranges1, threshold1)));
console.log('Expected:', JSON.stringify([[1000, 2000], [2500, 4100], [8000, 9500]]));
console.log('---');

// Test Case 2
console.log('Test Case 2:');
const ranges2 = [
  [0, 10],
  [15, 20],
  [25, 30]
];
const threshold2 = 4;
console.log('Input:', JSON.stringify(ranges2));
console.log('Threshold:', threshold2);
console.log('Output:', JSON.stringify(mergeTimeRanges(ranges2, threshold2)));
console.log('Expected:', JSON.stringify([[0, 10], [15, 20], [25, 30]]));
console.log('---');

// Test Case 3
console.log('Test Case 3:');
const ranges3 = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
];
const threshold3 = 3;
console.log('Input:', JSON.stringify(ranges3));
console.log('Threshold:', threshold3);
console.log('Output:', JSON.stringify(mergeTimeRanges(ranges3, threshold3)));
console.log('Expected:', JSON.stringify([[0, 35]]));
console.log('---');

// Edge Case: Empty input
console.log('Edge Case: Empty input');
console.log('Input:', '[]');
console.log('Output:', JSON.stringify(mergeTimeRanges([], 100)));
console.log('Expected:', '[]');

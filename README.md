# Time Range Merger

## Assignment Submission
**Name:** Nishant K Y  
**Email:** nishantkumar.sv345@gmail.com  
**GitHub:** [23f1002381](https://github.com/23f1002381)

## Problem Statement
Create a function to merge time ranges that are either overlapping or within a specified threshold.

## Solution
- **File:** `timeRangeMerger.js`
- **Test File:** `test.js`
- **Approach:** Sorts and merges ranges in O(n log n) time
- **Edge Cases Handled:**
  - Empty input
  - Single range
  - Overlapping ranges
  - Unsorted input

## How to Run
```bash
# Install dependencies (if any)
npm install

# Run tests
node test.js
```

## Example Usage
```javascript
const { mergeTimeRanges } = require('./timeRangeMerger');

const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000]
];

const threshold = 200;
console.log(mergeTimeRanges(ranges, threshold));
// Output: [[1000, 2000], [2500, 4100], [8000, 9000]]
```

## Test Cases
Run `node test.js` to verify:
1. Basic merging
2. Edge cases
3. Different threshold values
4. Overlapping and non-overlapping ranges

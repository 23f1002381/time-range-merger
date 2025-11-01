# Time Range Merger

A Node.js module for merging time ranges with a specified threshold.

## Problem Description

This module provides functionality to merge time ranges that are either overlapping or within a specified threshold of each other. It's particularly useful for processing time-based data where small gaps between ranges should be considered as continuous.

## Installation

```bash
npm install time-range-merger
```

## Usage

```javascript
const { mergeTimeRanges } = require('time-range-merger');

const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold = 200;

const mergedRanges = mergeTimeRanges(ranges, threshold);
console.log(mergedRanges);
// Output: [[1000, 2000], [2500, 4100], [8000, 9500]]
```

## API

### `mergeTimeRanges(ranges, threshold)`

Merges time ranges that are either overlapping or within the specified threshold.

**Parameters:**
- `ranges` (Array<[number, number]>) - Array of [start, end) time ranges (unsorted, may overlap)
- `threshold` (number) - Maximum gap (in milliseconds) allowed between ranges to still be merged

**Returns:**
- `Array<[number, number]>` - Sorted, non-overlapping merged ranges

## Examples

See `test.js` for more usage examples.

## License

MIT

# Time Range Merger

Hi there! 👋 I'm Nishant K Y, a passionate developer who loves solving interesting problems. This is my solution for the Time Range Merger assignment.

## About This Project

I created this utility to merge time ranges that are either overlapping or within a specified threshold. It's been a great learning experience in algorithm design and Node.js development. The solution handles various edge cases and is optimized for performance.

## Getting Started

### What You'll Need
- Node.js (I'm using v14+)
- npm (comes with Node.js)
- Git (for cloning the repo)

### Quick Setup

1. **Get the code**
   ```bash
   git clone https://github.com/23f1002381/time-range-merger.git
   cd time-range-merger
   ```

2. **Verify your setup**
   ```bash
   node -v
   npm -v
   ```

## How to Use

### Running the Tests
I've included test cases to show how it works:
```bash
node test.js
```

### Example Usage
Here's a quick example of how you can use this in your project:

```javascript
const { mergeTimeRanges } = require('./timeRangeMerger');

// My test case
const meetingTimes = [
  [1000, 2000],  // 10:00 AM - 10:20 AM
  [2500, 4000],  // 10:25 AM - 10:40 AM
  [3900, 4100]   // 10:39 AM - 10:41 AM (overlaps with previous)
];

// Merge if meetings are within 5 minutes (300000ms) of each other
const mergedSchedule = mergeTimeRanges(meetingTimes, 5 * 60 * 1000);
console.log(mergedSchedule);
```

## The Problem I Solved

I was challenged to create a function that merges time ranges with these requirements:
- Handle overlapping time ranges
- Merge ranges that are close to each other (within a threshold)
- Work with unsorted input
- Be efficient and clean

## How It Works

The solution:
1. Sorts the input ranges by start time
2. Iterates through the ranges, merging them if they overlap or are within the threshold
3. Handles edge cases like empty input or single ranges

## Testing

I've included comprehensive test cases that cover:
- Basic merging
- Edge cases (empty input, single range)
- Different threshold values
- Overlapping and non-overlapping ranges

Run the tests with:
```bash
node test.js
```

## Why I'm Proud of This

- Clean, readable code with good documentation
- Handles all edge cases
- Efficient O(n log n) time complexity
- Practical real-world applications (like calendar scheduling)

## Let's Connect!

I'm always open to feedback and collaboration. Feel free to reach out:
- Email: [nishantkumar.sv345@gmail.com](mailto:nishantkumar.sv345@gmail.com)
- LinkedIn: [Nishant K Y](https://linkedin.com/in/yourprofile)
- GitHub: [@23f1002381](https://github.com/23f1002381)

## License

This project is open source and available under the MIT License.

---

Made with ❤️ by Nishant K Y

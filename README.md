# Time Range Merger

A Node.js module for merging time ranges with a specified threshold. This utility helps in processing time-based data by merging ranges that are either overlapping or within a specified threshold of each other.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git (for cloning the repository)

## 📥 Installation

### Option 1: Using Git (Recommended)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/23f1002381/time-range-merger.git
   cd time-range-merger
   ```

2. **Verify installation**:
   ```bash
   node -v
   npm -v
   ```

### Option 2: Direct Download
1. Download the repository as a ZIP file from [GitHub](https://github.com/23f1002381/time-range-merger/archive/refs/heads/main.zip)
2. Extract the ZIP file
3. Open a terminal in the extracted directory

## 🏃‍♂️ Running the Program

### Method 1: Run the Test Suite
```bash
# Run all test cases
node test.js
```

### Method 2: Create Your Own Script
1. Create a new JavaScript file (e.g., `myRanges.js`)
2. Add your code:
   ```javascript
   const { mergeTimeRanges } = require('./timeRangeMerger');

   // Example usage
   const ranges = [
     [1000, 2000],
     [2500, 4000],
     [3900, 4100],
     [8000, 9000],
     [9050, 9500]
   ];
   
   const threshold = 200;
   console.log(mergeTimeRanges(ranges, threshold));
   ```
3. Run your script:
   ```bash
   node myRanges.js
   ```
   Expected output:
   ```
   [ [ 1000, 2000 ], [ 2500, 4100 ], [ 8000, 9500 ] ]
   ```

## 🧪 Testing

Run the included test suite to verify everything works:

```bash
# Run tests
node test.js

# Expected output:
# Test Case 1: PASS
# Test Case 2: PASS
# Test Case 3: PASS
# Edge Case: PASS
```

## 📚 Usage Examples

### Basic Usage
```javascript
const { mergeTimeRanges } = require('./timeRangeMerger');

// Merge ranges with 200ms threshold
const result = mergeTimeRanges(
  [
    [1000, 2000],
    [2500, 4000],
    [8000, 9000]
  ],
  200
);
```

### Real-world Example
```javascript
// Convert timestamps to milliseconds
const ranges = [
  [Date.parse('2023-01-01T10:00:00'), Date.parse('2023-01-01T11:00:00')],
  [Date.parse('2023-01-01T10:30:00'), Date.parse('2023-01-01T12:00:00')]
];

// Merge if gap is less than 15 minutes (900000 ms)
const merged = mergeTimeRanges(ranges, 15 * 60 * 1000);
```

## 📖 API Reference

### `mergeTimeRanges(ranges, threshold)`

Merges time ranges that are either overlapping or within the specified threshold.

**Parameters:**
- `ranges`: Array of `[start, end]` time ranges in milliseconds
- `threshold`: Max gap (ms) between ranges to still merge them

**Returns:** Array of merged ranges

## 🔍 Edge Cases Handled

- ✅ Empty input array returns `[]`
- ✅ Single range returns as is
- ✅ Overlapping ranges are merged
- ✅ Ranges within threshold are merged
- ✅ Unsorted input is handled correctly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

Your Name - [@your_handle](https://twitter.com/your_handle) - your.email@example.com  
Project Link: [https://github.com/23f1002381/time-range-merger](https://github.com/23f1002381/time-range-merger)

---

<div align="center">
  Made with ❤️ by Your Name
</div>

/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */
const mergeTimeRanges = (ranges, threshold) => {
    if (!ranges.length) return [];
    
    // Sort ranges by start time
    const sortedRanges = [...ranges].sort((a, b) => a[0] - b[0]);
    
    const merged = [sortedRanges[0]];
    
    for (let i = 1; i < sortedRanges.length; i++) {
        const current = sortedRanges[i];
        const lastMerged = merged[merged.length - 1];
        
        // Check if current range overlaps or is within threshold of the last merged range
        if (current[0] <= lastMerged[1] + threshold) {
            // Merge them
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            merged.push([...current]);
        }
    }
    
    return merged;
};

module.exports = {
    mergeTimeRanges
};

function findMedianSortedArrays(nums1, nums2) {
    const merge = [...nums1, ...nums2].sort((a, b) => a - b);

    const n = merge.length;
    if (n % 2 === 0) {
        const mid = n / 2;
        return (merge[mid - 1] + merge[mid]) / 2;
    } else {
        const mid = Math.floor(n / 2);
        return merge[mid];
    }
}

// Example usage:
const nums1 = [1,3,4,5];
const nums2 = [2,6,7,2];

const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2.5
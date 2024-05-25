function rotateLeft(arr, k) {
    k = k % arr.length; // Ensure k is within the array length

    if (k < 0) {
        k = arr.length + k; // Convert negative k to a positive equivalent
    }

    const rotatedArray = [];
    for (let i = 0; i < arr.length; i++) {
        const newIndex = (i - k + arr.length) % arr.length;
        rotatedArray[newIndex] = arr[i];
    }

    return rotatedArray;
}

const originalArray = [1, 2, 3, 4, 5];
const k = 2; // Rotate by 2 positions to the left

const rotatedArray = rotateLeft(originalArray, k);
console.log(rotatedArray); // Output: [3, 4, 5, 1, 2]
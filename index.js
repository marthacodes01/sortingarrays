function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        // Shift elements of arr[0..i-1] that are greater than current
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift the larger element to the right
            j--; // Move to the previous element
        }
        arr[j + 1] = current; // Insert the current element at its correct position
    }
    return arr; // Return the sorted array
}

// Example usage with another array
const array4 = [20, 15, 40, 10, 30, 5];
console.log("Sorted array:", insertionSort(array4));

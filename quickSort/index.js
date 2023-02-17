//O(n log n)
function quickSort(array) {
   if (array.length <= 1) {
       return array;
   }
   const pivot = array[array.length - 1];
   const leftArray = array.filter(value=>value<pivot)
   const rightArray = array.filter(value=>value>pivot)
   return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}
console.time('TIME')
console.log(quickSort([1,3,2,5]));
console.timeEnd('TIME')

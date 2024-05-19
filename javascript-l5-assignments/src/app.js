const buildArrayB = (array) => {
    const max = Math.max(...array);
    return array.map(x => x * max);
}

// min to max
const insertionSort = (array) => {
    for(let i = 1; i < array.length; i++){
        let sorted = i - 1;

        //                       <    -> ascending
        //                       >   -> descending
        while (array[sorted + 1] < array[sorted] && sorted >= 0){
            [array[sorted + 1], array[sorted]] = [array[sorted], array[sorted + 1]];

            sorted--;
        }
    }
}
// User Input ========================================================================
const initialArray = [5, 4, 3, 2, 1, 10];
// ===================================================================================

const arrayB = buildArrayB(initialArray);

console.log(`initial array: ${initialArray.toString()}`);
console.log(`array B: ${arrayB.toString()}`);

console.log("sorting array B");
insertionSort(arrayB);
console.log(`array B: ${arrayB.toString()}`);
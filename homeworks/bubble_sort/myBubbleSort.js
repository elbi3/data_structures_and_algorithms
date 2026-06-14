let arr = [8,1,3,10,5,2,9];

export default function myBubbleSort(arr){
    // - the outer loop controls how many passes are made
    for(let i = 0; i < arr.length - 1; i++){
        //how do we adjust length since we don't need to check the "tail":
        let swapped = false;
        // - there are typically two nested loops
        // - the inner loop does the adjacent comparisons and swaps
        for(let j = 0; j < arr.length - 1 - i; j++){ //optimization "arr.length -1 -i"
            if(arr[j] > arr[j + 1]){
                let placeholder = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = placeholder;
                swapped = true;
            }
        }
    }
    return arr;
};

myBubbleSort(arr);
console.log(arr);
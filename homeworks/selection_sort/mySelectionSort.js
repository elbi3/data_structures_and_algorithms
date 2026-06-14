let arr = [8,1,3,10,5,2,9];

export default function mySelectionSort(arr){
    for(let i = 0; i < arr.length -1; i++){
        let minimum  = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minimum]){
                minimum = j;
            }
        };
        let placeholder = arr[i];
        arr[i] = arr[minimum];
        arr[minimum] = placeholder;
    }
    return arr;
};

mySelectionSort(arr);
console.log(arr);
let arr = [8,1,3,10,5,2,9];

export default function myInsertionSort(arr){
    for(let i = 1; i <= arr.length - 1; i++){ //boundary loop
        let placeMe = arr[i];
        let j = i - 1;
        //shift elements greater than count to the right
        while(j >= 0 && arr[j] > placeMe) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = placeMe;
    }
    console.log("arr: ", arr);
    return arr;
};

myInsertionSort(arr);
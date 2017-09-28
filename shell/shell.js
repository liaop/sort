function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while (gap < len/3) {
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}

var arr = new Array(7,53,24,45,21,5,78,43,4,25,43);
var rt = shellSort(arr);

console.log(rt);
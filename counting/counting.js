function countingSort(arr, maxValue) {
    var bucket = new Array(maxValue+1),
        sortedIndex = 0;
        arrLen = arr.length,
        bucketLen = maxValue + 1;
    for (var i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    for (var j = 0; j < bucketLen; j++) {
        while(bucket[j] > 0) {
          arr[sortedIndex++] = j;
          bucket[j]--;
      }
  }
  return arr;
}

var arr = new Array(7,53,24,45,21,5,78,43,4,25,43);
var rt = countingSort(arr, Math.max(...arr));

console.log(rt);

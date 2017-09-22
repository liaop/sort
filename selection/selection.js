function selectionSort(arr) {
	var len = arr.length;
	var minIndex, temp;
	for (var i = 0; i < len - 1; i++) {
		minIndex = i;
		for (var j = i+1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}

var arr = new Array(7,53,24,45,21,5,78,43,4,25,43);

var rt = selectionSort(arr);

console.log(rt);
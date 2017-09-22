function bubbleSort(arr) {
	var len = arr.length;
	for(var i = 0; i < len - 1; i++) {
		for(var j = 0; j < len - 1 - i; j++) {
			if(arr[j] > arr[j+1]) {
				var temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

var arr = new Array(7,53,24,45,21,5,78,43);

var rt = bubbleSort(arr);

console.log(rt);
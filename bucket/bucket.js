function insertionSort(arr) {
	var len = arr.length;
	var preIndex, current;
	for (var i = 1; i < len; i++) {
		preIndex = i - 1;
		current = arr[i];
		while (preIndex >= 0 && arr[preIndex] > current) {
			arr[preIndex + 1] = arr[preIndex];
			preIndex--;
		}
		arr[preIndex + 1] = current;
	}
	return arr;
}

function bucketSort(arr, bucketSize) {
	if (arr.length === 0) {
		return arr;
	}

	var i;
	var minValue = arr[0];
	var maxValue = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < minValue) {
			minValue = arr[i];
		} else if(arr[i] > maxValue) {
			maxValue = arr[i];
		}
	}

	var DEFAULT_BUCKET_SIZE = 5;
	bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
	var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
	var buckets = new Array(bucketCount);
	for (var i = 0; i < buckets.length; i++) {
		buckets[i] = [];
	}

	for (var i = 0; i < arr.length; i++) {
		buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
	}

	arr.length = 0;
	for (var i = 0; i < buckets.length; i++) {
		 insertionSort(buckets[i]);
		 for (var j = 0; j < buckets[i].length; j++) {
		 	arr.push(buckets[i][j]);
		}
	}
	return arr
}

var arr = new Array(7,53,24,45,21,5,78,43,4,25,43);
var rt = bucketSort(arr);

console.log(rt);
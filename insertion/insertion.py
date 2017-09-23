def insertionSort(arr):
	for i in range(len(arr)):
		preIndex = i - 1
		current = arr[i]
		while preIndex >= 0 and arr[preIndex] > current:
			arr[preIndex + 1] = arr[preIndex]
			preIndex -= 1
		arr[preIndex + 1] = current
	return arr

arr = [7,53,24,45,21,5,78,43,4,25,43]
rt = insertionSort(arr)

print(rt)
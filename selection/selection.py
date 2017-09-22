def selectionSort(arr):
	for i in range(len(arr) - 1):
		for j in range(i + 1, len(arr)):
			if arr[j] < arr[i]:
				arr[i], arr[j] = arr[j], arr[i]
	return arr

arr = [7,53,24,45,21,5,78,43,4,25,43]
rt = selectionSort(arr)

print(rt)
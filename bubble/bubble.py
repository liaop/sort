def bubbleSort(arr):
	for i in range(1,len(arr)):
		for j in range(0,len(arr) - i):
			if arr[j] > arr[j + 1]:
				arr[j], arr[j + 1] = arr[j + 1], arr[j]
	return arr

arr = [7,53,24,45,21,5,78,43]

rt = bubbleSort(arr)

print(rt)
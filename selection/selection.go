package main

func main() {
	var arr = []int{7,53,24,45,21,5,78,43,4,25,43}
	selectionSort(arr)
	for i := 0; i < len(arr); i++ {
		println(arr[i])
	}
}

func selectionSort(arr []int) []int {
	length := len(arr)
	for i := 0; i < length - 1; i++ {
		min := i
		for j := i + 1; j < length; j++ {
			if arr[min] > arr[j] {
				min = j
			}
		}
		arr[i], arr[min] = arr[min], arr[i]
	}
	return arr
}
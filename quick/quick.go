package main
import "fmt"

func main() {
	var arr = []int{7,53,24,45,21,5,78,43,4,25,43}
	quickSort(arr)
	fmt.Println(arr)
}

func quickSort(arr []int) []int {
	return _quickSort(arr, 0, len(arr) - 1)
}

func _quickSort(arr []int, left, right int) []int {
	if left < right {
		partitionIndex := partition(arr, left, right)
		_quickSort(arr, left, partitionIndex - 1)
		_quickSort(arr, partitionIndex + 1, right)
	}
	return arr
}

func partition(arr []int, left, right int) int {
	pivot := left
	index := pivot + 1

	for i := index; i <= right; i++ {
		if arr[i] < arr[pivot] {
			swap(arr, i, index)
			index += 1
		}
	}
	swap(arr, pivot, index -1)
	return index - 1
}

func swap(arr []int, i,j int) {
	arr[i], arr[j] = arr[j], arr[i]
}
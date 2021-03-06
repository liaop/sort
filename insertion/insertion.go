package main
import "fmt"

func main() {
	var arr = []int{7,53,24,45,21,5,78,43,4,25,43}
	insertionSort(arr)
	fmt.Println(arr)
}

func insertionSort(arr []int) []int {
	for i := range arr {
		preIndex := i - 1
		current := arr[i]
		for preIndex >= 0 && arr[preIndex] > current {
			arr[preIndex + 1] = arr[preIndex]
			preIndex -= 1
		}
		arr[preIndex + 1] = current
	}
	return arr
}
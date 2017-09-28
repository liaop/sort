package main
import "fmt"

func main() {
	var arr = []int{7,53,24,45,21,5,78,43,4,25,43}
	arr = mergeSort(arr)
	fmt.Println(arr)
}

func mergeSort(arr []int) []int {
	lenght := len(arr)
	if lenght < 2 {
		return arr
	}
	middle := lenght / 2
	left := arr[0:middle]
	right := arr[middle:]
	return merge(mergeSort(left), mergeSort(right))
}

func merge(left []int, right []int) []int {
	var result []int
	for len(left) != 0 && len(right) != 0 {
		if left[0] <= right[0] {
			result = append(result, left[0])
			left = left[1:]
		} else {
			result = append(result, right[0])
			right = right[1:]
		}
	}

	for len(left) != 0{
		result = append(result, left[0])
		left = left[1:]
	}

	for len(right) != 0 {
		result = append(result, right[0])
		right = right[1:]
	}
	return result
}
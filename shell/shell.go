package main
import "fmt"

func main() {
	var arr = []int{7,53,24,45,21,5,78,43,4,25,43}
	shellsort(arr)
	fmt.Println(arr)
}

func shellsort(arr []int) []int {
	length := len(arr)
	gap := 1
	for gap < gap/3 {
		gap = gap * 3 + 1
	}
	for gap > 0 {
		for i := gap; i < length; i++ {
			temp := arr[i]
			j := i - gap
			for j >= 0 && arr[j] > temp {
				arr[j + gap] = arr[j]
				j -= gap
			}
			arr[j + gap] = temp
		}
		gap = gap / 3
	}
	return arr
}
package main
import "fmt"

func main() {
	var arr = []int{7, 53, 24, 45, 21, 5, 78, 43}
	bubbleSort(arr)
    fmt.Println(arr)
}

func bubbleSort(arr []int) []int {
    length := len(arr)
    for i := 0; i < length; i++ {
        for j := 0; j < length-1-i; j++ {
            if arr[j] > arr[j+1] {
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
    return arr
}
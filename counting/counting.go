package main
import (
  "fmt"
  "math"
)

func main()  {
  arr := []int{7,53,24,45,21,5,78,43,4,25,43}
  max := 0

  for _, n := range arr {
    max = int(math.Max(float64(max), float64(n)))
  }
  countingSort(arr, max)
  fmt.Println(arr)
}

func countingSort(arr []int, maxValue int) []int {
  bucketLen := maxValue + 1
  bucket := make([]int, bucketLen)

  sortedIndex := 0
  length := len(arr)

  for i := 0;i < length;i++ {
    bucket[arr[i]] += 1
  }

  for j := 0;j < bucketLen;j++ {
    for bucket[j] > 0 {
      arr[sortedIndex] = j
      sortedIndex += 1
      bucket[j] -= 1
    }
  }
  return arr
}

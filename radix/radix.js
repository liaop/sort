var counter = [];
function radixSort(arr, maxDigit) {
  var mod = 10;
  var dev = 1;
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) /dev);
      if (counter[bucket] == null) {
        counter[bucket] = []
      }
      counter[bucket].push(arr[j]);
    }

    var pos = 0;
    for (var j = 0; j < counter.length; j++) {
      var value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
  return arr;
}

var arr = new Array(7,53,24,13,34,64,145,21,5,77,96,88,43,4,25,43);
var maxDigit = Math.max(...arr).toString().length;
var rt = radixSort(arr, maxDigit);

console.log(rt);

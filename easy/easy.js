var arr = [1, 5, 10, 37]

var totalSum = 0;
for ( var i in arr){
    totalSum+= arr[i];
}
var arrTotal = arr.length

var average = totalSum / arrTotal;

console.log(average)
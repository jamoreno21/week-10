function findTarget(arr,target){
    return arr.indexOf(target)
}

var arr1 = [ 4, 5, 6, 7, 0, 1, 2]
var t1 = 0;
var arr2 = [ 4, 5, 6, 7, 0, 1, 2, 3]
var t2 = 3;

console.log(findTarget(arr1,t1));
console.log(findTarget(arr2,t2))
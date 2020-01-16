function doesContain(arr, number){
    var lastIndex = arr.length-1;
    var startingIndex = 0;
    while(startingIndex <= lastIndex){
        middleIndex = Math.floor(lastIndex - (lastIndex - startingIndex) / 2);
        console.log("Middle: " + middleIndex + " Left: " + startingIndex + " Right: " + lastIndex);
        if(arr[middleIndex] == number){
            return true;
        }else if(arr[middleIndex] > number){
            lastIndex = middleIndex - 1;
        }else{
            startingIndex = middleIndex + 1;
        }
    }
    return false;
}

var array = [];
for(var i=0; i<200; i++){
    array.push(i);
}

console.log(doesContain(array, 100));
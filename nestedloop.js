// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
 
var num = 10
for(var i = 1; i <= num; i++){
    var result = '';
    for(var j = 1; j <= i; j++){
        result = result + j + " "
    }
    console.log(result)
}

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

var sum = 5;
for(var i = 1; i <= sum; i++){
    var total = ''
    for(var j = 1; j <= sum; j++){
        total = total + '* '
    }
    console.log(total)
}
// for(var i = 0; i < 100000; i++){
//     console.log((i + 1) + " Alhamdulillah ");
// }

// for(var i = 0; i < 10; i++){
//     if(i % 2 == 1){
//         console.log(i);
//     }
// }

// for(var i = 0; i < 10; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// var sum = 0;
// for(var i = 0; i < 10; i++){
//     console.log(sum + " + " + i + " = " + (sum + i))
//     sum += i
// }
// console.log(sum);

var num = 0;
for(var i = 0; i < 100; i++){
    if(i % 2 == 1){
        console.log(num + ' + ' + i + ' = ' + (num + i));
        num += i
    }
}
console.log(num);
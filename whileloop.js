// var i = 0;
// while(i < 10){
//     console.log('Alhamdulillah');
//     i++
// }

var isRunning = true;

while(isRunning){
    var rand = Math.floor(Math.random() * 10 +1);
        if(rand == 9){
            console.log("winner winner chicken dinner");
            isRunning = false;
        }
        else{
            console.log("You have go " + rand)
    }
}
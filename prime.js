const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function Check_Prime(n1){
    var check = true;
    if(n1==1){
        check = false;
    }else if (n1==2){
        check = false;
    }else if(n1>2){
        for(let i=2; i<n1; i++){
            if(n1%i==0){
                check = false;
                break;
            }
        }
    }
    return check;
    
}


rl.question("Enter Number: ", function(Num) {
    var recheck = Check_Prime(Num);
    if(recheck== true)
    {
        console.log("Number is prime number");
    }
    else{
        console.log("Number is  not prime number");
    }
    rl.close();
});
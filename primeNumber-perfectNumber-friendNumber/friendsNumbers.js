let remaining1, remaining2
let sumPositiveDivisor1=0, sumPositiveDivisor2=0
function friendsNumbers(number1,number2){
    for(let i=1; i<number1; i++){
        remaining1=number1%i
        if(remaining1==0){sumPositiveDivisor1=sumPositiveDivisor1+i}
    }
    for(let x=1; x<number2; x++){
        remaining2=number2%x
        if(remaining2==0){sumPositiveDivisor2=sumPositiveDivisor2+x}
    }
    if(sumPositiveDivisor1==number2 && sumPositiveDivisor2==number1){
        console.log("Friends numbers!")
    }
    else(console.log("These are not friends numbers!"))
    // console.log(sumPositiveDivisor1)
    // console.log(sumPositiveDivisor2)
}
friendsNumbers(10,20)
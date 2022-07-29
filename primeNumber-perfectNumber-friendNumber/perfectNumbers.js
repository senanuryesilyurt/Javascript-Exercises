let remaining
function perfectNumber() {
    for(let number=2; number<1000; number++){
      let sumPositiveDivisor=0
       for(let i=1; i<number; i++){
            remaining=number%i
            if(remaining==0){sumPositiveDivisor=sumPositiveDivisor+i}
       }
       if(sumPositiveDivisor==number){console.log(number)}
    }
}
perfectNumber()
let remaining
function primeNumbers() {
    for(let number=2; number<100; number++){
        if(number==2){
            console.log(number)
            continue
        }
        for(let i=2; i<number; i++ ){
           remaining=number%i
           if(remaining==0){
             //  console.log(number + " is not prime number!")
               break
           }
        }
        if(remaining!=0){console.log(number)} //number is prime
    }   
}
primeNumbers()
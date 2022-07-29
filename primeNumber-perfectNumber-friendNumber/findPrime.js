let prime; //Asal ise 1 asal değil ise 0
function findPrime(...numbers){
    let array = [2,3,4,5,7,11,13]
   
    for(let i=0; i<numbers.length; i++){
        for(let a=0; a<array.length; a++){
            if(numbers!=0){
                let remaining=numbers%array[a]
                if(remaining==0){
                    if(numbers==array[a]){prime=1}
                    else{
                        prime=0
                      //  console.log(numbers + " is not prime.")
                        break;
                    }                 
                }
                else{prime=1}
                if(numbers==1){
                    prime=0
                }
            }
        }
        if(prime==1){console.log(numbers + " number is prime.")}
        else{console.log(numbers + " is not prime.")}
    }
   
}
findPrime(11,22)

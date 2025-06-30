let num = 11

is_prime = true

for(i = 2; i < num; i ++){

    if(num%i == 0){

        is_prime = false

        break
    }
}

if (is_prime == true){

    console.log("prime number")
}
else{

    console.log("not a prime number")
}
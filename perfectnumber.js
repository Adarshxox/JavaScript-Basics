// number = 6  1,2,3    // factors of given number (excluding itself)

let num = 6

let total = 0

for(let i = 1; i < num; i++){

    if(num % i == 0){

        total = total + i
    }
}
if(total == num){

    console.log("perfect number")
}
else{

    console.log("not a perfect number")
}
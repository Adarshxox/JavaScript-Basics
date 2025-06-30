// a positive integer that is divisible by the sum of its digits

let num = 18 // sum of digits = 1 + 8 = 9    //  num % 9 == 0  // harshad

let str = num.toString()

let sum = 0

for(i = 0;i < str.length; i++){

    sum = sum+ parseInt(str[i])
}

console.log(num % sum ==0?"Harshad":"not harshad")

// if(num% sum == 0){

//     console.log("is Harshad Number")
// }
// else{

//     console.log("not harshad number")
// }
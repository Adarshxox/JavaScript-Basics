// 1531  //  length = 3  //  1^4 + 5^4 + 3^4 + 1^4 == 1531

// let num = 153

// let temp = num

// length = num.toString().length

// let sum = 0

// // console.log(length)

// // Using While Loop

// while(num>0){

//     let digit = num % 10

//     sum = sum + Math.pow(digit , length)

//     num = Math.floor(num/10)
// }

// console.log(sum)

// if(sum == temp){

//     console.log("its a armstrong")
// }
// else{

//     console.log("not a armstrong")
// }

// FOR LOOP

let num = 153

let str = num.toString()

length = str.length

let sum = 0

for(let i = 0; i < length; i++){

    sum = sum + Math.pow(parseInt(str[i]),length)
}

console.log(sum == num?"Armstrong":"Not Armstrong")

// if(sum == num){

//     console.log("its an Armstrong Number")
// }
// else{

//     console.log("not an Armstrong Number")
// }
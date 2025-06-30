let num = 367925     // op = 9

let max = 0

str = num.toString()   // "367925"

for (let i = 0; i < str.length; i++){

    if(parseInt(str[i]) % 2 != 0 && str[i] > max){

        max = str[i]
    }
}

console.log(max)
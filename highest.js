// highest digit

let number = 23456

let max = 0

let a = number.toString()

console.log(typeof(Number(a)))

for (let i = 0; i<a.length;i++){

    if(Number(a[i]) > max){

        max = Number(a[i])
    }
}

console.log(max)
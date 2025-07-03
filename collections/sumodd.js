// let names = [1,4,3,5,7,3]

// sum of odd numbers


let names = [1,4,3,5,7,3]

let sumodd = 0

let sumeven = 0

for(i of names){

    // if(i % 2 !=0 ){

    //     sumodd += i
    // }
    // else{

    //     sumeven += i
    // }

    i % 2 != 0?sumodd+=i:sumeven+=i
}

console.log(sumodd)

console.log(sumeven)
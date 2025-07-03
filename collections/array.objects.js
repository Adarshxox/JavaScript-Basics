// const details = [
//     {"name":"arun","age":20},
//     {"name":"kiran","age":24},
//     {"name":"ajay","age":22},
// ]
//  print all names arun , kiran, ajay

// for(let i of details){

//     console.log(i.name)
// }

// print the name with highest age

// let max = details[0]

// for (let i of details){

//     if(i.age > max.age){

//         max = i
//     }
// }

// console.log(max.name)

// student with longest name

const details = [
    {"name":"arun","age":20},
    {"name":"kiran","age":24},
    {"name":"ajay","age":22},
]

let maxlen = details[0]

for (let i of details){

    if(i.name.length > maxlen.name.length){

        maxlen = i
    }
}

console.log(maxlen.name)
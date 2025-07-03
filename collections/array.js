// arrays >>> list ordered , index , duplicates []

// object >>>  un-ordered, key-value pair, key are always string, values allows duplicate

// {"course1":"python","course2":"python"}

// ["a","b","c","d"]

let names = [1,2,3,4,5,6]

let sum = 0

for(let i = 0; i < names.length; i++){

    sum = sum + names[i]
}

console.log(sum)

// indexed   >>>>  value

//  for of

let name = [1,2,3,4,5,6]

let total = 0

for(i of name){

    total = total + i
}

console.log(total)
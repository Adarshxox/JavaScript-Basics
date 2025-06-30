// wap to count the number of vowels in th given string

let name = "javascript"

let count = 0

let vowels = "aeiou"

for(let i = 0; i<name.length; i ++){

    if(vowels.includes(name[i])){

        count++
    }
}

console.log("the total number of vowels is",count)




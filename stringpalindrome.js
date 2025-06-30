let name = "hello"    // olleh

let current = ""

for(let i = 0; i < name.length; i++){

    current = name[i] + current          //  "h"           //  "e" + "h"
}

console.log(current)

if(current == name){

    console.log("its a palindrome")
}
else{

    console.log("not a palindrome")
}
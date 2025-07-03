// push , pop , shift , unshift , reverse

// push     >>>  to add an element at the end of the array

// pop      >>>  remove last element from the array and return it

// shift    >>>  removes first element from array and return it

// unshift  >>>  elements to insert at the start of the array

// resverse >>>  Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

// set

// map


// const arr = [1,0,3,0,5,2,5,6,0,0]

// let total_count_odd = 0

// let total_count_even = 0

// for(let i of arr){

//     if(i %2 != 0){

//         total_count_odd += 1
//     }
//     else{

//         total_count_even += 1
//     }
// }

// console.log(total_count_odd)

// console.log(total_count_even)


// const unique = []

// for(let i of arr){

//     if(i != 0){

//         unique.push(i)
//     }
// }

// console.log(unique)

// OBJECT
// ======

// key value pair
// key should be in string

// const student ={
//     "name":"john",
//     "place":"kochi"
// }

// console.log(student)         // entire objects
// console.log(student.place)   // accessing a specific key

// student.course = "python"    // adding new key

// console.log(student)

// const Employee = {
//                     "name":"jack",
//                     "job":{"department":"IT",
//                             "location":"banaglore"
//                         }
//                 }

// console.log(Employee.job.location)

// function sample(){

//     console.log("hello")
// }
// console.log(sample())

const Employee = {
                    "name":"jack",
                    "age":24,
                    "greet":function(){

                        console.log("hello" +" "+ this.name)
                    }
                }
Employee.greet()
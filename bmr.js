// For males, it's:
// BMR =(10* weight in kg)+(6.25* height in cm) - (5* age in years) + 5
// For Females, it's:
// BMR =(10* weight in kg)+(6.25* height in cm) - (5* age in years) + 161

let weight = 50
let height = 160
let age = 20
let gender = "male";

let bmr;

if (gender == "male"){

    bmr = (10* weight)+(6.25* height) - (5* age) + 5
}
else if(gender =="female"){

    bmr = (10* weight)+(6.25* height) - (5* age) + 161
}
else{
    console.log("error")
}

console.log(bmr)
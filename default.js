// How to use default value in the function

function add(num1, num2 = 5) {
    return num1 + num2;
}

let total = add(25, 10)
console.log(total)

// if somehow forget to give the num2 value

let forget = add(25)

console.log(forget)//30 === It will take the default value which is given.
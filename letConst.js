// use of const

const name = "Md.Rahmatuzzaman";// we are assigning it with the const
console.log(name)// Md.Rahmatuzzman;

// But if we try to reassign with something else it will show some error.


// We are going to assign an Array with const

const arr = [12, 44];

arr[1] = 55; // we can change the value of the array
console.log(arr);

arr.push(10) // we can push something as well in the array

// But we can't change the whole variable with something else 


// ************ The use of  "Let" *****************//

// when we have to reAssign something we are usually use the "let" keyword

let patient = "Jon";

patient = " Mark"

// "let" is also known as the scope variable. we can use the "let" inside a scope and we can't access the variable from the outside;
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(sum)
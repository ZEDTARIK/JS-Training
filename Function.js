/* 
    Function Declaration
    is Hoisted function
*/
let y = declarationFunction(5,20);
function declarationFunction(a,b) {
    return a+b;
}
console.info("Function Declaration =>",y ); // 25 


/* 
    function expression :
    can be assigned
    can be invoked by using the variable
    Not Hoisted
*/
const sum = function(a,b) {
    return a+b;
}

let x = sum(10,60)
console.log(`Function Expression =>  ${x}`); // console output 70 


/*
    Arrow Function
    it's same function expression 
    elimintation keyword function 
    As not hoisted
*/

const p = (a,b) => a+b; // one ligne variable
let result = p(10, 500);
console.log(`Arrow Function => ${result}`); // console output 510

/* 
    Function Immdiatly invoked 
*/

(function  printDate() {
    let currentDate = new Date().toLocaleString();
    document.getElementsByTagName('body')[0].innerHTML= currentDate;    
})();


/*
    Defaults Parameters
*/

function calculate(a= 0, b=0) {
    return a+b;
}
let sum1 = console.log(calculate()); // 0 
let sum2= console.log(calculate(2)); // 2 
let sum3= console.log(calculate(2, 3)); // 5

// using Rest Parameters

function calculateSum(...numbers) {
    let sum =0;
    numbers.forEach((n) => sum +=n);
    return sum;
}

console.log("------------------");
console.log(calculateSum(1)); // 1 
console.log(calculateSum(1,3)); // 4 
console.log(calculateSum(1,3,10)); // 14
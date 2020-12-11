// Block Scope 
function learningScope(num1,num2) {
    let equal=num1+num2
    return equal
}
// console.log(equal); {equal call kora jabe nah ,karon ata baire call kora hoy ni ,ata block scope}
console.log(learningScope(5,6));

// Global Scope

const globalScope=20
function adding(number1,number2) {
    const result=number1+number2+globalScope
    return result
    
}
console.log(globalScope);
console.log(adding(5,5));

// Using Var not let/const , can call from anywhere



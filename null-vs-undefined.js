// Different ways to get Undefined

let name
console.log(name);

function add(num1,num2) {
    console.log(num1+num2);
    
}
const result=add(4,4)
console.log(result);

function name1(fullname) {
    fullname='Thyive Hayder'
    return
}
console.log(name1());

function doubleIt(num,num1) {
    console.log(num*num1);
}
const output=(doubleIt(12));
console.log(output);

const object1={Name:'Thyive Hayder',age:25}
console.log(object1.gf);

const array1=['Thyive Hayder',25]
console.log(array1[4]);
console.log(array1.indexOf(23));

const myLifeFun=undefined
console.log(myLifeFun);
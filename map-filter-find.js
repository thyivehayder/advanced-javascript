
const array1=[12,13,14,2,3,4]
// const array2=[]
// for (let i = 0; i < array1.length; i++) {
//     const element = array1[i];
//     const result=element*element
//   array2.push(result)  
// }
// console.log(array2);

// Map

const result=array1.map(element=>element*element)
console.log(result);

// Filter 
const result2=array1.filter(element=>element>3)
console.log(result2);

// Find
const result3=array1.find(element=>element>4)
console.log(result3);
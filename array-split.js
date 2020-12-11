// array slice 
const array1=[1,2,3,4,5,6,7,8]
const sliceOutput=array1.slice(3,6)
console.log(sliceOutput);
console.log(array1);

// array splice 
const spliceOutput=array1.splice(2,4,12,33,99,99,99)
console.log(spliceOutput);
console.log(array1);

// array join elements 
const arrayJoinElements=array1.join(' anon ')
console.log(arrayJoinElements);
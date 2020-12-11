function learningClosure() {
    let count=0
    return function () {
        count++
        return count
    }
}
let output=learningClosure()
console.log(output());
console.log(output());

let output1=learningClosure()
console.log(output1());

console.log(output())
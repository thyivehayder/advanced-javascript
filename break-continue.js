// break

const array1=[1,2,3,4,5,67,8]
for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    if (element>8) {
        break
    }
    console.log(element);
}

// continue 
const array12=[12,23,-1,-10,9,45,67,89,]
for (let i = 0; i < array12.length; i++) {
    const element = array12[i];
    if (element<10) {
        continue
    }
    console.log(element);
}




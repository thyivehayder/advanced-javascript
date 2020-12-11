const array1=[
    {name:'Anon',id:36},
    {name:'Rumpa',id:84},
    {name:'Tonia',id:01}
]


const result=array1.map(element=>element.name)
console.log(result);

const result4=array1.map(element=>element.id)
console.log(result4);

const result2=array1.filter(element=>element.id>30)
console.log(result2);

const result3=array1.find(element=>element.id>30)
console.log(result3);

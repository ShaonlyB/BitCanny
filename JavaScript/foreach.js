const arr=[1,2,3,4,5]

// arr.forEach(function printValue(val) {
//     console.log(val+1);
// })



// arr.map(function printValue(val) {
//     console.log(val+2);
// })    //forEach and map function act similar


// let evenArr = arr.filter((val)=>{
//     return val%2===0
// })
// console.log(evenArr);


const output = arr.reduce((result, current)=>{
    return result+current
})
console.log(output);


let a={
    name: "Raju",
    age: 20
}
console.log(a);

let b={
    run: ()=>{
        alert("run")
    }
}
// a.run()
a.__proto__=b
a.run()

b.__proto__={
    address: "Kolkata"
}

console.log(a.address);

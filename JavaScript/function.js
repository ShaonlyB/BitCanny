function sum(a,b){
    s =a+b
    console.log("before return");
    return s
    console.log("after return"); // code after return never executed
    
}
let c = sum(2,3)
// c() //c is not a function, as we return s and s will be number value
console.log(c);

// function hello(){
//     let name="raju"
//     function hello2(){
//         console.log(name)
//     }
//     hello2()
// }
// hello()



// function hello(){
//     console.log("hello");
//     return function() {
//         console.log("This is the returned function");
//     };
// }
// let a = hello(); // Logs "hello" and assigns a function to 'a'
// a(); // Logs "This is the returned function"


function hello(){
    let name="raju"
    console.log("hello")
    function hello2(){
        console.log(name)
    }
    return hello2
}
// hello()
const a=hello() // Logs "hello" and assigns the function hello to 'a'
a()             // Logs the name as it is explicitly returned by hello2 function within hello function



// function hello(){
//     console.log("hello")
// }
// let a = hello
// a()



// function hello(){
//     console.log("hello");
//     return 1;
 // }
// const a= hello()
// // a()
// console.log(a);

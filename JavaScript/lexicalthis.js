// function hello(){
//     console.log(this);
// }
// hello()


// const hello =()=>{
//     console.log(this);
// }
// hello


// const user={
//     username:"raju",
//     age: 20,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome!`);  //this refers to the current object
        
//     }
// }
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()


function hello(){
    let username="Raju"
    console.log(this.username);
}
hello()
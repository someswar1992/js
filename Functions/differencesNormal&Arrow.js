function normal(){
    console.log(this);
    console.log(this === window);
}
normal();
// Normal function bind "this" by default window.

const arrow = () =>{
    console.log(this);
    console.log(this === window);
}
arrow()
// FAT arrow functions binds "this", lexically by default.

// Lets create an object
const object = {
    name : "VivekKuShah",
    email: "vivek@gmail.com",
    branch: "ComputerScience",
    showDetails : function(){
        console.log(`Name ${this.name}, email ${this.email}`);
        function getBranch(){
            console.log(`and Branch ${this.branch}`)
        }
        getBranch();
    }
}
console.log(object.showDetails());
/* and Branch undefined, showDetails() called in format 
object.showDetails() so inside the function "this" === object.

branch() is not called in format object.showBranch() so Normal function bind "this" by default window.so we get Branch is undefined, so what is solution ?
let _this = this 
This way we can access */

//Solution - FAT arrow functions binds "this", lexically by default.

const objectForArrow = {
    name : "VivekKuShah",
    email: "vivek@gmail.com",
    branch: "ComputerScience",
    showDetails : function(){
        console.log(`Name ${this.name}, email ${this.email}`);
        const getBranch = () =>{
            console.log(this)
            console.log(`Branch ${this.branch}`)
        }
        branch();
    }
}
objectForArrow.showDetails();

/* Arrow vs Normal functions - 
Arrow functions not a friend with call, apply and bind() methods
*/
const arrowFun = () =>{
    console.log(this)
    console.log(this.name, this.email, this.branch)
}
arrowFun()
const objArrow = {
    name: "I'm another Object",
    email : "frnd@gmail.com",
    branch: "CSE"
}
arrowFun.call(objArrow);
// My arrow function always owns next level scope here window, once it is ownes no one can change it But normal function can. 

// Code snippet
const obj = {
    arrowFun : ()=>{
        console.log(this);
        console.log(this === obj);
    },
    normalFun : function(){
        console.log(this);
        console.log(this === obj); 
    }
}
obj.arrowFun(); // My arrow function always owns next level scope here window.

obj.normalFun(); // in format so this === obj.

let myFun = obj.normalFun
myFun(); // not follow the calling the format so "thid" by default window. 

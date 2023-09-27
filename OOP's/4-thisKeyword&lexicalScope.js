function userCreator(name, marks) {
    this.name = name;
    this.marks = marks;
};
userCreator.prototype.increment=function(){
    // _this = this;  an alternate solution
    function add(){
        this.marks++;
        // _this.marks++;
        console.log(this.marks);
        // console.log(_this.marks);
    }
    add();
  }

const userOne = new userCreator("VivekKuShah",65);
userOne.increment(); // increment() is called by userOne so this === userOne.

/* "this" rule 1 is not applicable inside the add. here "this" points defualt window global object.
Because calling format of add is not like object.add() 

Solution - We need to introduce FAT arrow functions which binds "this", lexically.
Lexically scoping means where I was born or Where I'm saved, determines something about me when I get called.
Well what is the things - Its what my "this" assignment is.
*/

function userCreator(name, marks) {
    this.name = name;
    this.marks = marks;
};
userCreator.prototype.increment=function(){
    const add = () =>{
        this.marks++;
        console.log(this.marks);
    }
    add();
  }

const userOneObj = new userCreator("VivekKuShah",65);
userOneObj.increment();
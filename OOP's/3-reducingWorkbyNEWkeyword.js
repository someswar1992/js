/* To reduce hard work introduced "new" keyword that automates
1- creates a new object
2- returns the object
and its also automatically sets the __proto__ of reurned object by default userCreator.
-But now we need to adjust how we write the body of userCreator
    how can be -
    * Refer to the auto created object ? - by "this";
    * know where to put our single copy of methods ? - in the Prototype
*/

function userCreator(name, marks) {
    this.name = name;
    this.marks = marks;
};
userCreator.prototype.increment=function(){
    this.marks++;
    console.log(this.marks);
  }

const userOne = new userCreator("VivekKuShah",65);
userOne.increment();
// "this" rule 1 applicable
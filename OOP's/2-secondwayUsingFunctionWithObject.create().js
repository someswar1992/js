function userCreator(name, marks) {
  const newUser = {};
  newUser.name = name;
  newUser.marks = marks;
  newUser.increment = function(){
    newUser.marks++
    console.log(newUser.marks)
  }
  return newUser
}
const newUser = userCreator("VivekKuShah",65.50);
userFirst.increment();

/*Each time when we create newUser (objects) we make space in our computers memory for all our data & methods.
But here method is identical and storing in each objects is wastage of memory.

Solution - Store the methods in seperate object.

Object.create() -  It is a built in method that returns an empty object,
and its also sets a hidden property __proto__ : reference(args)
*/

function userCreator(name, marks) {
  const newUser = Object.create(userFuctionStore);
  newUser.name = name;
  newUser.marks = marks;
  return newUser
}
// creating a global userFuctionStore and passed to Object.create(userMethodStore) that returns an empty object that hidden propert links/__proto__ : reference of userFuctionStore.
const userFuctionStore = {
    increment:function(){
        this.marks++
        console.log(this.marks)
      }
}
const newUserPersoon= userCreator("VivekKuShah",65.50);
newUserPersoon.increment();
// here we call increment method, first try to find increment method on the object itself if it not finds than it goes through the links/__proto__ if it here finds then it executes.

// "this" Rule - When we can call any method, like object.method() than this always points to that object.

// cons - global var or methods are usually a bad process, inside a global memory userFuctionStore declared with entire logic suppose someone accidently delete some property or method or entire logic.
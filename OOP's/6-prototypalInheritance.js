function userCreator(name, marks) {
    this.name = name;
    this.marks = marks;
};
userCreator.prototype.increment=function(){
    this.marks++;
    console.log(this.marks);
  }
  userCreator.prototype.showName=function(){
    console.log(this.name);
  }
const user = new userCreator("VivekKuShah",65)
console.log(user.showName())

// Inherits userCreator
function PaiduserCreator(Pname, Pmarks, balance) {
    userCreator.call(this,Pname,Pmarks)
    this.balance = balance;
};
PaiduserCreator.prototype.incrementBalance = function(){
  this.balance++;
  console.log(this.balance)
}
PaiduserCreator.prototype = Object.create(userCreator.prototype);

const paidUser = new PaiduserCreator("VivekKuShah",81,1000);
paidUser.showName()
paidUser.incrementBalance();

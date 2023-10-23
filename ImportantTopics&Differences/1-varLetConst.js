// Var is Function Scope, Let and Const are Block Scope.
// Var and Let can declare Without Initialization, But Const Can't declare and Const Value Can Never Be Update.
// Let And Const Cant Reclare Within the Same Scope But Var Can Be.

{
  debugger;
  var a = 10; //In Global Scope
  let b = 20;
  const c = 30; //Let and Const are in Block Scope
}

var gA = 100;
{
  debugger;
  var gA = 10;
  console.log(gA); //10
}
console.log(gA); //10 Because Outer gA in Global Scope and also Inner gA in Global so It replaces outer gA.

let sA = 10;
{
  let sA = 20;
  debugger;
  console.log(sA); //20
}
console.log(sA); //10

// Now This Case Outer sA(In Script) is Different From inner sA(Block Scope)

let fA = 10;
function Demo() {
  debugger;
  let fA = 100;
  console.log(fA);
  -100;
}
Demo();
console.log(fA);
-10;
// This Behaviour is known as Shadowing

// * While Shadowing a variable it should not cross the boundry of Scope.

// Example of Illigal Shadowing, Here Var Crosses the scope {}
let a = 20;
{
  debugger;
  var a = 20;
  console.log(a);
}
console.log(a);


function demo(){
  var a =20;
  let d;
  console.log(a)
  var a =40
  console.log(a) 
}
demo()
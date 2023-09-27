// Template literals are a new way of defining string by using backtics instead of single or double quotes.

// Template literals also gives us some extra power when creating string, such as the ability to put variables directly in the string without concatenation.

// In order to add variables inside template literal the variable must be wrapped inside curly braces that start with dollar ${Variable}, Everything inside the curly braces will be executed as JS code the output will be put in the string at the location of the ${}.

// It also gives us the ability to define a string on multiple lines and keep all of the whitespace when printed.
let myname = "Vivekkumar";
let showName = `My name ${myname}`;
console.log(typeof showName);
console.log(showName)

let str = `Hi my name is Vivek,
and I have done Engg.with Computer science branch,
my email is vivekkushah@gmail.com`;
console.log(str)

// Tagged Template Literals - The abillity to run a function on the content of Template literals.
function custom(string, ...values){
    console.log("fun get called")
    console.log(string) // string is an array, that contains string before or after the value, after the ${hobby} it adds empty string. 
    console.log(values)
    return "We can do some manipulation"
}
let myNameIs = `VivekkumarShah`;
let hobby = `learning new thing`;
custom `my full name is ${myNameIs} and my hobby is ${hobby}`;
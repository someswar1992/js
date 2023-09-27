// Assigning to new variable names, A property can be unpacked from an object and assigned to a variable with a different name than the object property ( : ).

// Each destructured property can have a default value. The default value is used when the property is not present, or has value undefined. It is not used if the property has value null.
const usrDetail = {
    Name: "VivekKumarShah",
    Sex: "M",
    clg:undefined,
    age:null,
    address: {
        city: "Nigahi",
        state: "Madhya Pradesh",
        country: "India",
        pincode: [4, 8, 6, 8, 8, 6]
    }

}
const {Name, Sex:Gender, clg="MITM",place="Indore", Course="BE"} = usrDetail;

// Nested - Case
const Vivek = {
    FullName: "VivekKumarShah",
    Gen: "M",
    address: {
        city: "Nigahi",
        state: "Madhya Pradesh",
        country: "India",
        pincode: [4, 8, 6, 8, 8, 6]
    }

}
const {FullName, Gen, address:{city, country, pincode:[p,i,n,c,o,d]}} = Vivek;


//Handling dynamic property name with Destructuring
function getKey(key) {
    const { [key]: renamingKey } = user
    return renamingKey;
}
const NameOf = getKey("FullName")
console.log(NameOf)

// Use Case
let arr = [
    { name: "VivekKumar", branch: "cse" },
    { name: "IndraKumar", branch: "ec" },
    { name: "VikasKumar", branch: "me" }
]
for (const { name, branch } of arr) {
    console.log(`hello! ${name} and branch ${branch}`)
}

// Use Case
function objreturn() {
    return { name: "VivekKumar", branch: "cse" }
}
const { name, branch } = objreturn()
console.log(branch);


// React Format Mostly Used-
const self = { name: "VivekKumar", branch: "cse" }
function logDetails({ name, branch }) {
    console.log(`hello! ${name} and branch ${branch}`)
}
logDetails({ ...self })

// When we des. object if there we write available key with new value then Object is upated.
const objectDes = {name:"VivekKuShah",branch:"cse"}
function des ({name, branch }){
    console.log(`hello! ${name} and branch ${branch}`)
}
des({...objectDes,branch: "ComputerScience"});
const mySelf = {
    name: "VivekKumarShah",
    contact: 6260264382,
    email: "vivekkushah@gmail.com",
    qualification: ["Diploma", "BE in CSE"],
    bothers: [
        {
            name: "IndraKumarShah",
            contact: 9407137191,
        },
        {
            name: "ManojKumarShah",
            contact: 9893838092,
        }
    ]
}

console.log(mySelf);

//  From JS Object to JSON String 
const inJSONFormat = JSON.stringify(mySelf)
console.log(inJSONFormat);

// From JSON String to JS Object
const inJSObject = JSON.parse(inJSONFormat)
console.log(inJSObject)


// fetch
function fetchData() {
    fetch("https://dummyjson.com/products/1")
        .then(response => {
            console.log(response)
            const data = response.json()
            return data
        })
        .then(dataInJSObject => {
            console.log(dataInJSObject)
        })
}
fetchData()
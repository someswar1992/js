// "new FormData" to access form It is Compulsory to each Form Element Have "name" Attribute

// Getting Form
const form = document.querySelector("form")

// Adding Event On form, When Forms Submit
form.addEventListener("submit", (e) => {

    e.preventDefault() // By This Default Behaviour Stops

    // Creating FormData new Object (With Passing Our Form), That is Provided by JS
    const formDataObj = new FormData(form)
    /* We can not Console the formDataObj Becuase It is an Array of Array
     [
        ["nameAttributeValue", "ValueAttributeValue"], 
        ["nameAttributeValue", "ValueAttributeValue"]
    ]
    */
    // We Use ForOF Loop to see
    for (const data of formDataObj) {
        console.log(data[0], data[1])
    }
    console.log(
        formDataObj.getAll(formDataObj));
    // Now We are Converting This Form Data into JS Object
    const FormDataObjectConverted = converFormDataToJSON(formDataObj)
    console.log(FormDataObjectConverted)
})

function converFormDataToJSON(formData) {
    let Obj = {}
    for (const data of formData) {
        Obj[data[0]] = data[1]
    }
    return Obj;
}


// FormData Object Method,

// The append() method of the FormData interface appends a new value onto an existing key inside a FormData object, or adds the key if it does not already exist.
formDataObj.append("Key", "Value")

// The delete() method of the FormData interface deletes a key and its value(s) from a FormData object.
formDataObj.delete("KeyName");

// The has() method of the FormData interface returns whether a FormData object contains a certain key.(True,False)
formDataObj.has("KeyName")
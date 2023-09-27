//System generate Error
try {
    vivek
} catch (error) {
    console.log(error.name) //Shows error Type
    console.log(error.message) //Shows Error Msg
}

// Generating Custom Error, Note: Error() can be called with or without new. Both create a new Error instance.

/* Error("MSG", options)

Options - An object that has the following properties:

Cause:  A value indicating the specific cause of the error, reflected in the cause property.
When catching and re-throwing an error with a more-specific or useful error message,
this property can be used to pass the original error.
 */

try {
    throw new Error("Error Msg", {
        cause: {}
    })
} catch (error) {
    console.log(error)
    // We cant see error Object like JS Object Format, Some Predefined methods that are only applicable  
    console.log(error.name)
    console.log(error.message)

    console.log(error.cause)
}

// Generating Custom Error with type so many avaialable check in MDNdocs
try {
    throw new ReferenceError("Error Msg")
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}

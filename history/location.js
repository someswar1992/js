// location - An Object, For URL

// To Get Current Page Complete URL
console.log(location.href)

// To get Protocol--> http:
console.log(location.protocol)

// to get Domain With Port
console.log(location.host)
// to get Domain Without Port
console.log(location.hostname)

// Path, Starts With /
console.log(location.pathname)

//Query String in URL ?
console.log(location.search)

// Gives URL Part that is Starts with #
console.log(location.hash)


// Redirect Page

function redirectWithHistory() {
    // location.href = "https://www.google.com/"
    // location = "https://www.facebook.com/"

    //Above way of redirection Internally uses assign method, We can use directly 
    location.assign("https://www.google.com/")

    //redirection maintains History to go Back
}


function redirectWithoutHistory() {
    // The difference from the assign() method is that after using replace() the current page will not be saved in session History, meaning the user won't be able to use the back button to navigate to it.
    location.replace("https://www.facebook.com/")
}

function reloadCurrent() {
    // The location.reload() method reloads the current URL, like the Refresh button.
    location.reload()
}

function getUrl() {
    // The toString() stringifier method of the Location interface returns a string containing the whole URL. It is a read-only version of Location.href.
    console.log(location.toString())
}
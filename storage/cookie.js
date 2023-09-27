/*
JavaScript can create, read, and delete cookies with the document.cookie property.
    creating Cookie -
                        document.cookie = "key = value; expires= UTC Format

*/


function setCookie(key, value, expiresInDay) {
    const currentDate = new Date()
    currentDate.setTime(currentDate.getTime() + (expiresInDay * 24 * 60 * 60 * 1000))
    document.cookie = `${key} = ${value}; expires =${currentDate.toUTCString()} ;`
}
setCookie("fullName", "VivekKumarShah", 30)

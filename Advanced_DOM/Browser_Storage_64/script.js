 /*
    There are three different types of browser storage: Cookies, Session Storage,
    and Local Storage.
    Local       | Cookies       | Session    |
    10MB        | 4kb           | 5MB        | Storage Space
    Never       | Manual        | Tab close  | Expires
    Client      | Client/Server | Client     | Browser
    Easy        | Hard          | Easy       | Difficulty to implement
*/

localStorage.setItem('Name', 'Jeremy')
sessionStorage.setItem("Age", '44')

localStorage.setItem("Name", "Rachel")

const date = new Date(9999, 0, 1).toUTCString()
const pastDate = new Date(1999, 0, 1).toUTCString()

document.cookie = `name=jeremy; expires=${date}`
document.cookie = `age=44; expires=${date}`
document.cookie = `name=; expires=${pastDate}`



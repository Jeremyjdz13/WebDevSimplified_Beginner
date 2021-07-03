/*
    Promises video 59

    Promising to do something and either you do it and succeed or you fail.

*/

// This example is running top to bottom and isn't asynchronous.
// const promise = new Promise((resolve, reject) => {
//     const sum = 1 + 1

//     // ;laskdfls;adkj   // This mistyped code will also be caught in the .catch() below.
//                         // Prints out RefernceError: laskdfls is not defined...
//     if (sum === 2) {
//         resolve("Success")
//     } else {
//         reject('Error')
//     }
// })

// promise.then(message => { // The .then() is essentially going to b resolve / "Success" of the Promise()
//     console.log(message)
// })
// .catch(message => {
//     console.error(message)  // The .catch() is essentially going to be the reject / "Error" of the Promise()
// })

// setTimeout(() => {
//     console.log("here")
// }, 250)

// setTimeoutPromise(250).then(() => {  // Can be written like below.
//     console.log("here")
// })

// const promise = setTimeoutPromise(250)

// promise.then(() => {
//     console.log("here")
// })

// setTimeout(() => {  // Promises can help resolve callback hell by chaining promises together.
//     console.log("1")
//     setTimeout(() => {
//         console.log("2")
//         setTimeout(() => {
//             console.log("3")
//         }, 250)
//     }, 250)
// }, 250)

// setTimeoutPromise(250).then(() => {  // This is still callback hell.
//     console.log("1")
//     setTimeoutPromise(250).then(() => {
//         console.log("2")
//     })
// })

// setTimeoutPromise(250) // If you "return" a promise inside another promise you can chain together your .then().
//     .then(() => {  // Beginning of the chained .then().
//         console.log("1")
//         return setTimeoutPromise(250) // The returned "promise".
//     })
//     .then(() => {
//         console.log("2")
//         return setTimeoutPromise(250)
//     })
//     .then(() => {
//         console.log("3")
//         return setTimeoutPromise(250)
//     })
   

// function setTimeoutPromise(duration) {
//    return new Promise((resolve, reject) => {
//         setTimeout(resolve, duration)
//     })
// }

// Create a promise version of addEventListener
// const button = document.querySelector("button")

// function addEventListenerPromise(element, method){
//     return new Promise((resolve, reject) => {
//         element.addEventListener(method, resolve)
//     })
// }

// addEventListenerPromise(button, "click").then((e) => {
//     console.log("Clicked Me")
//     console.log(e)
// })

// Promise.all([  // Change all to "any" and the first promise will print since it's the first to succeed.  // Promise.race([]) & Promise.allSettled([])
//     Promise.resolve('1'),
//     Promise.reject('Error on 2'),  // If one of the promises fails this will be the only console.log ran.
//     Promise.resolve("3"),
// ]).then(messages => {
//     console.log(messages)
// }).catch(error => {
//     console.log(error)
// })

// Promise.resolve("value").then(message => console.log(message))  //Short hand resolve the value "value" and then console.log("value")

// Promise.reject("error").catch(error => console.error(error)) // Short hand to reject the value "error" and catch console.log("error")

// const promise = Promise.resolve("here")

// promise
//     .then(message => {
//         console.log(message)
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("finally") // Finally will always run at the end regardless of failed or succeeded.
//     })
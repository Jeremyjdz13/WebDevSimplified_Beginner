/*
    Async Await
*/
// In order to use Async Await you need to use inside of a function.

// function setTimeoutPromise(delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, delay)
//     })
// }

// setTimeoutPromise(250)
//     .then(() => {
//         console.log('1')
//         return setTimeoutPromise(250)
//     })
//     .then(() => {
//         console.log("2")
//     })

// async function doStuff() {
//     await setTimeoutPromise(250)
//     console.log("1")
//     await setTimeoutPromise(250)
//     console.log("2")
// }

// doStuff()

// Next example

// function setTimeoutPromise(delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve(`You waited ${delay} milliseconds`)
//             reject("error")
//         }, delay)
//     })
// }

// setTimeoutPromise(250)
//     .then((message) => {
//         console.log(message)
//         console.log("1")
//         return setTimeoutPromise(250)
//     })
//     .then((message) => {
//         console.log(message)
//         console.log("2")
//     })
//     .catch(e => {
//         console.error(e)
//     })

// async function doStuff() {
//     try {
//         const message = await setTimeoutPromise(250)
//         console.log(message)
//         console.log("1")
//         const message2 = await setTimeoutPromise(250)
//         console.log(message2)
//         console.log("2")

//     } catch (error) {
//         console.error(error)
//     }
    
// }

// doStuff()

function getValueWithDelay(value, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
            // reject("error")
        }, delay)
    })
}

function getValueWithDelayError(value, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(value)
            reject("error")
        }, delay)
    })
}

// Call getValueWithDelay twice and print out the returned value.
// Then call the getValueWithDelayError and make sure that the error is properly caught.

// async function getValue() {
//     try {
//         const firstDelay = await getValueWithDelay("Jeremy", 250)
//         console.log(firstDelay)
//         const secondDelay = await getValueWithDelay("Rachel", 500)
//         console.log(secondDelay)
//         const errorDelay = await getValueWithDelayError("Chickens", 200)
//         console.log(errorDelay)
//     } catch (error) {
//         console.log(error)
//     } finally {
//         console.log("Libby is the best.")
//     }
// }
// getValue()

// async function doStuff(){
//     for (let i = 0; i < 10; i++) {
//         const value = await getValueWithDelay(i)
//         console.log(value)
//     }
// }

// doStuff()

for (let i = 0; i < 10; i++) {
    getValueWithDelay(i).then(value => {
        console.log(value)
    })
}

// getValueWithDelay("Jeremy", 250).then(message => console.log(message))
// getValueWithDelay("Rachel", 250).then(message => console.log(message))
// getValueWithDelay("Libby", 500).then(message => console.log(message))

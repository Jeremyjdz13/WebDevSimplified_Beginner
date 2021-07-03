//CallBack_Video 58
/* 
    The setTimeOut() and addEventListener() are both asynchronous functions.
    Asynchronous code is executed outside of the top to bottom standard.  
*/

// setTimeout(() => {
//     console.log("Inside")
// }, 1000)

// console.log("Outside")

// // const button = document.querySelector("button")

// // button.addEventListener("click", e => {  // This type of function is referred to as Callbacks: a function
// //                                         // passed to another function that is ran asynchronous based on a specific condition.
// //     console.log("Click Me")
// // })

// const button = document.querySelector("button")

// addClickEventListener(button, () => { // Calling the function addClickEventListener and passing button variable to "element" and passing the arrow function () => {} to callback.

//     console.log("Click Me")

// })


// function addClickEventListener(element, callback){  // callback is the same as an arrow function () => {code goes here}
//     element.addEventListener('click', callback)
// }

// Callback Hell: setTimeout inside another inside another is an example.
setTimeout(() => {
    console.log("Inside")
    setTimeout(() => {
        console.log("Inside 2")
        setTimeout(() => {
            console.log("Inside 3")
        }, 100)
    }, 100)
}, 100)
// const buttons = document.querySelectorAll("button")

// document.addEventListener("click", () => {
//     console.log("Click Document")
//     }, 
//     // { capture: true }
// )

// document.body.addEventListener("click", () => {
//     console.log("Click Body")
//     }, 
//     // { capture: true }
// )

// buttons.forEach(button => {
//     button.addEventListener('click', e => {
//         e.stopPropagation() // Stops the Delegations from Bubbling.
//         console.log("Clicked Button")
//     })
//     }, 
//     // { capture: true }
// );

/*
    Delegation: Events are delegated to elements that are
    clicked.

    Capturing: Is when you go from the furthest away element
    to the closet.  Document, Body, Button...

    Bubbling: Is when you start from the inner most element
    to the furthest away element.  Button, Body, then Document...
*/

document.addEventListener('click', e => {
    if(e.target.matches('button')){
        console.log("Clicked Button")
    }  // This event listener will only log the Clicked Button on a button click.

    if(e.target.matches('.cool')){
        console.log("Clicked a button with the class cool.")
    }
    // console.log(e.target)
})

const newButton = document.createElement('button')
newButton.innerText = "Button 5"
document.body.append(newButton)




/* 
    Control Flow
*/

/*
    46 - if 
// const userIsloggedIn = true
// const isOnDashboard = true
// //console.log("User logged in")

// if (true) {
//     console.log("this is true")
// } else {
//     console.log("this is false")
// }

// if(userIsloggedIn){
//     console.log("User logged in")
// }

// if(2 + 2 === 4){
//     console.log("True")
// }

// if (userIsloggedIn && isOnDashboard) {
//     console.log("true")
// }

// if (0){                   //  Type coercion will render this false
//     console.log("true")
// } else {
//     console.log("false")
// }

// if (""){                // Type coercion will render this as false
//     console.log("true")
// } else {
//     console.log("false")
// }

*/

/*
    47 - Ternary Operator

// const isUserLoggedIn = true

// if (isUserLoggedIn) {
//     console.log("user is logged in")
// }

// if (isUserLoggedIn) console.log("User is logged in.")

// console.log("this is after") // If the if (isUserLoggedIn) is false this line will not run

// if (isUserLoggedIn) {             // This if statement is the same as the Ternary object below.
//     console.log("is logged in")   
// } else {
//     console.log("not logged in")
// }

// isUserLoggedIn ? console.log("logged in") : console.log("not logged in")  // Ternary Operator is the same as the above.

// let welcomeMessage = ""  This code block can be written like below.

// if (isUserLoggedIn) {
//     welcomeMessage = "Welcome"
// } else {
//     welcomeMessage = "Please log in"
// }

// console.log(welcomeMessage)

// const welcomeMessage = isUserLoggedIn ? "Welcome" : "Please log in"  // Ternary Operator: Kyle recommends not using these other than this example.

*/

/*
    48 - Switch Statement
// const favoriteAnimal = "cat"

// // if (favoriteAnimal === "cat") {
// //     console.log('cats are pretty cool')
// // } else if (favoriteAnimal === "dog") {
// //     console.log("they are kinda loud")
// // } else if (favoriteAnimal === "shark"){
// //     console.log("that is an interesting choice")
// // } else {
// //     console.log("That is cool but I am unfamiliar with that animal")
// // }

// switch (favoriteAnimal) {
//     case "cat" :
//         console.log('cats are pretty cool')
//         break
//     case "dog" :
//         console.log("they are kinda loud")
//         break
//     case "shark" :
//         console.log("that is an interesting choice")
//         break
        default:
            console.log("That is cool but I am unfamiliar with that animal")
// }

*/

/*
    49 - For Loop

*/

// A variable for starting  Use keyword let since you want your variable to change.
// An ending point  These are true false scenario 
// How to modify our variable

// for (let i = 0; i < 5; i++) {
//     console.log("hi")
// }

// console.log("Bye")

// const a = ['a', 'b', 'c']

// for(let i = 0; i < a.length; i++){
//     const element = a[i]
//     console.log(element)

// }

// for (let i = 0; i < 6; i++) console.log("Bye")

// for(let i = 0; i < 7; i++){
//     console.log("Start" + i)

//     // if ( i > 2) break

//     if ( i > 2) continue
//     console.log("End", + i)
// }

// Create a for loop that loops from 0 to 10 and prints out all values from 0 to 10

// Modify this loop and exit the loop when the value is equal to 5 by using a break

// for ( i = 0; i <= 10; i++){
//     console.log(i)

//     // if(i === 5) break
// }

/*
    50 - While Loop
*/

// for (let i = 0; i < 5; i++){
//     console.log(i)
// }

// // while(true){
// //     console.log("Logging the true ")  This runs on an infinite loop.
// // }

// let i = 0;

// while (i < 5) {
//     console.log(i)
//     i++
// }

// const person = {
//     name: "Jeremy",
//     friend: {
//         name: "David",
//         friend: {
//             name: "Eric",
//         }
//     }
// }

// let currentPerson = person
// while (currentPerson != null) {
//     console.log((currentPerson.name))
//     currentPerson = currentPerson.friend
// }

// let currentPerson2 = person
// while (currentPerson2 != null) {
//     if (currentPerson2.name === "David") break   // Can also use continue in while loops.
//     console.log((currentPerson2.name))
//     currentPerson2 = currentPerson2.friend
// }

/*
    51 - Recursion
*/

// Recursion is a looping through code but inside of a function.

// function printHi() {     // This will print and max out the call stack. 
//     // console.log("Hi")
//     printHi()
// }

// printHi()

// Uncaught RangeError: Maximum call stack size exceeded
//     at printHi (script_control-flow.js:202)
//     at printHi (script_control-flow.js:202)
//     at printHi (script_control-flow.js:202)
//     at printHi (script_control-flow.js:202)
//     at printHi (script_control-flow.js:202)
//     at printHi (script_control-flow.js:202)
//     at printHi (script_control-flow.js:202)
//     at printHi (script_control-flow.js:202)
//     at printHi (script_control-flow.js:202)
//     at printHi (script_control-flow.js:202)

// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }

// Same as above for (let i = 1; i <=10; i++)

// function printNumber(number) {  
//     if (number > 3) return

//     console.log(number)
//     printNumber(number + 1)
//     // stop
//     console.log("Exiting function")
// }

// printNumber(1)
// console.log("End")

// 1
// 2
// 3
// Exiting function
// Exiting function
// Exiting function
// End

// let sum = 0

// for (let i = 1; i <= 10; i++){
//     sum = sum + i
// }

// console.log(sum)

// function sumNumberBelow(number){
//     if(number <= 0) return 0

//     return number + sumNumberBelow(number - 1)

// }

// console.log(sumNumberBelow(6)) // Logs 21

// const person = {
//     name: "Jeremy",
//     friend: {
//         name: "David",
//         friend: {
//             name: "Eric",
//         }
//     }
// }

// // let currentPerson = person

// // while (currentPerson != null) {
// //     console.log(currentPerson.name)
// //     currentPerson = currentPerson.friend
// // }

// function printNames(currentPerson) {
//     if (currentPerson == null) return // Escape path
//     console.log(currentPerson.name)   // Prints out the name.
//     printNames(currentPerson.friend)  // Recursion through friends and print out names.
// }

// printNames(person)

/* 

    52 - Short Circuit Evaluation
*/

// true || true || false  // JavaScript is smart enough to know that if one or is true the rest is true and doesn't check.

// Short Circuit Evaluation

// console.log(true || false)  // Prints true

// console.log(printTrue() || printFalse())

// function printTrue(){
//     console.log("true")
//     return true
// }

// function printFalse(){
//     console.log("false")
//     return false
// }

// function printName(name) {  // Great way to set a default value
//     if(name == null){
//         name = "Default"
//     }
//     console.log(name)
// }

// printName("Jeremy")

// const person = {
//     name: "Jeremy"
// }

// // if (person != null && person.address != null) {
// //     console.log(person.address.street)
// // }

// console.log(person.name && person.address && person.address.street)
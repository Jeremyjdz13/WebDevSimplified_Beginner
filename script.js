//  /* 16 Normal Functions */

//  function sayHi(name){

//     return "Hello " + name

//  }

//  let result = sayHi("Jeremy")
//  console.log(result)

// /* 17 - Passing Functions As Arguments */

//  function printVariable(variable) {
//      console.log(variable)
//  }

//  function func(x){
//      x("Hello world")
//  }
  
//  func(printVariable)

//  // Example II

//  function sumCallback(a, b, callback){
//      callback(a + b)
//  }

//  function handleSum(sum){
//      console.log(sum)
//  }

//  sumCallback(1, 2, handleSum)

//  // Exercise callback

//  function printVariable2(variable){
//      console.log(variable)
//  }

//  function nameCallback(name, callback){
//     callback("Hello " + name)
//  }
//  nameCallback("Jeremy", printVariable2) // If you want to pass a function you don't use parenthesis

//  // Anonymous function style of exercise callback

//  function nameCallback2(name, callback){
//      callback("Hello " + name)
//  }

//  nameCallback2("Jeremy", function (variable) {
//      console.log(variable)
//  })

//  // Anonymous function doesn't have a name.

//  /*
//   * 18 - Arrow Functions 
//   */

//  function sum(a, b) {
//      return a + b
//  }

//  console.log(sum(1,3))

//  let sumArrow = (a, b) => {
//      return a + b
//  }

//  console.log(sumArrow(13, 99))

//  // Exercise create arrow function out of example below

//  function printName(name) {
//      console.log(name)
//  }

//  let printNameArrow = (name) => {  // Parenthesis are option with a single argument ie name => ...
//      console.log(name)
//  }

//  // Example Arrow Function

//  function sum(a, b) {
//      return a + b
//  }

//  let sumArrow2 = (a, b) => {
//      return a + b  // if returning one line.  You don't need the curly braces and return. See below
//  }

//  let sumArrowOneLine = (a, b) => a + b 

//  // Exercise: convert function below to one line arrow function

//  function printHi(name) {
//      return "Hi " + name
//  }

//  let printHiArrowOneLine = (name) => "Hi " + name

// console.log(printHiArrowOneLine("Jeremy"))

// // Why use Arrow Functions? Allows to nest functions and write less code.
// // Example
// function func2(x, callback) {
//     callback(x)
// }

// func2(10, function(variable) {  //Remove function and add => to the right of (variable)
//     console.log(variable)
// })

// func2(11, (variable) => {  // Less writing and operates the same. This is Anonymous Arrow Functions.
//     console.log(variable)
// })

// /*
//     19 - Stack Trace and Call Stack

//     Stack Trace shows the error in the Console of the Chrome Debugger tools
//     In Chrome Debugger look for Sources next to Console.  In side Sources is the Call Stack
// */

// /*
//     20 - Hoisting

//     Generally I use normal functions for any function that is defined at the file level 
//     and I use arrow functions for functions that are used as callbacks or temporary variables
// */

// // Normal functions are assumed first so the following works.
// console.log(sum2(3,9))

// function sum2(a, b){
//     return a + b
// }

// Arrow functions are not hoisted ie assumed first.
// console.log(sumArrow3(9, 9))

// let sumArrow3 = ( a, b) => { // Uncaught ReferenceError: Cannot access 'sumArrow3 before initialization
//     return a + b
// }

/*
    21 - Scoping

    In chrome debugger go to Sources / Scope
*/

// function sayHi(name) {  // Everything inside the curly braces are considered scoped so all variables are isolated to that function
//     let result = "Hi " + name + a  // The variable can be pulled into the function scope.  
//     console.log(result)            // If a is defined in the function it will render over all other declaration of a.
// }

// let a = 9
// let name = "Jeremy"

// sayHi(name)

/* 
    22 - Closures
*/

// let a = 1

// function print(){
//     console.log(a)
// }

// a = 2   // This will print over 1.

// print()

// function print(variable) {
//     return function func(variable2) {
//         let c = 3
//         console.log(variable) // Prints out variable 1
//         console.log(variable2) // Prints out variable 2
//         console.log(c)  // Prints out variable 3
//     }
// }

// let a = print(1)  //By writing a = print(1) you are saying that variable a is the same as print(1). It is not equal to the output of print(1), but the same as print(1).

// a(2) // By writing a(2) you are writing print(1)(2), where 1 is for variable, and 2 is for variable2

/*Anand Kalpoe Explained:
let a is initialized with the value of print(1). The parentheses tell Javascript to execute the code
 (because parentheses mean execute it right now) with the given parameters/arguments if any.

The print function is executed immediately, encounters the return keyword with a value set for it, 
which means it has to execute/resolve/retrieve the return value before it returns.

Javascript walks through the func code and it will log variable to the console while doing so, 
because the current value for variable is known to Javascript.

When all is done Javascript returns the whole function and sets that as the new value for let a. 
Note that when you call a(2) right now it will call func instead of print
*/

/* 
    23 - Const
*/

// let a = 1  // let allows you to reassign a variable.  

// a = 2 // re have reassigned the variable from 1 to 2.

// const a = 2  // const allows you to assign a constant variable.

/*
    24 - Var
*/

// var a = 1 // var is available outside of scope
          // var also hoist variables
          // var can also redefine a variable with the var variable

/*
    25 Type Coercion 

    Changing typeof number, string, boolean, null, and undefined to another.
*/

// let a = "1"

// console.log(typeof a) // Equals a string.
// console.log( typeof parseInt(a)) // Equals to a number.

// let b = "1.34"

// console.log(parseInt(b))  // Equals 1 because JS converts the 1.34 to 1
// console.log(parseFloat(b))  // Equals 1.23

// let c = 1.34 // Number

// c.toString()  // Converts the number to a string.

// Always make sure your types are the same.

/* 
    26 - == Vs === 
*/

// const a = 0
// const b = false

// console.log(a == b) // This will equal true because zero is falsy.

// almost always use triple === when comparison of equality.
// always use double == when working with null or undefined checks.  Triple equal === will 
// check the typeof and will be true or false based on the type of null or type of undefined.
// Double == will automatically use coercion.

// const a = 1
// const b = "1"

// console.log(a !== b) // Does not equal to? true : because the double equals == is similar to === where it doesn't 
//                      // typeof coercion because you specified !==.  === is going to coercion.

// console.log(a != b)  // Does not equal to? false : because double == will automatically coercion the string to a number. 

// console.log(a === b) // Does equal to? false : No coercion.

// console.log (a == b) // Does equal to?  true : automatically coercion.

/*
    27 - NaN
*/

// const a = parseInt("lkajsdlfj")

// console.log(a)  // Result NaN

// // You can't check if a variable is NaN.  == or === will always say false.

// console.log(isNaN(a)) // Result true.  You have to use the special isNan in order to check for Not a Number.

/*
    28 - Arrays
*/

// const a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] // Arrays start at index zero

// console.log(a[0]) // Index zero
// console.log(a[9]) // Index 9 

// a.push(11) // This will add a new value of 11 at the end of the array.

// console.log(a)

// const b = [
//     [ "Hi", "Bye" ],
//     [ 1, 2 ]
// ]

// console.log(b[0][1]) // Prints out Bye
// console.log(b[1][0]) // Prints out 1

/*
    29 - Objects
*/
// Objects are probably the most important variable in JS

// let name = "Jeremy"
// const age = 44
// const favoriteNumber = 13

// let person = {} // Empty Object
// let personObject = { 
//     name: "Jeremy", 
//     age: 44, 
//     favoriteNumber: 13,
//     sayHI: function(){  // Don't need to write functions this way inside an Object.
//         console.log("Hi")
//     },
//     sayBye(){               // You can write functions this way.
//         console.log("Bye")
//     }
// } 

// console.log(personObject) // {name: "Jeremy", etc}

// console.log(personObject.name) // Jeremy

// console.log(personObject["name"]) // Bracket notation isn't recommended and you would only need to use if you needed to access a variable in the object.

// personObject.sayBye()

// let personObjectObject = {
//     name: "Jeremy",
//     hobbies: ["Art", "Programming"],
//     address: {
//         street: "12105 Andrew Sater Rd",
//         city: "Everett"
//     }
// }

// console.log(personObjectObject.hobbies[1]) // Prints out Programming: When accessing an array you need to use bracket notation.
// console.log(personObjectObject.address.city) // Prints out Everett

// personObjectObject.name = "Rachel"  // will update name from Jeremy to Rachel

// personObjectObject.hobbies[1] = "Chickens"  // will update Programming to Chickens

// console.log(personObjectObject.name)
// console.log(personObjectObject.hobbies[1])

/*
    30 - References Vs Value
*/
// Unique to Objects and Arrays and they have references.

// let a = 10
// let b = "Hi"
// let c = { name: "Jeremy" } // Memory address reference 0x01
// let d = c // 0x01
// d.name = "Rachel"

// console.log("a = " + a)
// console.log("b = " + b)
// console.log("c = " + JSON.stringify(c)) // Prints out {"name":"Rachel"} 
// console.log("d = " + JSON.stringify(d)) // Prints out {"name":"Rachel"} 

// let a = [1, 2]      // This has a value in memory example 0x01
// let b = [1, 2]      // This has a value in memory example 0x02
// // console.log(a === b) // Prints out false because the triple equals is comparing the values. 
// const c = [1, 2]    // With const you cannot change the value aka the variable. value 0x03
// // c.push(3)        // You're not changing the value/memory address you're modifying by using the .(dot) content of c at the memory address 0x03.
// // c = [1, 2, 3]    // The only way to assign a new value is to use the equal with a new variable 0x05, will throw an error.
//                     // Uncaught TypeError: Assignment to constant variable.
// // console.log(c)

// const d = { name: "Jeremy"}    // value 0x04
// d.age = 44          //Modifying with the . (dot) notation at value 0x04 content variable { name: "Jeremy", age: 44 } 
// console.log(d)   // Prints {name: "Jeremy", age 44}

// const e = [1, 2]           // Variables in an array that are outside of functions are in their own scope. Reference 0x01
// const elementToAdd = 3     // This is just a value, not an array, not an object and therefore has no reference.

// add(e, elementToAdd)

// console.log(e)             // Prints out referenced array of values [1, 2, 4].
// console.log(elementToAdd)  // Prints out value 3.

// function add(array, element){ // Functions are in their own scope.
//     element = element + 1     // Modifying the value from 3 to 4 in scope of the function add(array, element){}
//     array.push(element)       // Modifying the values/content of the memory reference 0x01.
// }

/*
    31 - Array Methods
*/

// Functions are just stand alone functions.
// function func(){
//     do stuff
// }

// Methods are objects that have functions inside of them.
// const obj = {
//     func(){
//         do stuff
//     }
// }

// const a = [1, 2, 3, 4, 5]
// a.forEach((number, index) => {
//     console.log(number + " " + index) // Prints 1 0, 2 1, 3 2, 4 3, 5 4
// })

// const b = [1, 2, 3, 4, 5]
// const newB = b.map(number => {  // .map() doesn't modify array b but creates a new array.
//     return number * 2
// })
// console.log(b) // Prints out an unmodified b array.
// console.log(newB) // Prints out a new array [2, 4, 6, 8, 10]

// const c = [1, 2, 3, 4, 5]
// const newC = c.filter(number => {  // return true would return the array [1, 2, 3, 4, 5]
//     // return true                  // return false would return an empty array because false is saying don't keep any values in the array.
//     // return false
//     // return number <= 2              // number <= 2 will return the array [1, 2]
//     return 
// })
// console.log(newC)

// const d = [1, 2, 3, 4, 5]
// const nFind = d.find(number =>{
//     // return number < 5  // As soon as a number returns as true find stops looking.  Prints out 1.
//     return number > 2 // As soon as a number returns as true find stop looking. Prints out 3.
// })
// console.log(nFind)

// const e = [1, 2, 3, 4, 5]
// const nSome = e.some(number => {
//     // return number > 2   // Prints out true as long as there are numbers greater than 2.
//     return number > 5  // Prints out false because there isn't a number greater than 5.
// })
// console.log(nSome)

// const f = [1, 2, 3, 4, 5]
// const nEvery = f.every(number => { 
//     // return number > 2 // Returns false because not every number is greater than 2
//     return number > 0  // This returns true because every number is greater than 1
// })
// console.log(nEvery)

// const g = [1, 2, 3, 4, 5]
// const items = [
//     {price: 10},
//     {price: 20},
//     {price: 3},
//     {price: 14},
//     {price: 8}
// ]
// const gReduce = g.reduce((sum, number) => {
//     return sum + number  // Returns 15 because sum + number = 1, 1 equal number sum + number = 3, etc
// }, 0) // The zero is the value of sum.  Whatever number you use is the starting value of sum.
// console.log(gReduce)
// const itemsReduce = items.reduce((sum, number) => {
//     return sum + number.price  //This will total the prices = 55
// }, 0) // This starts at index 0.
// console.log(itemsReduce)

// const h = [1, 2, 3, 4, 5]
// const isTrue = h.includes(2)
// console.log(isTrue)

/* 
    32 - String Template Literals
*/

// let a = "Hello"
// let b = "World"
// console.log(a + " " + b)
// console.log(`${a} ${b}`) // The backtick `${variable}` allows to enter a variable inside of a string literal. 

/*
    33 - New And This
*/

// function createUser(name, age){
//     return { name: name, age: age}
// }

// const userFunc = createUser("Jeremy", 44)
// console.log(userFunc)  // Prints out {name: "Jeremy", age: 44}

// // const date = new Date()  // When you create an object with the new keyword you call this the constructor. 
// // console.log(date)

// function User(name, age){  //When you write out a "constructor" you generally want to capitalize the first letter.
//     this.name = name        // When you call out a constructor you have access to a variable called "this", which is an 
//     this.age = age          // empty object this = {}
//     this.human = true                       
// }

// const user = new User("Titan", 2000)  // When you call "new", new automatically creates this = {} and "return" inside the function User(name, age){}
// console.log(user)   // Prints out an object with the type of "User": User {name: "Titan", age: 2000, human: true}

// class UserClass {
//     constructor(name, age){  // Class constructor allow for adding functions.
//         this.name = name
//         this.age = age
//         this.human = true
//     }

//     printName(){
//         console.log(this.name)
//     }
// }

// const userClass = new UserClass("Thomas", 33)
// const userClass2 = new UserClass("Ice Man", 33)
// console.log(userClass)

// userClass.printName()
// userClass2.printName()

/*
    34 - Async Vs Defer
*/
// See screen shot.

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//         <script defer src="defer.js"></script>  Recommends always using defer so the page loads before running any scripts.
//         <script async src="async.js"></script>
//         <script src="normal.js"></script>
//     </head>
// </html>

/*
    35 - Window
*/

// console.log(window)  // Window is an object.  The global object for the entire browser.

// window.console.log("hi")  // JavaScript is smart enough to assume you are working with window object so you don't need the window with console.log()

// const alert = "Message"

// window.alert(alert)   // Because you passed in a variable you need to add window to alert(alert)

// window.addEventListener("resize", () => { //The only time Kyles uses window when console.logging a resize.
//     console.log("resized")
// })

/*
    36 - Document
*/

// console.log(document)  // The Document Object is incredibly useful as it grabs anything in our HTML file.
                       // Prints out <html lang="en">  and all the contents.
                       //            </html>
// console.log(document.body)       // prints out the body <body></body>

// const element = document.createElement("span") // Creates a span element <span></span>
// element.innerText = "Hello World"  // Add the text Hello World to the <span></span>
// document.body.appendChild(element)  // This will add the element to the end of our <body> <span>Hello World</span></body>

/*
    37 - Id And Class Selectors
*/

// const divWithId = document.getElementById("div-id")  // One <div id="div-id">This is an ID Element</div>
// const divsWithClass = document.getElementsByClassName("div-class") // Accesses 4 <div class="div-class" >This is a class Element</div>
//                                                                    // Considered an html collections not an array.
// divWithId.style.color = "red" // Works on a single element <div></div>

// // divsWithClass.style.color = "green"      // This will not work since we are accessing an array of elements

// // divsWithClass.forEach(div => (div.style.color = "green")) // Will give an error because foreach is not a function. Thi is an html collection

// const divsWithClassArray = Array.from(divsWithClass)  // The Array method allows to create an array from() something else ie / from the html collections of elements.

// divsWithClassArray.forEach(div => (div.style.color = "green"))

// divsWithClass[2].style.color = "yellow"  // The third <div></div> text will be yellow.

// console.log(divWithId)
// console.log(divsWithClass)  // Shows a collection of html element; all 4 divs.

/*
    38 - Query Selectors
*/
// const dataAttributeElement = document.querySelector("[data-test]") //querySelector only searches for one element.
// const dataAttributeElementAll = document.querySelectorAll("[data-test]")  // querySelectorAll collects all elements into an array.

// const divWithClasses = document.querySelector('.div-class') // Finds the first div on the page that matches the class and ignores the other divs.
// const divWithClassesAll = document.querySelectorAll('.div-class') // Finds all the divs with the class div-class.

// divWithClassesAll.forEach(div => (div.style.color = "red"))
// dataAttributeElement.style.color = "green"

// const input = document.querySelector("input") // Finds first <input> on the page
// const inputMethod2 = document.querySelector("body > input[type='text']") // Finds the specific input with the type='text'

// console.log(dataAttributeElement)
// console.log(dataAttributeElementAll)
// console.log(divWithClasses)
// console.log(divWithClassesAll)

/*
    39 - Event Listeners
*/

// const btn = document.querySelector("[data-btn]")

// btn.addEventListener('click', () => {
//     console.log("Click")
// })

// btn.addEventListener('click', () => {  // You can add as many event listeners on a button.
//     console.log("Click 2")
// })

// function printClick() {
//     console.log("click function")
// }
// btn.addEventListener('click', printClick)

// btn.removeEventListener('click', printClick) // Removes he event listener.

// btn.addEventListener("click", e=>{
//     console.log(e)
// })

// const input = document.querySelector("[data-input-text]")
// const form = document.querySelector("[data-form]")

// form.addEventListener("submit", e => {  // By default submit event refreshes the page on a from.
//     e.preventDefault()                  // Prevents the default actions.
//     console.log("Submitted Form")
// })
// input.addEventListener("input", e => {
//     console.log(e.target.value === "")
// })

// const link = document.querySelector('a')

// link.addEventListener("click", e => {
//     e.preventDefault()
// })

/* 
    40 - Additional Difference Between Arrow and Normal Function 
*/
// const button = document.querySelector('button')

// button.addEventListener('click', e => {  // Arrow function
//      console.log("Arrow This")
//      console.log( this )  // Defines the window 
// })

// button.addEventListener('click', function (e) {  // Normal function
//     console.log("Function This")
//     console.log( this )  // Defines the button
//     console.log(e.target)  // Same as using this.
// })

// console.log(this === window)  // Always equal to true because this is in the Global Scope

/* 
    41 - Data Attributes
*/
// In Javascript you cannot have a variable with a hyphen in it.  It will be converted to camel case.
// const test = document.querySelector('[data-test]')

// console.log(test.dataset)  //Prints out DOMStringMap {test: 1234, testTwo: ""}  from <button data-test="1234" data-test-two>1</button>
// console.log(test.dataset.test) // Prints out 1234
// console.log(test.dataset.testTwo)  // Prints out nothing

// test.dataset.test = "5555"

// console.log(test.dataset) // Prints out the new 5555 for test: 5555 and updates the DOM with a new variable.

// const buttons = document.querySelectorAll('button')

// buttons.forEach( button => {
//     button.addEventListener('click', () => {
//        const currentClicks =  parseInt(button.dataset.clicks)

//        button.dataset.clicks = currentClicks + 1
//     })
// })

/*
    42 - DOM Traversal
*/

// const grandParent = document.querySelector("#grand-parent") // Searches for an ID like id="grand-parent"

// grandParent.style.color = "red"

// grandParent.children[0].style.color = "red"

// const parentOne = grandParent.children[0]
// const parentTwo = parentOne.nextElementSibling  // Selecting the next sibling to parent one which will be parent two
// const childOne = parentOne.children[0]  
// const childTwo = parentOne.children[1]

// const granParentClosest = childOne.closest(".grand-parent")  // Searches for a class like class="grand-parent"
// parentOne.style.color = "red"
// You can use querySelector to traverse the DOM

// const grandParent = document.querySelector("#grand-parent")
// const children = grandParent.querySelectorAll(".child")
// const parent = grandParent.querySelector(".red")
// parent.style.color = "green"

// children.forEach(child => {
//     child.style.color = "red"
// })

/*
    43 - Simple Todo List
*/

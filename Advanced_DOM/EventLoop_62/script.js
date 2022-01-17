function test(){
    console.log("hi 1") 
    console.log("hi 2")
    new Promise((resolve, reject) => resolve('Hi Promise')).then(
        message => console.log(message)
    ) 
    setTimeout(() => console.log("hi 3"), 10) // the set timeout says come back and run this code later. 
    setTimeout(() => console.log("hi 4"), 0)
    console.log("hi 5") 
}

test()
console.log("hi 6")
// button.addEventListener('click', () => {
//     dlkafjdlkfj
// })
/*  
Main Thread is where all your JavaScript Code is ran.
The setTimeOut will not run until the entire call stack has been executed.

promises can run before the call stack loops.  The promise will run immediately after
the current function has completed it's code. Notice the promise runs before the 6.

*/
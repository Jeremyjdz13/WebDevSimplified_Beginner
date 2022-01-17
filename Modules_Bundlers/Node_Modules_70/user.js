/*
    
*/

const me = {
    age: 44,
    name: "Jeremy"
}
const rachel = {
    age: 33,
    name: "Rachel"
}

 function printUser(user) {
    console.log(`Name: ${user.name}. Age: ${user.age}`)
}

module.exports = {
    me: me,
    rachel: rachel,
    printUser: printUser
}   


 
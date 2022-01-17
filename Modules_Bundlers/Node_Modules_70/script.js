const userExport =  require('./user.js')

const me = userExport.me
const rachel = userExport.me
const printUser = userExport.printUser

printUser(me)
printUser(rachel)
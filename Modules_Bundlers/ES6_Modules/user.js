export const me = {
    age: 44,
    name: "Jeremy"
}

export const rachel = {
    age: 33,
    name: "Rachel"
}

export default function printUser(user) {
    console.log(`Name: ${user.name}. Age: ${user.age}`)
}

// export default printUser

/*
    Variables: You must export variables on the same line unless it's the default then it must be 
    on it's own line.  

    Functions: You can export or export default functions on the same line.

    When linking files you can go into sub folders like from "./pathtofolder/file.file"
    When linking files in a folder before your script like from "../../file.file"
*/
 
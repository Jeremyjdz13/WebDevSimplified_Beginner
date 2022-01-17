// window.fetch("https://jsonplaceholder.typicode.com/users").then(res => {
//     return res.json()
// }).then(data => {
//     console.log(data)
// })

const URL = "https://jsonplaceholder.typicode.com/posts"
const button = document.querySelector('button')

async function fetchData(){
     const response = await fetch(URL, {
         method: 'POST',
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({
             title: "New post"
         })
     })
     const post = await response.json()
    //  console.log(users.map(users => users.name))
    // response.ok  // True or False return

    // if (response.ok) {
    //     const user = await response.json()
    //     console.log(user)
    // } else {
    //     console.log("FAILURE")
    // }
    console.log(post)
    // try {
    //     if (response.ok) {
    //         const user = await response.json()
    //         console.log(user)
    //     } else {
    //         console.log("FAILURE")
    //     }
    // } catch (e) {
    //     console.error(e)
    // }
}

fetchData()

// button.addEventListener('click', fetchData)
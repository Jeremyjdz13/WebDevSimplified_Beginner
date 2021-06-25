/*
  TODO: 2. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
*/
const modal = document.querySelector("#modal")
const openModalButton = document.querySelector("#open-modal-btn")
const closeModalButton = document.querySelector("#close-modal-btn")
const overlay = document.querySelector("#overlay")

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal

openModalButton.addEventListener("click", e => {
    e.preventDefault()
    modal.classList.add("open")
    overlay.classList.add("open")
})
// BONUS: Also add the class "open" to the overlay

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// closeModalButton.addEventListener("click", e => {
//     e.preventDefault()
//     modal.classList.remove("open")
//     overlay.classList.remove("open")
// })

closeModalButton.addEventListener("click", closeModal)
// BONUS: Also remove the class "open" from the overlay

// overlay.addEventListener("click", e => {
//     e.preventDefault()
//     overlay.classList.remove("open")
//     modal.classList.remove("open")
// })

overlay.addEventListener("click", closeModal)

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay

function closeModal(){
    modal.classList.remove("open")
    overlay.classList.remove("open")
}
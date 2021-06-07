import {CarsRUS} from "./cars-r-us.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarsRUS()
}

renderAllHTML()

// document.addEventListener("stateChanged", event => {
//     console.log("State of the data has changed. Regenerating HTML...")
//     renderAllHTML()
// }
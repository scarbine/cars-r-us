import {getSeatType, setSeat} from "./database.js"

const seats = getSeatType()

document.addEventListener("change",
    (event)=> {
        if (event.target.name === "seat"){
        setSeat(parseInt(event.target.value))
    }
})

export const Seats = () => {
    let html = "<ul>"

    const listItems = seats.map(seat => {
        return `<li> 
        <input type="radio" name="seat" value="${seat.id}"/> ${seat.type}</li>`
        
    })

    html += listItems.join("")
    html += "</ul>"
    return html

}
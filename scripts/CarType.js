import {getCarType, setCarType} from './database.js'

const carType = getCarType()


document.addEventListener("change",
    (event)=> {
        if (event.target.name === "carType"){
        setCarType(parseInt(event.target.value))
    }
})

export const Car = () => {
    let html = "<ul>"

    const listItems = carType.map(car => {
        return `<li> 
        <input type="radio" name="carType" value="${car.id}"/> ${car.type}</li>`
        
    })

    html += listItems.join("")
    html += "</ul>"
    return html

}
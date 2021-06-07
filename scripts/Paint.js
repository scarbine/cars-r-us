import {getPaint, setPaint} from "./database.js"


const paints = getPaint()

document.addEventListener("change",
    (event)=> {
        if (event.target.name === "paint"){
        setPaint(parseInt(event.target.value))
        window.alert(`User has chosen paint package ${event.target.value}.`)
    }
})

export const Paint = () => {
    let html = "<ul>"

    const listItems = paints.map(paint => {
        return `<li> 
        <input type="radio" name="paint" value="${paint.id}"/> ${paint.color}</li>`
        
    })

    html += listItems.join("")
    html += "</ul>"
    return html

}
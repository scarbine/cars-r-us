import {getTechnology, setTechnology} from "./database.js"

const technologies = getTechnology()

document.addEventListener("change",
    (event)=> {
        if (event.target.name === "tech"){
        setTechnology(parseInt(event.target.value))
        window.alert(`User has chosen tech package ${event.target.value}.`)
    }
})

export const Technology = () => {
    let html = "<ul>"

    const listItems = technologies.map(tech => {
        return `<li> 
        <input type="radio" name="tech" value="${tech.id}"/> ${tech.type}</li>`
        
    })

    html += listItems.join("")
    html += "</ul>"
    return html

}
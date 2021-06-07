import {getOrders, getPaint, getSeatType, getTechnology, getWheels, getCarType} from "./database.js"


const buildOrderListItem = (order) => {
    let totalCost = 0
    const paint = getPaint()
    const foundPaint = paint.find(
        (paint) => {
            return paint.id === order.paintColorId
        }
    )
    totalCost = foundPaint.price
    const seats = getSeatType()
    const foundSeat = seats.find(
        (seat) => {
            return seat.id === order.paintColorId
        }
    )
    totalCost += foundSeat.price

    const techs = getTechnology()
    const foundTech = techs.find(
        (tech) => {
            return tech.id === order.paintColorId
        }
    )
    totalCost += foundTech.price

    const wheels = getWheels()
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.paintColorId
        }
    )
    totalCost += foundWheel.price

    const carType = getCarType()
    const foundCarType = carType.find(
        (type) => {
            return type.id === order.carTypeId
        }
    )

    totalCost = (totalCost * foundCarType.priceBase).toFixed(2)
    
    
    return `<li>
        Order #${order.id} was placed on ${order.timestamp} and the total is $${totalCost}.
    </li>`
}

export const Orders = () => {
 
    const orders = getOrders()
    
    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)
    html += listItems.join("")
    html += "</ul>"
    return html
}


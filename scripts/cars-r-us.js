import {Paint} from "./Paint.js"
import {Seats} from "./Seats.js"
import {Wheels} from "./Wheels.js"
import {Technology} from "./Technology.js"

export const CarsRUS = () => {
    return `
        <h1> Cars-R-Us </h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paint</h2>
                ${Paint()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
                ${Technology()}
            </section>
            <section class="choices__seat options">
            <h2>Seats</h2>
            ${Seats()}
        </section>
        </article>
        
        <article class="order-button">
        <button id="orderButton">Create Custom Car</button>
        </article>

        <article class="customOrders">
        <h2>Custom Car Orders</h2>
        
        </article>

    
    `
}
const database = {

paintColor : [
    {
      id: 1,
      color: "Silver",
      price: 500
    },
    {
      id: 2,
      color: "Midnight Blue",
      price: 350
    },
    {
      id: 3,
      color: "Firebrick Red",
      price: 1000
    },
    {
      id: 4,
      color: "Spring Green",
      price: 750
    }
  ],
  
 wheels : [
    {
      id: 1,
      type: "17-inch Pair Radial",
      price: 495
    },
    {
      id: 2,
      type: "17-inch Pair Radial Black",
      price: 395
    },
    {
      id: 3,
      type: "18-inch Pair Spoke Silver",
      price: 999
    },
    {
      id: 4,
      type: "18-inch Pair Spoke Black",
      price: 500
    }
  ],
  
   technology : [
    {
      id: 1,
      type: "Basic Package (basic sound system)",
      price: 750
    },
    {
      id: 2,
      type: "Navigation Package (includes integrated navigation controls)",
      price:350
    },
    {
      id: 3,
      type: "Visibility Package (includes side and rear cameras)",
      price: 750
    },
    {
      id: 4,
      type: "Ultra Package (includes navigation and visibility packages)",
      price: 463
    }
  ],
  
 interiorSeatType : [
    {
      id: 1,
      type: "Beige Fabric",
      price: 100
    },
    {
      id: 2,
      type: "Charcoal Fabric",
      price: 430
    },
    {
      id: 3,
      type: "White Leather",
      price: 504
    },
    {
      id: 4,
      type: "Black Leather",
      price: 940
    }
  ],

  carTypes : [
    {
      id:1,
      type: "car",
      priceBase: 1
    },
    {
      id: 2,
      type: "SUV",
      priceBase:1.5
    },
    {
      id:3,
      type: "Truck",
      priceBase:2.25
    }
  ],
  
orders : [
    {
      id: 1,
      wheelId: 2,
      techId: 4,
      interiorSeatTypeId: 2,
      paintColorId: 1,
      carTypeId:1,
      timestamp:124214
    },
    {
      id: 2,
      wheelId: 4,
      techId: 3,
      interiorSeatTypeId: 2,
      paintColorId: 3,
      carTypeId:2,
      timestamp: 23443453
     
     
    }
  ],

  
newOrders : 
    { 
      wheelId: 0,
      techId: 0,
      interiorSeatTypeId: 0,
      paintColorId: 0,
      carTypeId:0
   
    }
  
}


  export const getSeatType = () => {
      return database.interiorSeatType.map(seat => ({...seat}))
  }
  export const getTechnology = () => {
      return database.technology.map(tech => ({...tech}))
  }
  export const getWheels = () => {
      return database.wheels.map(wheel => ({...wheel}))
  }
  export const getPaint = () => {
      return database.paintColor.map(paint => ({...paint}))
  }
  export const getOrders = () => {
      return database.orders.map(order => ({...order}))
  }

  export const getCarType = () => {
      return database.carTypes.map(carType => ({...carType}))
  }

  export const setWheel = (id) => {
    database.newOrders.wheelId = id
  }

  export const setTechnology = (id) => {
    database.newOrders.techId = id
  }
  export const setPaint= (id) => {
    database.newOrders.paintColorId = id
  }
  export const setSeat = (id) => {
    database.newOrders.interiorSeatTypeId = id
  }

  export const setCarType = (id) => {
    database.newOrders.carTypeId = id
  }
  
  export const addCustomerOrder = () => {
    // Copy the current state of the user choice
    const newCarOrder = {...database.newOrders}

    //  Add new primary key to the object
    const lastIndex = database.orders.length -1
    newCarOrder.id = database.orders[lastIndex].id + 1

    // Add timestamp to the order
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    newCarOrder.timestamp = today
   

    // Add new order to the custom orders state
    database.orders.push(newCarOrder)

    // Reset Temp state choices
    database.newCarOrder = {}
  
    //  Broadcast a notification the state has been changed
    document.dispatchEvent(new CustomEvent("stateChanged"))

  }
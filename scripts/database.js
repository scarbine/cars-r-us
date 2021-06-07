const database ={

paintColor : [
    {
      id: 1,
      color: "Silver",
    },
    {
      id: 2,
      color: "Midnight Blue",
    },
    {
      id: 3,
      color: "Firebrick Red",
    },
    {
      id: 4,
      color: "Spring Green",
    },
  ],
  
 wheels : [
    {
      id: 1,
      type: "17-inch Pair Radial",
    },
    {
      id: 2,
      type: "17-inch Pair Radial Black",
    },
    {
      id: 3,
      type: "18-inch Pair Spoke Silver",
    },
    {
      id: 4,
      type: "18-inch Pair Spoke Black",
    },
  ],
  
   technology : [
    {
      id: 1,
      type: "Basic Package (basic sound system)",
    },
    {
      id: 2,
      type: "Navigation Package (includes integrated navigation controls)",
    },
    {
      id: 3,
      type: "Visibility Package (includes side and rear cameras)",
    },
    {
      id: 4,
      type: "Ultra Package (includes navigation and visibility packages)",
    },
  ],
  
 interiorSeatType : [
    {
      id: 1,
      type: "Beige Fabric",
    },
    {
      id: 2,
      type: "Charcoal Fabric",
    },
    {
      id: 3,
      type: "White Leather",
    },
    {
      id: 4,
      type: "Black Leather",
    },
  ],
  
  
  
orders : [
    {
      id: 1,
      wheelId: 0,
      techId: 0,
      interiorSeatTypeId: 0,
      paintColorId: 0,
      customerId: 0,
    },
  ],
  
customers : [
      {
          id: 1,
          name:" "
  
      }
  ],
  
  
newOrders : [
    { 
      wheelId: 0,
      techId: 0,
      interiorSeatTypeId: 0,
      paintColorId: 0,
      customerId: 0,}
  ]
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
  export const getCustomer = () => {
      return database.customers.map(customer => ({...customer}))
  }

  export const getNewOrder = () => {
    return database.newOrders.map(newOrder => ({...newOrder}))
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
  
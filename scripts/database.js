const paintColor = [
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
  ];
  
  const wheels = [
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
  ];
  
  const technology = [
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
  ];
  
  const interiorSeatType = [
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
  ];
  
  
  
  const orders = [
    {
      id: 1,
      wheelId: 0,
      techId: 0,
      interiorSeatTypeId: 0,
      paintColorId: 0,
      customerId: 0,
    },
  ];
  
  const customers = [
      {
          id: 1,
          name:" "
  
      }
  ]
  
  
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
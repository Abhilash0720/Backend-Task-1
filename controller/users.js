
let rooms = [
    {
      "roomID": "PA",
      "roomName": "Paradise",
        "seatsAvailable": "50",
        "amenities": ["A/C", "Drinking-water", "Free-Parking", "WIFI"],
        "priceperhour": "750",
        "bookingDetails": [
            {
                "customerName": "Abhilash",
                "reservationDate": "18-11-2023",
                "startTime": "9:30",
                "endTime": "2:00",
                "roomID": "PA",
                "status": "Booking confirmed"
            }
        ]
    },
   
  ]
  
  
  const createRoom = []
  
  const BookingRoom = []
  
  const bookedroomdetails = [
  {
    roomName: "Paradise Suite",
    status: "Booking confirmed",
    customerName: "Abhilash",
    reservationDate: "18-11-2023",
    startTime: "9:30",
    endTime: "2:00"
  }
  ]
  
  const bookedcustomerdetails =[
  {
    roomName: "Paradise Suite",
   customerName: "Abhilash",
   reservationDate: "18-11-2023",
   startTime: "9:30",
   endTime: "2:00"
  }
  ]
  const listofbooked = [
  {
    roomName: "Paradise Suite",
    customerName: "Abhilash",
    reservationDate: "18-11-2023",
    startTime: "9:30",
    endTime: "2:00",
    status: "Booking confirmed",
    roomID: "PS"
  }
  ]
  
  const getroom = (req,res)=>{
    res.send(rooms)
  }
  
  const postroom = (req,res)=>{
    data={
    seatsAvailable:req.body.seatsAvailable,
    amenities: req.body.amenities,
    priceperhour:req.body. priceperhour,
    }
    createRoom.push(data)
    res.send({
      message:"Room created"
     })
  }
  
  const postbooking = (req,res)=>{
    bookdata ={
     customerName: req.body. customerName,
     reservationDate: req.body. reservationDate,
     startTime: req.body.startTime,
     endTime: req.body.endTime,
     roomID:req.body. roomID
    }
   BookingRoom.push(bookdata)
   res.send({
     message:"Room Bookings"
    })
  }
  
  const getbookedroom = (req,res)=>{
    res.send({
     message:"Rooms with Booked Data",
     bookedroomdetails
    })  
  }
  
  const getbookedcustomer = (req,res)=>{
    res.send({
     message:"Rooms with Booked Data",
     bookedcustomerdetails
    })
  }
  
  const getlistofbooked =  (req,res)=>{
    res.send({
     message:"Rooms with Booked Data",
     listofbooked
    }) 
  }
  
  module.export = {
    getroom,
    postroom,
    postbooking,
    getbookedroom,
    getbookedcustomer,
    getlistofbooked
  }
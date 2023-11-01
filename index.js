const express = require('express')
const app = express()

app.use(express.json());

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

// Functions
app.get('/createRoom',(req,res)=>{
   res.send(rooms)
})

app.post('/create',(req,res)=>{
  data={
  seatsAvailable:req.body.seatsAvailable,
  amenities: req.body.amenities,
  priceperhour:req.body. priceperhour,
  }
  createRoom.push(data)
  res.send({
    message:"Room created"
   })
})

app.post('/Booking',(req,res)=>{
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
})

app.get('/bookedroomdetails',(req,res)=>{
   res.send({
    message:"Rooms with Booked Data",
    bookedroomdetails
   })  
})

app.get('/bookedcustomerdetails',(req,res)=>{
  res.send({
   message:"Rooms with Booked Data",
   bookedcustomerdetails
  })
})
 
app.get('/listofbooked',(req,res)=>{
  res.send({
   message:"Rooms with Booked Data",
   listofbooked
  }) 
})

app.listen(8006, () => console.log('server is listening to port 8006'));
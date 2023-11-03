
const express = require('express')
const roomsrouter = require('../controller/users')
const hallbooking = express.Router()

hallbooking.get('/createRoom',roomsrouter.getroom)
hallbooking.post('/create',roomsrouter.postroom)
hallbooking.post('/Booking',roomsrouter.postbooking)
hallbooking.get('/bookedroomdetails',roomsrouter. getbookedroom)
hallbooking.get('/bookedcustomerdetails',roomsrouter.getbookedcustomer)
hallbooking.get('/listofbooked',roomsrouter.getlistofbooked)

module.export = hallbooking
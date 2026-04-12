const {FlightService} = require("../services/index");    
const {SuccessCodes} = require("../utils/error-codes");


const flightService = new FlightService();

const create = async (req, res) => {
    try{
        let flightRequestData = { 
        flightNumber: req.body.flightNumber,
        airplaneID: req.body.airplaneID,
        departureAirportId: req.body.departureAirportId,
        arrivalAirportId: req.body.arrivalAirportId,
        arrivalTime: req.body.arrivalTime,
        departureTime: req.body.departureTime,
        price: req.body.price
        }
    
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: "Successfully created a flight",
            err: {}
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
                data: {},
                sucess: false,
                message:"Not able to create a flight",
                err: error

        });
    }
}

const getAll = async (req, res) => {
    try{
        const flight = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: "Successfully fetched a flight",
            err: {}
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
                data: {},
                sucess: false,
                message:"Not able to fetch the flights",
                err: error

        });
    }
}

const get = async (req, res) => {
try{
        const flight = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: "Successfully fetched a flight",
            err: {}
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
                data: {},
                sucess: false,
                message:"Not able to fetch the flights",
                err: error

        });
    }
}

module.exports = {
  create,
    getAll,
    get
}
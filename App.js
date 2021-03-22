const promptSync = require('prompt-sync');
const prompt = promptSync();
const extract = require("./utils/helpers");
const {date, licensePlate, time} = require("./utils/regexs");
const DateTime = require("./DateTime");
const LicensePlate = require("./LicensePlate");
const Car = require("./Car"); 

const strDate = prompt("Enter the date (DD-MM-YYYY): ");
const [day, month, year] = extract(strDate, date).split("-");
let strPlate = prompt("Enter the full license plate number (eg. AAC-123/AAC-0123): ");
strPlate = extract(strPlate, licensePlate);
const strHour = prompt("Enter the hour (eg. 08:00): ");
const [hour, min] = extract(strHour,time).split(":");
const dateTime = new DateTime(year, month-1, day, hour, min);
const plate = new LicensePlate(strPlate);
const car = new Car(plate, dateTime);
if(car.isAllowed()){
    console.log("The car can be on the road");
}
else{
    console.log("The car cannot be on road");
}
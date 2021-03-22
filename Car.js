class Car {
    constructor(licensePlate, dateTime){
        this.licensePlate = licensePlate;
        this.dateTime = dateTime;
    }
    isAllowed() {
        if(this.dateTime.isWeekend() || this.dateTime.isOutSchedule()){
            return true
        }
        const day =  this.dateTime.fullDate.getDay();
        if(this.licensePlate.checkLastDigit(day) == true){
            return true;
        }
        return false;
    }
}

module.exports = Car;
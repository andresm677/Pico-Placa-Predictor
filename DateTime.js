class DateTime {
    constructor(year, month, day, hour, min){
        this.fullDate = new Date(year, month, day, hour, min);
    }
    isWeekend() {
        const day = this.fullDate.getDay();
        if (day === 0 || day === 6){
            return true;
        }
        return false;
    }
    isOutSchedule() {
        const mins = this.calcTotalMins();
        if((mins >= 420 && mins <= 570) || (mins >= 960 && mins <= 1170)){ //420mins = 07:30, 570mins = 09:30, 960mins = 16:00 and 1170mins = 19:30
            return false;
        }
        return true;
    }
    calcTotalMins(){
        const hour = this.fullDate.getHours();
        const mins = this.fullDate.getMinutes(); //Calculates the number of minutes elapsed since 00:00 
        return hour * 60 + mins;
    }
}

module.exports = DateTime;
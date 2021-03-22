class LicensePlate {
    constructor(number){
        this.fullNumber = number;
    }
    getLastDigit(){
        return this.fullNumber.charAt(this.fullNumber.length - 1);
    }
    checkLastDigit(day){
        const lastDigit = parseInt(this.getLastDigit());
        const schedules = [[1,2], [3, 4], [5,6], [7,8], [9,0]]
        if(schedules[day-1].indexOf(lastDigit)=== -1 ){
            return true;
        }
        else {
            return false;
        }
    }
}




module.exports = LicensePlate;
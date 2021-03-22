const regexs = {
    licensePlate: /^([A-CE-EG-NO-Z]{1}[A-Z]{2})-([0-9]{3,4})$/g, //Regex for license plate excluding letters not assigned to any province.
    date: /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-([0-9]{4})$/g,
    time: /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/g,
}

module.exports = regexs;
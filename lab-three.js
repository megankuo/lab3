// Determine if input year is a leap year
function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
}

// Convert month to a month code for all centuries
function getMonthCode(month, year) {
    const inputMonth = month.toUpperCase();
    let code;
    switch (inputMonth) {
        case 'APR':
        case 'JUL':
            code = 0;
            break;
        case 'JAN':
        case 'OCT':
            code = 1;
            break;
        case 'MAY':
            code = 2;
            break;
        case 'AUG':
            code = 3;
            break;
        case 'FEB':
        case 'MAR':
        case 'NOV':
            code = 4;
            break;
        case 'JUN':
            code = 5;
            break;
        case 'SEP':
        case 'DEC':
            code = 6;
            break;
        default:
            console.log('Invalid month input');
    }
    if ( (year >= 1600 && year < 1700) || (year >= 2000 && year < 2100) ) {
        code += 6;
    } else if ( (year >= 1700 && year < 1800) || (year >= 2100 && year < 2200) ) {
        code += 4;
    } else if (year >= 1800 && year < 1900) {
        code += 2;
    }
    return code;
}

// Convert from weekday code to weekday name
function weekdayCodeToName(weekdayCode) {
    let weekday;
    switch (weekdayCode) {
        case 0:
            weekday = 'Saturday';
            break;
        case 1:
            weekday = 'Sunday';
            break;
        case 2:
            weekday = 'Monday';
            break;
        case 3:
            weekday = 'Tuesday';
            break;
        case 4:
            weekday = 'Wednesday';
            break;
        case 5:
            weekday = 'Thursday';
            break;
        case 6:
            weekday = 'Friday';
            break;
        default:
            console.log('Cannot determine the weekday');
    }
    return weekday;
}

// Determine weekday of input date
function getDayOfTheWeek(year, month, day) {
    // Identify last 2 digits of input year
    const yy = year % 100; //OR year.toString().substr(-2);
    // Identify month code with consideration of leap year
    let monthCode = getMonthCode(month, year);
    if (isLeapYear(year) && (month.toUpperCase() === 'JAN' || month.toUpperCase() === 'FEB')) {
        monthCode -= 1;
    }
    // Algorithm to determine what day of the week a given date is
    let weekdayCode1 = Math.floor(yy/12);
    let weekdayCode2 = yy - weekdayCode1 * 12;
    let weekdayCode3 = Math.floor(weekdayCode2/4);
    let weekdayCode4 = weekdayCode1 + weekdayCode2 + weekdayCode3 + day + monthCode;
    weekdayCode = weekdayCode4 % 7;
    return weekdayCodeToName(weekdayCode);
}

//Prints out the date and day of the week for each day in the input year
function makeCalendar(year) {
    for (d = new Date(year, 0, 1); d <= new Date(year, 11, 31) ; d.setDate(d.getDate() + 1)) {
        let month = d.getMonth() + 1;
        let date = d.getDate();
        let year = d.getFullYear();
        let weekdayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let weekday = weekdayArray[d.getDay()];
        console.log(`${month}-${date}-${year} is a ${weekday}.`)
    }
}

module.exports = {makeCalendar, getDayOfTheWeek};

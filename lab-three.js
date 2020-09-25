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
    const inputMonth = month;
    let code;
    switch (inputMonth) {
        case 'Apr':
        case 'Jul':
            code = 0;
            break;
        case 'Jan':
        case 'Oct':
            code = 1;
            break;
        case 'May':
            code = 2;
            break;
        case 'Aug':
            code = 3;
            break;
        case 'Feb':
        case 'Mar':
        case 'Nov':
            code = 4;
            break;
        case 'Jun':
            code = 5;
            break;
        case 'Sep':
        case 'Dec':
            code = 6;
            break;
        default:
            console.log('Month code error');
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

// Determine weekday of input date
function getDayOfTheWeek(year, month, day) {
    // Identify last 2 digits of input year
    const yy = year.toString().substr(-2);
    // Identify month code with consideration of leap year
    let monthCode = getMonthCode(month, year);
    if (isLeapYear(year) && (month === 'Jan' || month === 'Feb')) {
        monthCode -= 1;
    }
    // Algorithm to determine what day of the week a given date is
    let weekdayCode1 = Math.floor(yy/12);
    let weekdayCode2 = yy - weekdayCode1 * 12;
    let weekdayCode3 = Math.floor(weekdayCode2/4);
    let weekdayCode4 = weekdayCode1 + weekdayCode2 + weekdayCode3 + day + monthCode;
    weekdayCode = weekdayCode4 % 7;
    let weekday;
    switch (weekdayCode) {
        case 0:
            weekday = 'Sat';
            break;
        case 1:
            weekday = 'Sun';
            break;
        case 2:
            weekday = 'Mon';
            break;
        case 3:
            weekday = 'Tue';
            break;
        case 4:
            weekday = 'Wed';
            break;
        case 5:
            weekday = 'Thu';
            break;
        case 6:
            weekday = 'Fri';
            break;
        default:
            console.log('Weekday code error');
    }
    return weekday;
}

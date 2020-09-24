# lab3

Part 1: Functions and Requires
Create a file named “lab-three.js” and inside, create a function that takes three parameters called “getDayOfTheWeek(year, month, day)”.
 
Write this function yourself using the following algorithm to determine which day of the week any date is:
 
This function returns the day of the week (e.g. "Wednesday") for a specified date (e.g. October 31, 2019).
It must make use of another function you write whose signature is:
function isLeapYear(year) (see: http://en.wikipedia.org/wiki/Leap_year)
Which returns true (e.g. for 1996, 2000, 2012, etc) or false (e.g. for 1900, 2011, etc) depending on whether a year is a leap year or not.
 

Here is the algorithm to determine what day of the week a given date is:
Example dates:   	August 16, 1989 	and 	March 20, 1950
Step 1:       	Only look at the last two digits of the year and determine how many 12s fit in it
                                	7 12s in 89	                    	4 12s in 50
Step 2:       	Look at the remainder of this division:
                                	89 – 7 * 12 = 5                 	50 – 4 * 12 = 2
Step 3:       	How many 4s fit into that remainder:
                                	1 four in 5 	                    	0 fours in 2
Step 4:       	Add the day of the month:
                                	16 for the 16th                 	20 for the 20th
Step 5:       	Add the month code:
                                	3 for August                     	4 for March
Jan  	= 1
Feb 	= 4
Mar    = 4
Apr 	= 0
May    = 2
Jun  	= 5
Jul   	= 0
Aug 	= 3
Sep 	= 6
Oct 	= 1
Nov    = 4
Dec 	= 6
 

Step 6:       	Add all of the above numbers, then mod by 7:
                                	7 + 5 + 1 + 16 + 3 = 32   	4 + 2 + 0 + 20 + 4 = 30
                                	32 % 7 = 4 	                    	30 % 7 = 2
This is your day of the week, as follows:
Sat = 0
Sun = 1
Mon = 2
Tue = 3
Wed = 4
Thu = 5
Fri = 6
August 16, 1989             	March 20, 1950
        	Wednesday                     	Monday
NOTE: some dates require special offsets:
January and February dates in leap years: subtract 1 from step 5
Dates in the 1600s: add 6 to step 5
Dates in the 1700s: add 4 to step 5
Dates in the 1800s: add 2 to step 5
Dates in the 2000s: add 6 to step 5
Dates in the 2100s: add 4 to step 5
 
Create a third function called makeCalendar() which prints out the date and day of the week using loops, for each day in 2020. Here’s a sample run with the year 2019:
1-1-2019 is a tuesday.
1-2-2019 is a wednesday.
1-3-2019 is a thursday.
1-4-2019 is a friday.
1-5-2019 is a saturday.
1-6-2019 is a sunday.
1-7-2019 is a monday.
1-8-2019 is a tuesday.
1-9-2019 is a wednesday.
…
12-22-2019 is a sunday.
12-23-2019 is a monday.
12-24-2019 is a tuesday.
12-25-2019 is a wednesday.
12-26-2019 is a thursday.
12-27-2019 is a friday.
12-28-2019 is a saturday.
12-29-2019 is a sunday.
12-30-2019 is a monday.
12-31-2019 is a tuesday.
Create a second file called main.js which (a) requires your lab-three.js file, (b) invokes the makeCalendar() function, resulting in a listing of all the dates and days of the week for 2020 as above, and (c) has another method called “getDayOfTheWeekForUserDate() which prints the day of the week for the month, day, and year inputted by the user; use readline-sync and its .question method to get a date from the user via the keyboard. Example usage:
var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
 
// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');
 


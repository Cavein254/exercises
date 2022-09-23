/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints

All input times are valid
Sample Input

07:05:45PM
Sample Output

19:05:45
*/
function timeConversion(s) {
  let newStr = s.substring(0, s.length - 2);
  let lastStr = s.substring(s.length - 2, s.length);
  let aDay = "12/12/2022 ";
  let compStr = new Date(aDay + newStr + " " + lastStr);
  //holders
  let hours;
  let minutes;
  let seconds;
  //check hours
  if (compStr.getHours < 10) {
    hours = "0" + compStr.getHours();
  } else {
    if (compStr.getHours() < 10) {
      hours = "0" + compStr.getHours();
    } else {
      hours = compStr.getHours();
    }
  }

  //check minutes

  if (compStr.getMinutes() < 10) {
    minutes = "0" + compStr.getMinutes();
  } else {
    minutes = compStr.getMinutes();
  }

  //check seconds
  if (compStr.getSeconds() < 10) {
    seconds = "0" + compStr.getSeconds();
  } else {
    seconds = compStr.getSeconds();
  }

  console.log(hours + ":" + minutes + ":" + seconds);
}

timeConversion("07:05:45PM");

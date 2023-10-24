/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
  
*/
enum daysOfTheWeek {
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
  THIRSDAY = "Thirsday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
  SUNDAY = "Sunday",
}
function isWeekend(day: daysOfTheWeek) {
  if (day === daysOfTheWeek.SATURDAY || day === daysOfTheWeek.SUNDAY) {
    return true;
  } else {
    return false;
  }
}

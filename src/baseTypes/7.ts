/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfTheWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = " Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const isWeekend = (day: DaysOfTheWeek): boolean => {
  return day === DaysOfTheWeek.Saturday || day === DaysOfTheWeek.Sunday;
};

function hoursPerDay(numberOfPages, pagesPerHour, numberOfDays) {
  let totalTime = numberOfPages / pagesPerHour;
  let dailyReading = totalTime / numberOfDays;
  console.log(dailyReading);
}

hoursPerDay(212, 20, 2);

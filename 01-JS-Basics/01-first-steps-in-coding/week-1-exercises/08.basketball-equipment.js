function expenses(yearlyPrice) {
  let shoesPrice = yearlyPrice - yearlyPrice * 0.4;
  let clothesPrice = shoesPrice - shoesPrice * 0.2;
  let ballPrice = clothesPrice / 4;
  let accessoriesPrice = ballPrice / 5;
  let totalPriceYearly =
    yearlyPrice + shoesPrice + clothesPrice + ballPrice + accessoriesPrice;
  console.log(totalPriceYearly);
}

expenses(365);

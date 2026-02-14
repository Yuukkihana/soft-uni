function foodPrice(chickenMenu, fishMenu, veggieMenu) {
  let priceChickenMenu = chickenMenu * 10.35;
  let priceFishMenu = fishMenu * 12.4;
  let priceVeggieMenu = veggieMenu * 8.15;
  let totalMenuPrice = priceChickenMenu + priceFishMenu + priceVeggieMenu;
  let dessertPrice = totalMenuPrice * 0.2;
  let finalPrice = totalMenuPrice + dessertPrice + 2.5;

  console.log(finalPrice);
}

foodPrice(2, 4, 3);

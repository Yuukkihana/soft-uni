function totalPrice(pens, markers, cleanser, discount) {
  let pricePens = pens * 5.8;
  let priceMarkers = markers * 7.2;
  let priceCleanser = cleanser * 1.2;
  let totalPrice = pricePens + priceMarkers + priceCleanser;
  let totalDiscount = totalPrice * (discount / 100);
  let finalPrice = totalPrice - totalDiscount;
  console.log(finalPrice);
}

totalPrice(2, 3, 4, 25);

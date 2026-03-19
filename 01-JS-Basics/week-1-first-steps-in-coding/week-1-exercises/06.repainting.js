function renovationPrice(nylon, paint, diluent, hours) {
  let priceNylon = (nylon + 2) * 1.5;
  let pricePaint = (paint + paint * 0.1) * 14.5;
  let priceDiluent = diluent * 5;
  let priceMaterials = priceNylon + pricePaint + priceDiluent + 0.4;
  let totalPrice = priceMaterials + hours * (priceMaterials * 0.3);
  console.log(totalPrice);
}

renovationPrice(10, 11, 4, 8);

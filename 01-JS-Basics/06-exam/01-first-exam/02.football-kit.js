function footballKit(priceTshirt, priceForBall) {
    let priceShorts = priceTshirt * 0.75;
    let priceSocks = priceShorts * 0.20;
    let priceShoes = (priceShorts + priceTshirt) * 2;
    let priceWithoutDiscount = priceShoes + priceTshirt + priceSocks + priceShorts;
    let priceAfterDiscount = priceWithoutDiscount - (priceWithoutDiscount * 0.15);

    if (priceAfterDiscount >= priceForBall){
        console.log(`Yes, he will earn the world-cup replica ball! 
His sum is ${(priceAfterDiscount).toFixed(2)} lv.`)
    } else {
        console.log(`No, he will not earn the world-cup replica ball. 
He needs ${(priceForBall - priceAfterDiscount).toFixed(2)} lv. more.`);
    }
}

footballKit(55, 310);

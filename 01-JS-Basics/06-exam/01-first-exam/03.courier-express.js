function courier(weight, deliveryType, distance){
    if (deliveryType == "standard") {
        if (weight < 1){
            let pricePerKm = 0.03;
            let finalPrice = (distance * pricePerKm).toFixed(2);
            console.log(`The delivery of your shipment with weight of ${(weight).toFixed(3)} kg. would cost ${finalPrice} lv.`)
        } else if (weight >= 1 & weight < 10){
            pricePerKm = 0.05;
            finalPrice = (distance * pricePerKm).toFixed(2);
            console.log(`The delivery of your shipment with weight of ${(weight).toFixed(3)} kg. would cost ${finalPrice} lv.`)
        } else if (weight >= 10 & weight < 40){
            pricePerKm = 0.10;
            finalPrice = (distance * pricePerKm).toFixed(2);
            console.log(`The delivery of your shipment with weight of ${(weight).toFixed(3)} kg. would cost ${finalPrice} lv.`)
        } else if (weight >= 40 & weight < 90){
            pricePerKm = 0.15;
            finalPrice = (distance * pricePerKm).toFixed(2);
            console.log(`The delivery of your shipment with weight of ${(weight).toFixed(3)} kg. would cost ${finalPrice} lv.`)
        } else if (weight >= 90 & weight < 150){
            pricePerKm = 0.20;
            finalPrice = (distance * pricePerKm).toFixed(2);
            console.log(`The delivery of your shipment with weight of ${(weight).toFixed(3)} kg. would cost ${finalPrice} lv.`)
        } 
    } else if(deliveryType == "express"){
        if (weight < 1){
            let pricePerKm = 0.03;
            let finalPrice = distance * pricePerKm;
            let extraPerKg = pricePerKm * 0.8;
            let extraPerKm = weight * extraPerKg;
            let totalExtra = distance *  extraPerKm;
            let totalPrice = finalPrice + totalExtra;
            console.log(`The delivery of your shipment with weight of ${(weight).toFixed(3)} kg. would cost ${(totalPrice).toFixed(2)} lv.`)
        } else if (weight >= 1 & weight < 10){
            pricePerKm = 0.03;
            finalPrice = distance * pricePerKm;
            extraPerKg = pricePerKm * 0.4;
            extraPerKm = weight * extraPerKg;
            totalExtra = distance *  extraPerKm;
            totalPrice = finalPrice + totalExtra;
            console.log(`The delivery of your shipment with weight of ${(weight).toFixed(3)} kg. would cost ${(totalPrice).toFixed(2)} lv.`)
        } else if (weight >= 10 & weight < 40){
            pricePerKm = 0.10;
            finalPrice = distance * pricePerKm;
            extraPerKg = pricePerKm * 0.05;
            extraPerKm = weight * extraPerKg;
            totalExtra = distance *  extraPerKm;
            totalPrice = finalPrice + totalExtra;
            console.log(`The delivery of your shipment with weight of ${(weight).toFixed(3)} kg. would cost ${(totalPrice).toFixed(2)} lv.`)
        } else if (weight >= 40 & weight < 90){
            pricePerKm = 0.15;
            finalPrice = distance * pricePerKm;
            extraPerKg = pricePerKm * 0.02;
            extraPerKm = weight * extraPerKg;
            totalExtra = distance *  extraPerKm;
            totalPrice = finalPrice + totalExtra;
            console.log(`The delivery of your shipment with weight of ${(weight).toFixed(3)} kg. would cost ${(totalPrice).toFixed(2)} lv.`)
        } else if (weight >= 90 & weight < 150){
            pricePerKm = 0.20;
            finalPrice = distance * pricePerKm;
            extraPerKg = pricePerKm * 0.01;
            extraPerKm = weight * extraPerKg;
            totalExtra = distance *  extraPerKm;
            totalPrice = finalPrice + totalExtra;
            console.log(`The delivery of your shipment with weight of ${(weight).toFixed(3)} kg. would cost ${(totalPrice).toFixed(2)} lv.`)
        } 
    }
}

courier(87, "express", 130);
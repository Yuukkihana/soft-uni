function aquarium(length, width, height, percent){
    let volume = (length * width * height) * 0.001;
    let totalWater = volume - ((volume * percent) / 100);
    console.log(totalWater);
}

aquarium(85, 75, 47, 17);
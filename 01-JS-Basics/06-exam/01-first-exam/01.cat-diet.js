function totalCalories(fat, protein, carbs, totalCals, waterPercentage){
    let grFats = ((fat * totalCals) / 100) / 9;
    let grProtein = ((protein * totalCals) / 100) / 4;
    let grCarbs = ((carbs * totalCals) / 100) / 4;
    let totalWeight =  grCarbs + grFats + grProtein;
    let calsPerGram = totalCals / totalWeight;
    let caloriesFinal = ((100 - waterPercentage) * calsPerGram) / 100;

    console.log((caloriesFinal).toFixed(4));
}

totalCalories(60, 25, 15, 2500, 60);
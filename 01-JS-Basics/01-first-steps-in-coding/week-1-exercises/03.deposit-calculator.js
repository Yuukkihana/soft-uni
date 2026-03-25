function calculator(deposit, time, gpr) {
  let interest = deposit * (gpr / 100);
  let monthlyInterest = interest / 12;
  let totalSum = deposit + time * monthlyInterest;
  console.log(totalSum);
}

calculator(200, 3, 5.7);

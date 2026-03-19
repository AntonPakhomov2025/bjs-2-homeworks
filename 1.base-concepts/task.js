"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  if (a === 0) {
    console.log("а равно нулю. Уравнение не может быть решено");
  } else {
    let discr = Math.pow(b, 2) - 4 * a * c;
    if (discr < 0) {
      console.log("Корней нет");
      arr = [];
    } else if (discr === 0) {
      let xOne = -b / (2 * a);
      arr = [xOne];
    } else if (discr > 0) {
      let xOne = (-b + Math.sqrt(discr)) / (2 * a);
      let xTwo = (-b - Math.sqrt(discr)) / (2 * a);
      arr = [xOne, xTwo];
    }
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  amount = amount - contribution;
  let payment = amount * (percent + percent / (Math.pow(1 + percent, countMonths) - 1));
  let summ = payment * countMonths;
  return Number(summ.toFixed(2));
}

class Calculator {
  sum (number1, number2) {
    return parseInt(number1) + parseInt(number2);
  }
}

module.exports = new Calculator();

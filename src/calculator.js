class Calculator {
  sum(number1, number2) {
    return parseInt(number1, 10) + parseInt(number2, 10);
  }
}

module.exports = new Calculator();

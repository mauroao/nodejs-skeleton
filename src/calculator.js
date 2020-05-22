class Calculator {
  sum (number1, number2) {
    return parseInt(number1) + parseInt(number2);
  }
}

const createCalculator = () => new Calculator();

module.exports = createCalculator;

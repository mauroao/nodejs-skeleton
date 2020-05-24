const calculator = require('./calculator');
const { readlineAsync } = require('./std-input-handler');

const run = async () => {
  console.log('Wellcome to Calculator Application!');
  console.log('Type number 1:');
  const number1 = await readlineAsync();
  console.log('Type number 2:');
  const number2 = await readlineAsync();
  const result = calculator.sum(number1, number2);
  console.log(`${number1} + ${number2} = ${result}`);
};

run();

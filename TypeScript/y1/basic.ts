const add = (
  n1: number,
  n2: number,
  showResult: boolean,
  resultStr: string
) => {
  const result = n1 + n2;
  if (showResult) console.log(resultStr + result);
  return result;
};

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultString = "Result is: ";

const result = add(number1, number2, printResult, resultString);

console.log("result is ", result);

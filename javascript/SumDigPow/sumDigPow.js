function sumDigPow(a, b) {
  // Your code here
  const result = [];
  for (let i = a; i <= b; i++) {
    if (eureka(i)) {
      result.push(i);
    }
  }

  return result;
}

function eureka(number) {
  const stringify = '' + number;
  const val = stringify.split('').reduce(function (acum, curr, index) {
    return parseInt(acum) + Math.pow(parseInt(curr), index + 1);
  });
  return val == number;
}

function assertEquals(expected, actual) {
  console.log(expected.length === actual.length && expected.every(function (value, index) { return value === actual[index] }),
    expected, actual);
}

function runTests() {
  assertEquals([1, 2, 3, 4, 5, 6, 7, 8, 9], sumDigPow(1, 10));
  assertEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 89], sumDigPow(1, 100));
}

runTests();
function bouncingBall(h, bounce, window) {
  const valid = validate(h, bounce, window);
  if (!valid) {
    return -1;
  }
  let n = 1;
  let currentH = h * bounce;
  while (currentH > window) {
    currentH = currentH * bounce;
    n += 2;
  }
  return n;
}

function validate(h,  bounce,  window) {
  return h > 0 && bounce > 0 && bounce < 1 && h > window;
}

function assertEquals(expected, actual) {
  console.log(expected===actual, expected, actual);
}

function runTests() {
  assertEquals(3, bouncingBall(3.0, 0.66, 1.5));
  assertEquals(15, bouncingBall(30.0, 0.66, 1.5));
  assertEquals(-1, bouncingBall(-1.0, 0.66, 1.5));
  assertEquals(-1, bouncingBall(30.0, -0.66, 1.5));
  assertEquals(-1, bouncingBall(30.0, 1.66, 1.5));
  assertEquals(-1, bouncingBall(30.0, 1.66, 31.5));
}

runTests();
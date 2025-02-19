function willSuccess(marks) {
  let passCount = 0;
  let failCount = 0;
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  for (let mark of marks) {
    if (mark >= 50) {
      passCount++;
    } else {
      failCount++;
    }
  }

  return passCount > failCount;
}
console.log(willSuccess([60, 70, 80, 40, 30])); // true
console.log(willSuccess([48, 48, 92, 100])); // false
console.log(willSuccess([48, 48, 50, 50, 100])); // true
console.log(willSuccess([])); // false
console.log(willSuccess([90])); // true
console.log(willSuccess([90, 99, 87, 48, 34, 49])); // false
console.log(willSuccess("100 , 100")); // "Invalid"
console.log(willSuccess(90)); // "Invalid"
console.log(willSuccess({ key: "value" })); // "Invalid"

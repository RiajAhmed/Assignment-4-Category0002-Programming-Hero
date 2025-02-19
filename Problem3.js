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

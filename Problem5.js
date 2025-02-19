function calculateSleepTime(times) {
  if (!Array.isArray(times) || typeof times == "number") {
    return "Invalid";
  }

  let totalSeconds = 0;
  for (let time of times) {
    totalSeconds = totalSeconds + time;
  }

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { hour: hours, minute: minutes, second: seconds };
}

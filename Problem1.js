// Problem 1
function calculateVAT(price) {
  let vatAmount = (price * 7.5) / 100;
  if (typeof price !== "number" || price <= 0) {
    return "Invalid";
  }
  return vatAmount;
}
const finalPrice = calculateVAT(500);
console.log(finalPrice);

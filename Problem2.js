// Problem 2
function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }

  if (contact.length !== 11) {
    return false;
  }

  if (!contact.startsWith("01")) {
    return false;
  }

  if (contact.includes(" ")) {
    return false;
  }

  return true;
}
const finalContact = validContact(true);
console.log(finalContact);

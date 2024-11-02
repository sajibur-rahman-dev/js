function convertNumberToString(number) {
  return number
    .toString()
    .replace(/\d/g, (match) => String.fromCharCode(2534 + parseInt(match))); //
}

Array(10)
  .fill(3)
  .map((item) => console.log(item));

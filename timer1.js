const args = process.argv.slice(2);

let delay;

for (const element of args) {
  delay = element*1000;
  if (Number.isInteger(delay) && delay > 0) {
    setTimeout(() => process.stdout.write('\x07'), delay)}
};
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const description = `Welcome!\n- Press 'b' for an immediate beep.\n
- Press a digit from 1 to 9 to set a delayed timer.\n
- Use ctrl+c to exit the program.\n
Have fun!\n`;

rl.question(`${description}`), (input) => {
  if (Number.isInteger(input) && input >= 1 && input <= 9) {
    let input = input*1000;
    setTimeout(() => process.stdout.write('\x07'), input);
  }
  rl.close();
}
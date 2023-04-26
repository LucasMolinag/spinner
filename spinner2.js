process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerThings = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

let delay = 100
for (let i = 0; i < spinnerThings.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r ${spinnerThings[i]}    `)
  }, delay);
  delay += 200
}
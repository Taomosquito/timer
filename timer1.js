let delay = [];

for (let i = 2; i < process.argv.length; i++) {
  delay.push(Number(process.argv[i]));
  setTimeout(() => {
    process.stdout.write("\x07");
  }, delay[0] * 1000);

  setTimeout(() => {
    process.stdout.write("\x07");
  }, delay[1] * 1000);

  setTimeout(() => {
    process.stdout.write("\x07");
  }, delay[2] * 1000);

  setTimeout(() => {
    process.stdout.write("\x07");
  }, delay[3] * 1000);

  setTimeout(() => {
    process.stdout.write("\x07");
  }, delay[4] * 1000);
}
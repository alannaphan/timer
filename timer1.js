const arg = process.argv.slice(2);

const timer = (arr) => {
  arr.sort((a, b) => a - b);
  for (let time of arr) {
    if (time < 0 || isNaN(time)) {
      break;
    } else {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, 1000 * time);
    }
  }
};

timer(arg);

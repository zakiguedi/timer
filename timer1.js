const args = process.argv.slice(2);
args.forEach((alarm) => {
  const time = parseInt(alarm);

  if (isNaN(time) || time < 0) {
  
    return;
  }
  setTimeout(() => {
    process.stdout.write('\x07'); 
    console.log(`Alarm! ${time} seconds have passed.`);
  }, time * 1000);
});
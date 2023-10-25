// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line argument.

// Edge-cases:

// Edge-case # 1: No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.

// Edge-case # 2: An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.

// Edge-case # 3: An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

// Slicing first two elements from process.argv output:
const args = process.argv.slice(2);
// Sorting the array:
const sortedArgs = args.sort((a, b) => a - b);

const alarmClock = function() {
  // Edge-case 1:
  if (sortedArgs.length === 0) {
    return;
  }
 
  // Loop through sorted array:
  for (let i = 0; i < sortedArgs.length; i++) {
    // Convert to number:
    const timeInSeconds = Number(sortedArgs[i]);
    // Edge-case # 2 and 3: Not a number or a negative number
    if (isNaN(timeInSeconds) || timeInSeconds < 0) {
      // Skip iteration:
      continue;
    }
    // Convert to milliseconds as setTImeout uses milliseconds:
    const timeInMilliseconds = timeInSeconds * 1000;

    // Set individual timeouts for each beep:
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timeInMilliseconds);
  }
};

alarmClock();
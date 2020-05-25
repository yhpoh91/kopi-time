const TimeConverter = require('./timeconverter');

class TimeTaken {
  constructor(name, print = false) {
    this.name = name;
    this.print = print;

    this.startTime = new Date().getTime();
  };

  calculate() {
    const stopTime = new Date().getTime();
    const difference = stopTime - this.startTime;

    if (this.print) {
      const timeText = TimeConverter.convert(difference);
      console.log(`Time Taken (${this.name}) - ${timeText}`);
    }

    return difference;
  };
};

module.exports = TimeTaken;

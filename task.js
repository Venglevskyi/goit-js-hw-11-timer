class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  timer() {
    this.timerId = setInterval(() => {
      const futureTime = Date.parse(this.targetDate);
      const deltaTime = futureTime - Date.now();
      updateTimer(deltaTime);
      if (deltaTime <= 0) {
        clearInterval(this.timerId);
      }
    }, 1000);
  }
}

function updateTimer(delta) {
  const time = delta;
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

const Timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2019")
});

const refs = {
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]')
};

Timer.timer();

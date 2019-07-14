export function StopWatch() {
  let running = false;
  let startDate = null;
  let endDate = null;

  this.start = function() {
    if (running) throw new Error("Stopwatch already started");
    running = true;
    startDate = Date.now();
  };
  this.stop = function() {
    if (!running) throw new Error("Stopwatch already stopped");
    running = false;
    endDate = Date.now();
  };
  this.reset = function() {
    running = false;
    startDate = null;
    endDate = null;
  };
  Object.defineProperty(this, "duration", {
    get: function() {
      return (endDate - startDate) / 1000;
    }
  });
}

StopWatch.prototype.toString = function() {
  return "Duration is: " + this.duration;
};

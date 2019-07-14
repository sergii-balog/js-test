import { StopWatch } from "./stopWatch.js";

export function Tester() {
  const testStopWatch = function() {
    const sw = new StopWatch();
    sw.start();
    alert("Module");
    sw.stop();
    console.log(sw.toString());
  };

  this.test = function() {
    testStopWatch();
  };
}

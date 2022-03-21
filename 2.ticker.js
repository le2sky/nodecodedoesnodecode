import { EventEmitter } from "events";

function ticker(num, callback) {
  let tickCount = 0;
  let timePassed = 0;
  const emitter = new EventEmitter();

  setTimeout(function recursiveTick() {
    if (timePassed >= num) return process.nextTick(() => callback(tickCount));

    emitter.emit("tick", "tock");

    setTimeout(recursiveTick, 50);

    process.nextTick(() => {
      timePassed += 50;
    });

    process.nextTick(() => {
      tickCount += 1;
    });
  }, 50);

  return emitter;
}

ticker(900, (tickCount) => {
  console.log(`${tickCount}번 만큼 째깍 했습니다.`);
}).on("tick", (message) => console.log(message));

import { EventEmitter } from "events";

const DivisibleBy5Error = new Error("Timestamp divisible by 5");

function ticker(num, callback) {
  let tickCount = 0;
  let timePassed = 0;
  let now;
  let isFirstCall = true;
  let isFirstFail = false;
  const emitter = new EventEmitter();
  process.nextTick(() => recursiveTick());
  setTimeout(recursiveTick, 50);
  return emitter;

  function recursiveTick() {
    if (timePassed >= num) return process.nextTick(() => callback(tickCount));
    if (isFirstFail) return;
    if (new Date() % 5 === 0) {
      isFirstFail = isFirstCall ? true : false;
      emitter.emit("error", DivisibleBy5Error);
      return process.nextTick(() => callback(DivisibleBy5Error, tickCount));
    }

    emitter.emit("tick", "tock");
    if (isFirstCall) {
      process.nextTick(() => {
        tickCount += 1;
      });
      isFirstCall = false;
      return;
    } else setTimeout(recursiveTick, 50);

    process.nextTick(() => {
      timePassed += 50;
    });

    process.nextTick(() => {
      tickCount += 1;
    });
  }
}

ticker(900, (err, tickCount) => {
  if (err) {
    console.error(err);
  }
  console.log(`${tickCount}번 만큼 째깍 했습니다.`);
})
  .on("tick", (message) => console.log(message))
  .on("error", (err) => {
    //console.error(`에러 발생 : ${err.message} `);
  });

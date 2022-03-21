import { EventEmitter } from "events";
import { readFile } from "fs";

class FindRegex extends EventEmitter {
  constructor(regex, files) {
    super();
    this.regex = regex;
    this.files = files;
  }

  find() {
    setTimeout(() => {
      this.emit("start", this.files);
    }, 0);

    for (const file of this.files) {
      readFile(file, "utf-8", (err, content) => {
        if (err) {
          return this.emit("error", err);
        }
        this.emit("fileread", file);

        const match = content.match(this.regex);
        if (match) {
          match.forEach((elem) => this.emit("found", file, elem));
        }
      });
    }
    return this;
  }
}

const findRegexInstance = new FindRegex(/hello \w+/, [
  "fileA.txt",
  "fileB.json",
]);
findRegexInstance
  .find()
  .on("found", (file, match) =>
    console.log(`Matched "${match}" in file ${file}`)
  )
  .on("error", (err) => console.err(`Error emitted ${err.message}`))
  .on("fileread", (file) => console.log(`${file} was read`))
  .on("start", (files) => console.log(`starts with files ${files}`));

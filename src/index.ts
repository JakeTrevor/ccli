import boxen from "boxen";
import { program } from "commander";

import { createInterface } from "readline/promises";
import { dothething } from "./converter";

const a = createInterface(process.stdin, process.stdout);
program
  .name("colour cli")
  .description("colour converter for the command line")
  .version("1.0.1")
  .action(async () => {
    console.log(boxen("welcome to CCLI"));
    console.log("Convert from:");
    const from = await a.question("> ");

    console.log("Convert to:");
    const to = await a.question("> ");

    while (true) {
      console.log("colour:");
      const col = await a.question("> ");

      if (!col) return;

      const res = dothething(from, to, col);
      console.log(res);
    }
  });

program.parse();

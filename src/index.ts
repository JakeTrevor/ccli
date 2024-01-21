import boxen from "boxen";
import { program } from "commander";

import { dothething } from "./converter";
import prompts from "prompts";

const colours = ["rgb", "hsl", "hex"].map((e) => ({ title: e }));

program
  .name("colour cli")
  .description("colour converter for the command line")
  .version("1.0.1")
  .action(async () => {
    console.log(boxen("welcome to CCLI"));
    console.log("Convert from:");
    const { from, to } = await prompts([
      {
        name: "from",
        message: "Convert from ",
        type: "autocomplete",
        choices: colours,
      },
      {
        name: "to",
        message: "to ",
        type: "autocomplete",
        choices: colours,
        format: (x, y) => x,
      },
    ]);

    while (true) {
      console.log("colour:");
      const { colour } = await prompts({
        type: "text",
        name: "colour",
        message: "",
      });

      const res = dothething(from, to, colour);
      console.log(res);
    }
  });

program.parse();

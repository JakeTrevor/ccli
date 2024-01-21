import boxen from "boxen";
import { program } from "commander";
import kleur from "kleur";
import { doTheThing } from "./converter";
import prompts from "prompts";

const colours = ["rgb", "hsl", "hex"].map((e) => ({ title: e }));

program
  .name("colour cli")
  .description("colour converter for the command line")
  .version("1.0.1")
  .action(async () => {
    const message = `welcome ${kleur.white("to")} ${kleur.bold().cyan("CCLI")}`;

    console.log(
      boxen(message, {
        padding: 1,
        borderStyle: "bold",
        textAlignment: "center",
        fullscreen: (width, _) => [width, NaN],
      })
    );

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
        format: (x, _) => x,
      },
    ]);

    while (true) {
      console.log();
      const { colour } = await prompts({
        type: "text",
        name: "colour",
        message: "colour",
      });

      if (colour === ":q") break;

      const res = doTheThing(from, to, colour);
      console.log(res);
    }

    console.log();
  });

program.parse();

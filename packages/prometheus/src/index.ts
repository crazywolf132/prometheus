#! /usr/bin/env node

import commands from "@commands";
import { Command } from "@types";
import { Command as Commander } from "commander";
import { logLogo } from "./utils/logLogo";

(async () => {
  const program = new Commander();

  commands.forEach((command: Command) => {
    const newCommand = program.command(command.name);
    newCommand.description(command.description);

    (command.options ?? []).forEach((option: string[]) => {
      const [_inter, description = "", defaultValue = "", required = false] = option;
      // @ts-ignore
      if (required) newCommand.requiredOption(_inter, description, defaultValue);
      else newCommand.option(_inter, description, defaultValue);
    });
    (command.arguments ?? []).forEach((argument: string[]) => {
      const [flags, description = ""] = argument;
      // @ts-ignore
      newCommand.argument(flags, description);
    });

    newCommand.action((...all: unknown[]) => {
      logLogo();
      command.action(...all);
    });
  });

  program.parse();
})();

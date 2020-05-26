import minimist from "minimist";

import { Service } from "./Service";

import { builtinServiceCommandName, ProjectConfig } from "./../definitions";

const service = new Service(process.cwd(), {});

const rawArgv: string[] = process.argv.slice(2);
const args = minimist(rawArgv);
const command = args._[0] as builtinServiceCommandName;

service.run(command, args, rawArgv).catch((err: Error) => {
  console.error(err);
  process.exit(1);
});

export function createProjectConfig(params: Partial<ProjectConfig>): Partial<ProjectConfig> {
  return params;
}

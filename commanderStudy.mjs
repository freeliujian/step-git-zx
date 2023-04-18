#! /usr/bin/env node

import { program } from "commander";
import pkg  from './package.json' assert { type: 'json' };

program.version(pkg.version);

program
  .option('-t --test [testMessage...]', '测试注册指令', '测试注册指令')
  .option('-tt|--testt [s]', '测试注册指令')
  .option('--no-f --no-file', '测试返回值为false')
  .requiredOption('-l --lli <value>', '必填指令','必须有值')


program.parse(process.argv);

const options = program.opts();
console.log(program.getOptionValue('test'));
console.log(options);




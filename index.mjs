#! /usr/bin/env node

import { program } from "commander";
import { $ } from 'zx';

program.
  name('test').
  option('-g --git [commitMessage]').
  action(async (value) => {
    console.log(value)
    if (value.git) {
      await $`git add .`;
      await $`git commit -m "${value.git}"`;
      await $`git pull origin master`;
      await $`git push origin master`;
    }
  })
  

program.parse();


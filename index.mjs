#! /usr/bin/env node

import { program } from "commander";
import { $ } from 'zx';

const $$ = (value) => {
  $(value, { shell:true});
}

program.
  name('test').
  option('-g --git').
  action(async (value) => {
    if (value.git) {
      await $`git add .`;
      await $`git commit -m "xxx"`;
      await $`git pull origin master`;
      await $`git push origin master`;
    }
  })
  

program.parse();


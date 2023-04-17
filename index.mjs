#! /usr/bin/env node

import { program } from "commander";
import { $ } from 'zx';

const autoGit = async (branchName, commitMessage) => {
    await $`git add .`;
    await $`git commit -m "${commitMessage}"`;
    await $`git pull origin ${(branchName)?branchName:'master'}`;
    await $`git push origin  ${(branchName)?branchName:'master'}`;
};

program.
  name('gitSubmit').
  description('使用zx写git的shell脚本自动push代码').
  option('-g,  --git  [commitMessage]').
  option('-b --branch [branchName').
  action(async (value) => {
      console.log(value)
    if (value.git) {
      autoGit(value?.branchName, value.git);
    }
  })

  // program.name('')

  

program.parse();


#! /usr/bin/env node

import { program } from "commander";
import { $ } from 'zx';

const autoGit = async (branchName, commitMessage, fileName) => {
    await $`git add ${fileName}`;
    await $`git commit -m "${commitMessage}"`;
    await $`git pull origin ${branchName}`;
    await $`git push origin  ${branchName}`;
};

program.
  name('gitSubmit').
  description('使用zx写git的shell脚本自动push代码').
  option('-f --file [fileName]').
  option('-g,  --git  <commitMessage>').
  option('-b --branch [branchName]').
  argument('[ls]').

  action(async (value, option) => {
    console.log(value,option)
    if (option.git) {
      const { git, branchName = 'master', file = '.' } = option;
      autoGit(branchName, git, file);
    }
    if (value) {
      $`${value}`
    }
    return
  });
   
program.parse(process.argv)




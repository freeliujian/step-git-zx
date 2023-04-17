#! /usr/bin/env node

import { program } from "commander";
import { $ } from 'zx';

const autoGit = async (branchName, commitMessage, fileName) => {
    await $`git add ${(fileName)?fileName:'.'}`;
    await $`git commit -m "${commitMessage}"`;
    await $`git pull origin ${(branchName)?branchName:'master'}`;
    await $`git push origin  ${(branchName)?branchName:'master'}`;
};

program.
  name('gitSubmit').
  description('使用zx写git的shell脚本自动push代码').
  option('-f --file [fileName]').
  option('-g,  --git  <commitMessage>').
  option('-b --branch [branchName').
  argument('[ls]').
  action(async (_value, output) => {
    console.log(output)
    if (output.git) {
     autoGit(output?.branchName, output.git, output.file);
    }
    return
  });
   
program.parse(process.argv)


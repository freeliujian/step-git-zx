#! /usr/bin/env node

import { program } from "commander";
import pkg  from './package.json' assert { type: 'json' };
import { $ } from 'zx';

const autoGit = async (branchName, commitMessage, fileName) => {
    await $`git add ${fileName}`;
    await $`git commit -m "${commitMessage}"`;
    await $`git pull origin ${branchName}`;
    await $`git push origin  ${branchName}`;
};

program.version(pkg.version);

program.
  name('gitSubmit').
  description('使用zx写git的shell脚本自动push代码').
  command('git').
  argument('<branchName>', 'branch name').
  argument('<commitMessage>', 'commit message').
  argument('<fileName>', 'file name').
  //arguments('<branchName>|<commitMessage>|<fileName>').
  action((branchName, commitMessage, fileName) => {
    if (branchName, commitMessage, fileName) {
      autoGit(branchName, commitMessage, fileName)
    }
  })


program.parse(process.argv);




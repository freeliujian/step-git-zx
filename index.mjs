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
  option('-b --branch [branchName]', "master").
  option('-f --file [fileName]','需要保存的文件名字', '.').
  option('-g,  --git  <commitMessage>', "use zx auto-submit").
  option('-c --create [repoAddress]').
  action(async (options) => {
    console.log(options)
    if (options.git) {
      await autoGit(options.branch,options.git,options.file);
    }
  })


program.parse(process.argv);




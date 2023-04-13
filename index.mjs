#! /usr/bin/env node

// 使用git 自动保存代码
// git add .
// git commit -m "feat:asd";
// git pull origin xxx;
// git push;

import { echo, $ } from "zx";

await $`git add .`;
const outputCommit = await $`git commit -m "xxx"`;
//echo(outputCommit);
// const pull = await $`git pull origin master`;

// const push = await $`git push origin master`;
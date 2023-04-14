#! /usr/bin/env node

import { echo, $ } from "zx";

await $`git add .`;
const outputCommit = await $`git commit -m "xxx"`;
const pull = await $`git pull origin master`;
const push = await $`git push origin master`;
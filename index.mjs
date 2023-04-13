#! /usr/bin/env node

const output = (await $`ls`).stdout.trim();
console.log(output);

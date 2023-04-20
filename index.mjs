#! /usr/bin/env zx

await $`git add .`;
await $`git commit -m "commit messgae"`;
await $`git pull origin master`;
await $`git push origin  master`;
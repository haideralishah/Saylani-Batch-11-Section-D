"use strict";
/*
install node.js
node -v

install type script with following command in project folder
npm install typescript --save-dev


create .gitignore file and add node_modules



run following command to setup tsconfig.json
npx tsc --init


run following command to transpile ts files
npx tsc


run following command to transpile and watch ts files
npx tsc --watch

*/
let user = "haider";
user = "ali";
let num = 1;
num = 7;
let isOff = true;
isOff = false;
function greetUser(userName) {
    console.log(`Hello ${userName}`);
}
greetUser(user);
function makeGreeting(userName, msg) {
    return `${msg} ${userName}`;
}
makeGreeting(user, 'How are you');
console.log(user, num, isOff);

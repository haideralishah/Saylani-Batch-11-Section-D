
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




let user: string = "haider";
user = "ali";

let num: number = 1;
num = 7;

let isOff: boolean = true;
isOff = false;

function greetUser(userName: string): void {
    console.log(`Hello ${userName}`);
}
greetUser(user);

function makeGreeting(userName: string, msg: string): string{
    return `${msg} ${userName}`;
}
makeGreeting(user, 'How are you');

console.log(user, num, isOff);


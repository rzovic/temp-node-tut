const { readFileSync, writeFileSync } = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second);
// Hello this is first text file Hello this is second text file

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }   //node will append to the file
)
// writes output to ./content/result-sync.txt
// application will take time to come to steps below is sync

console.log('done with this task');
console.log('starting the next task')
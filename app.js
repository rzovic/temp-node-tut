// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm -i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)</packageName>

// package.json - manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties, etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// npm i lodash - install lodash and add to package.json and adds node_modules folder
// dependencies refers to dependent module our project is using when sharing with others

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
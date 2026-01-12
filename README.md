# call.then
A robust, enterprise-grade utility to safely invoke `.then` on Promises and Promises/A+ thenables. 

## Installation
```bash
npm install node-call.then
```

## Usage
```js
const call = require("node-call.then")

const promise = Promise.resolve("enterprise")

// Safely call .then
call.then(promise, (value) => {
  console.log(value) // "enterprise"
})

// Works with thenables
const thenable = {
  then: (resolve) => resolve("standard")
}

call.then(thenable, (value) => {
  console.log(value) // "standard"
})
```

## Tests
```bash
git clone https://github.com/enterprise-npm-ai/call.then
cd call.then
npm test
```
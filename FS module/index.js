import { readFile } from "node:fs/promises";

import { readFileSync } from "node:fs";


// blocking operation
console.log('start')
const data = readFileSync('./myfile.txt', 'utf-8');
console.log(data);
console.log('end')

// start
// data
// end


// noblocking operation

console.log('Non block -start')
readFile('./myfile.txt', 'utf-8').then((data)=> {
    console.log(data)
}).catch((err)=> console.log(err))

console.log('Non block -end')


// Non block -start
// Non block -end
// data

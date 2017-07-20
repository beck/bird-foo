const Bird = require('./bird');

const green = '\x1b[32m✔︎\x1b[0m';
const red = '\x1b[31mx\x1b[0m';

const bird = new Bird();

const allBirds = ['chicken', 'duck', 'pigeon'];

const idx = allBirds.indexOf(String(bird));
console.assert(idx > -1, `${red} ${bird} is not a ${allBirds}`);
console.log(`${green} ${bird} is either ${allBirds}`);

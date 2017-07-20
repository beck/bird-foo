'use strict';

function random(items) {
  const randomIndex = Math.floor(Math.random()*items.length);
  return items[randomIndex];
};

var birds = ['chicken', 'duck', 'pigeon'];

function Bird(generator) {
  this.type = random(birds);
}

Bird.prototype.toString = function() {
  return this.type
}

module.exports = Bird;

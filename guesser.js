#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const guessedNumber = getRandom(0, 100);

const question = () => {
  return new Promise((resolve) => rl.question('Попробуйте отгадать: ', answer => resolve(answer)));
};

const game = async () => {
  console.log(`Загадано число в диапазоне от 0 до 100`);

  let success = false;

  while (!success) {
    const answer = await question();
    if (answer > guessedNumber) console.log(`Меньше`);
    if (answer < guessedNumber) console.log(`Больше`);
    success = +answer === guessedNumber;
  }
  console.log(`Отгадано число ${guessedNumber}`);
  rl.close();
};

game();
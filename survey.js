const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let a1;
let a2;
let a3;
let a4;
let a5;
let a6; 
let a7;

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
      console.log(`You answered: ${answer}`);
      a1 = answer;
      resolve();
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What's an activity you like doing?", (answer) => {
      console.log(`You answered: ${answer}`);
      a2 = answer;
      resolve();
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What do you listen to while doing that?", (answer) => {
      console.log(`You answered: ${answer}`);
      a3 = answer;
      resolve();
    })
  })
}

const question4 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
      console.log(`You answered: ${answer}`);
      a4 = answer;
      resolve();
    })
  })
}

const question5 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What's your favourite thing to eat for that meal?", (answer) => {
      console.log(`You answered: ${answer}`);
      a5 = answer;
      resolve();
    })
  })
}

const question6 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Which sport is your absolute favourite?", (answer) => {
      console.log(`You answered: ${answer}`);
      a6 = answer;
      resolve();
    })
  })
}

const question7 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
      console.log(`You answered: ${answer}`);
      a7 = answer;
      resolve();
    })
  })
}


const main = async () => {
  await question1();
  await question2();
  await question3();
  await question4();
  await question5();
  await question6();
  await question7();

  rl.on('close', function() {
    console.log(`
    ${a1} loves doing ${a2}. 
    While doing ${a2}, they love listening to ${a3}. 
    Their favorite meal is ${a4} and they love to eat ${a5} for ${a4}.
    Their favorite sport is ${a6}. 
    Finally, if they were a superhero, their power would be: ${a7}!`);
    process.exit(0);
  });
  rl.close();
}

main();


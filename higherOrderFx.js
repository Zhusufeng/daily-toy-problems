/* forEach */

const forLoopFunc = () => {
  var names = ['Abby', 'Ben', 'Carl', 'Dan', 'Edmund'];

  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
};

// console.log(forLoopFunc());

const forEachFunc = () => {
  var names = ['Abby', 'Ben', 'Carl', 'Dan', 'Edmund'];

  names.forEach(name => {
    console.log(name);
  });
};

console.log(forEachFunc());
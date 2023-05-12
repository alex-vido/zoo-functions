const data = require('../data/zoo_data');

const countAnimals = (animals, ...sex) =>
  data.species.filter((animal) => animal.name === animals)
    .reduce((acc, curr) => acc + curr, 0);

module.exports = countAnimals;

console.log(countAnimals('pinguins'));

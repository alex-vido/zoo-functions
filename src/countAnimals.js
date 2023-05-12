const data = require('../data/zoo_data');

const countAnimalsSex = (ani, sex) =>
  ani.residents.reduce((acc, curr) => (curr.sex === sex ? acc + 1 : acc), 0);

const countAnimals = ({ name, sex }) => {
  const ani = data.species.find((a) => a.name === name);
  if (sex) {
    return countAnimalsSex(ani, sex);
  }
  return ani.residents.reduce((acc, curr) => (curr ? acc + 1 : acc), 0);
};

module.exports = countAnimals;

console.log(typeof countAnimals());

const data = require('../data/zoo_data');

const countAnimalsSex = (ani, sex) =>
  ani.residents.reduce((acc, curr) => (curr.sex === sex ? acc + 1 : acc), 0);

const countAllAnimals = () => {
  const listAnimal = {};
  data.species.forEach((animal) => {
    listAnimal[animal.name] = animal.residents.length;
  });
  return listAnimal;
};

const countAnimals = (animal) => {
  if (!animal) {
    return countAllAnimals();
  }
  const { species: name, sex } = animal;
  const ani = data.species.find((a) => a.name === name);
  if (sex) {
    return countAnimalsSex(ani, sex);
  }
  return ani.residents.reduce((acc, curr) => (curr ? acc + 1 : acc), 0);
};

module.exports = countAnimals;

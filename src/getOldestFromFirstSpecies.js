const data = require('../data/zoo_data');

const getOldestAnimal = (idAnimal) =>
  Object.values(data.species.find((animal) => animal.id === idAnimal)
    .residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr)));

const getOldestFromFirstSpecies = (id) => {
  const idAnimal = data.employees.find((emp) => emp.id === id)
    .responsibleFor[0];
  return getOldestAnimal(idAnimal);
};

module.exports = getOldestFromFirstSpecies;

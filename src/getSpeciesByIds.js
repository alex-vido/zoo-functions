const data = require('../data/zoo_data');

const locateAnimalName = (id) => data.species.find((animal) =>
  animal.id === id);

const getSpeciesByIds = (...ids) => ids.map((id) => locateAnimalName(id));

module.exports = getSpeciesByIds;

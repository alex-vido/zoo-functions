const data = require('../data/zoo_data');

const isOlder = (element, age) => element.residents.every((el) => el.age >= age);

const getAnimalsOlderThan = (animal, age) => {
  const specie = data.species.find((element) => element.name === animal);
  if (specie) {
    return isOlder(specie, age);
  }
}
module.exports = getAnimalsOlderThan;

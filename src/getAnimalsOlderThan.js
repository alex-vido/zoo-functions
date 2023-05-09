const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) =>
  data.species.find((element) => element.name === animal)
    .residents.every((el) => el.age >= age);

module.exports = getAnimalsOlderThan;

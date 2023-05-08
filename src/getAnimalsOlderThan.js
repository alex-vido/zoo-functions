const data = require('../data/zoo_data');

const isOlder = (element, age) => {
  element.every((el) => el.every());
};

const getAnimalsOlderThan = (animal, age) => data.species.map((element) => isOlder(element, age));

console.log(getAnimalsOlderThan(['lions', 11]));

/*
Fazer um laço parra cada animal em animal
comparar se o nome dele consta em data.especies.name
se conter o nome, localizar a idade dele em data.species.residents.age
Comparar se ele possui a idade igual ou maior que age.
*/

module.exports = getAnimalsOlderThan;

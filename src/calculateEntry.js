const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  // seu código aqui
  const ent = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      ent.child += 1;
    } else if (entrant.age < 50) {
      ent.adult += 1;
    } else {
      ent.senior += 1;
    }
  });
  return ent;
};

const calculateEntry = (entrants) => {
  // seu código aqui
  if (!entrants) {
    return 0;
  }
  const ent = countEntrants(entrants);
  let sum = 0;
  sum += ent.child * data.prices.child;
  sum += ent.adult * data.prices.adult;
  sum += ent.senior * data.prices.senior;
  return sum;
};

module.exports = { calculateEntry, countEntrants };

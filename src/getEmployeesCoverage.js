const data = require('../data/zoo_data');

const locateSpecies = (arr) =>
  arr.map((id) => data.species.find((animal) => animal.id === id).name);

const locateLocals = (arr) =>
  arr.map((id) => data.species.find((animal) => animal.id === id).location);

const reducing = (obj) => ({
  id: obj.id,
  fullName: `${obj.firstName} ${obj.lastName}`,
  species: locateSpecies(obj.responsibleFor),
  locations: locateLocals(obj.responsibleFor),
});

const allEmployess = () => data.employees.map((employee) => reducing(employee));

const locateEmployee = (employee) => {
  const { name, id } = employee;
  const located = data.employees.find((emp) =>
    name === emp.firstName
      || name === emp.lastName
        || id === emp.id);
  if (located) {
    return reducing(located);
  }
  throw new Error('Informações inválidas');
};

const getEmployeesCoverage = (employee) => {
  if (!employee) {
    return allEmployess();
  }
  return locateEmployee(employee);
};

module.exports = getEmployeesCoverage;

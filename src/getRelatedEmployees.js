const data = require('../data/zoo_data');

const isManager = (id) =>
  data.employees.some((employer) =>
    employer.managers.find((manager) => manager === id));

const getRelatedEmployees = (managerId) => {
  const employeeWithThisManager = data.employees.filter((employer) =>
    employer.managers.includes(managerId));
  if (employeeWithThisManager.length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employeeWithThisManager.map((empl) => `${empl.firstName} ${empl.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };

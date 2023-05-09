const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) =>
  data.employees.find((person) => employeeName === person.firstName
    || employeeName === person.lastName)
      || {};

module.exports = getEmployeeByName;

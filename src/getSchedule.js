const data = require('../data/zoo_data');

const animalsDay = (day) =>
  data.species.filter((animal) => animal.availability.includes(day))
    .map((a) => a.name);

const allSchedule = () =>
  Object.entries(data.hours).reduce((schedule, [day, { open, close }]) => {
    const retorno = schedule;
    if (open > 0) {
      retorno[day] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: animalsDay(day),
      };
    } else {
      retorno[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!' };
    }
    return retorno;
  }, {});

const getSchedule = (scheduleTarget) => (scheduleTarget ? data.species.find((specie) =>
  specie.name === scheduleTarget).availability : allSchedule());

module.exports = getSchedule;

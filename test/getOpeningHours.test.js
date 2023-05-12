const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se a função `getOpeningHours` responde como o esperado', () => {
    expect(typeof getOpeningHours).toBe('function');
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 }
    });
    expect(getOpeningHours('friday', '10:10-AM')).toBe('The zoo is open');
    expect(getOpeningHours('friday', '8:10-PM')).toBe('The zoo is closed');
    expect(() => getOpeningHours('monday', '12:59-GM')).toThrow("The abbreviation must be 'AM' or 'PM'");
    expect(() => getOpeningHours('monday', '13:59-AM')).toThrow("The hour must be between 0 and 12");
    expect(() => getOpeningHours('monday', '12:63-AM')).toThrow("The minutes must be between 0 and 59");
    expect(() => getOpeningHours('friday', '1a:10-PM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('fridsay', '12:10-PM')).toThrow('The day must be valid. Example: Monday');
  })

});

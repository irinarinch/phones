import formatPhones from '../phones';

const data = [
  ['testing formating phone number', '8 (927) 800-00-00', '+79278000000'],
  ['testing formating phone number', '+7 960 000 00 00', '+79600000000'],
  ['testing formating phone number', '+86 000 000 0000', '+860000000000'],
];

test.each(data)('%s %s', (_, phoneNumber, expected) => {
  expect(formatPhones(phoneNumber)).toBe(expected);
});

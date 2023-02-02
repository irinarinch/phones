export default function formatPhones(phoneNumber) {
  let result = phoneNumber.replace(/\D/g, '');

  if (result.length === 11) {
    result = result.replace(/^[8]/g, '7');
  }

  return `+${result}`;
}

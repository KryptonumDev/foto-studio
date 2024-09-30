export function formatPhoneNumber(phoneNumber: string) {
  if (phoneNumber.length !== 12 || !/^\+\d+$/.test(phoneNumber)) return phoneNumber;
  return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 9)} ${phoneNumber.slice(9)}`;
}

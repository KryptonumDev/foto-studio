export function addLeadingZero(num: number) {
  return `${num <= 9 ? '0' : ''}${num}`;
}

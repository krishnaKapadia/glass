/** @format */

export function getTime(date: Date) {
  const rawHours = date.getHours();
  const twelveHourFormat = rawHours > 12 ? rawHours - 12 : rawHours;

  const rawMinutes = date.getMinutes();

  return `${twelveHourFormat}:${
    rawMinutes < 10 ? `0${rawMinutes}` : rawMinutes
  }`;
}

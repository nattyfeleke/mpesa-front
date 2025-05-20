export function formatNumberWithDashes(num: number): string {
  const str = Math.abs(num).toString();
  const digits = str.split("");
  return num < 0 ? `-${digits.join("-")}` : digits.join("-");
}

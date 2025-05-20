export function formatETB(
  amount: number,
  includeSymbol: boolean = false,
  decimalPlaces: number = 2,
): string {
  const formatted = amount.toLocaleString("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
  return includeSymbol ? `Br${formatted}` : formatted;
}

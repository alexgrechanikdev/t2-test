export const getDeclension = (quantity: number, variants: string[]): string => {
  const lastDigit = quantity % 10;
  const lastTwoDigits = quantity % 100;

  if (lastTwoDigits > 10 && lastTwoDigits < 14) {
    return variants[2];
  }

  if (lastDigit > 1 && lastDigit < 5) {
    return variants[1];
  }

  if (lastDigit === 1) {
    return variants[0];
  }

  return variants[2];
};

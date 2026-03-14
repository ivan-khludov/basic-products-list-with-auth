export const truncateText = (text: string, maxLength: number): string =>
  text.length <= maxLength ? text : `${text.slice(0, maxLength)}…`;

export const formatRating = (rating: number) =>
  new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(rating);

export const formatPriceParts = (
  price: number,
): { integerPart: string; decimalPart: string } => {
  const formatted = new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  const commaIndex = formatted.indexOf(",");

  if (commaIndex < 0) {
    return { integerPart: formatted, decimalPart: "" };
  }

  return {
    integerPart: formatted.slice(0, commaIndex),
    decimalPart: formatted.slice(commaIndex),
  };
};

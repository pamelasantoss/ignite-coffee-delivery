export function formatReal(value: number) {
  const formattedCurrency = value.toFixed(2).split(".");
  formattedCurrency[0] = formattedCurrency[0].split(/(?=(?:...)*$)/).join(".");
  
  return formattedCurrency.join(",");
}
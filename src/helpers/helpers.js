const moneyFormatter = Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export function helperFormatMoney(value) {
  return moneyFormatter.format(value);
}

export function helperFormatPercentage(value) {
  const prefix = value >= 0 ? "+" : "";
  return prefix + value.toFixed(2).replace(".", ",") + "%";
}

const MONTH_DESCRIPTIONS = [
  '',
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Maio',
  'Jun',
  'Jul',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
]

export function helperGetMonth(value){
  return MONTH_DESCRIPTIONS(value)
}
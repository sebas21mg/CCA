export function dateToString(date) {
  const formatOptions = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString(undefined, formatOptions);
  // .replace(/ /g, " - ");
}

export function dateToValue(date) {
  // const formatOptions = { day: "2-digit", month: "2-digit", year: "numeric" };
  // return date.toLocaleDateString("en-EN", formatOptions).replace(/\//g, "-");
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month.toString().padStart(2, "0");
  let day = date.getDate();
  day = day.toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Functions

export function prettifyPrice(price) {
  return price.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
}

export async function fetchData(url, callback) {
  const response = await fetch(url);
  const json = await response.json();

  callback(json);
}
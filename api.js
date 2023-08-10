/* Fetching API response */
const API_URL = "https://frontendtest.pleasecheck.me/wp-json/wp/v2/posts/";

export async function fetchQuotes() {
  const response = await fetch(API_URL);
  const responseJson = await response.json();
  return responseJson.map((quote) => quote.title.rendered);
}

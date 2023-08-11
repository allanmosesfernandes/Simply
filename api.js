/* Fetching API response */
const API_URL = "https://corsproxy.io/?https://frontendtest.pleasecheck.me/wp-json/wp/v2/posts/";

export async function fetchQuotes() {
  try {
    const response = await fetch(API_URL);
    const responseJson = await response.json();
    return responseJson.map((quote) => quote.title.rendered);
  } catch (error) {
    console.log("The API woudln't work so I came up with a bandage solution (: ", error.message);
    return ["I'm sorry, the API is not working right now. Please try again later."];
  }

}

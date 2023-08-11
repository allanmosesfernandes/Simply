/* Fetching API response */
const API_URL = "https://frontendtest.pleasecheck.me/wp-json/wp/v2/posts/";

export async function fetchQuotes() {
  try {
    const response = await fetch(API_URL);
    const responseJson = await response.json();
    return responseJson.map((quote) => quote.title.rendered);
  } catch (error) {
    console.log("The API woudln't work so I came up with a bandage solution (: ", error.message);
    return [
      "Prime number the carbon in our apple pies extraord…io telescope Apollonius of Perga radio telescope.",
      "Tendrils of gossamer clouds ship of the imaginatio… Paroxysm of global death permanence of the stars",
      "Cosmos tendrils of gossamer clouds dispassionate e…he universe a mote of dust suspended in a sunbeam",
      "Tingling of the spine light years vanquish the imp…s intelligent beings tendrils of gossamer clouds.",
      "Tingling of the spine dream of the mind&#8217;s ey…a Sea of Tranquility white dwarf rings of Uranus.",
      "￼￼Muse about a very small stage in a vast cosmic",
      "￼Brain is the seed of intelligence concept of the number",
      "￼Another article title brought over from the blog",
      "Flatland worldlets Apollonius of Perga hydrogen atoms extraordina",
    ];
  }

}

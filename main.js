import { fetchQuotes } from "./api.js";
import { Smarquee } from "smarquee";
const colors = [
  "#F972DB",
  "#72F97F",
  "#72C8F9",
  "#F98A72",
  "#F6F972",
  "#72A0F9",
  "#72F9C8",
];

async function main() {
  const quotes = await fetchQuotes();
  const container = document.getElementById("quoteWrapper");

  for (let i = 0; i < quotes.length; i += 2) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main-quote-container", `container-${i / 2}`); // Add index-based class

    for (let j = i; j < Math.min(i + 2, quotes.length); j++) {
      const quote = quotes[j];
      const stringWithoutEmojis = quote.replace(/[^\p{L}\p{N}\s]/gu, "");

      const div = document.createElement("div");
      div.style.backgroundColor = colors[j];
      div.classList.add("quotecontainer");

      // Alternate even and odd backgrounds
      if (j % 2 === 0) {
        div.classList.add("even");
      } else {
        div.classList.add("odd");
      }

      const pTag = document.createElement("p");
      pTag.textContent = stringWithoutEmojis;
      console.log(stringWithoutEmojis);
      div.appendChild(pTag);
      mainDiv.appendChild(div);
    }

    container.appendChild(mainDiv);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  main();

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    const evenDivs = document.querySelectorAll(".even");

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;

      evenDivs.forEach((evenDiv, index) => {
        const evenOffset =
          index % 2 === 0 ? -scrollPosition * 0.5 : scrollPosition * 0.5;
        evenDiv.querySelector(
          "p"
        ).style.transform = `translateX(${evenOffset}px)`;
      });
    });

    const oddDivs = document.querySelectorAll(".odd");
    oddDivs.forEach((oddDiv, index) => {
      const oddOffset =
        index % 2 === 0 ? scrollPosition * 0.5 : -scrollPosition * 0.5;
      oddDiv.querySelector("p").style.transform = `translateX(${oddOffset}px)`;
    });
  });
});

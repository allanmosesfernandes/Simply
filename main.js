//== I'm sorry. ==//

import { fetchQuotes } from "./api.js";
import Smarquee from "smarquee";

//== Colors Array  ==//
const colors = [
  "#F972DB",
  "#72F97F",
  "#72C8F9",
  "#F98A72",
  "#F6F972",
  "#72A0F9",
  "#72F9C8",
];

//== Incase we run out of colors loop through ==//
function getColor(index) {
  return colors[index % colors.length];
}

async function main() {

  //==fetch quotes ==//
  const quotes = await fetchQuotes();
  const container = document.getElementById("quoteWrapper");
  //==loop through quotes ==//
  for (let i = 1; i <= Math.ceil(quotes.length / 2); i++) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("quote-wrapper-" + i, "quotes");
    for (let j = 0; j < 2; j++) {
      const quoteIndex = (i - 1) * 2 + j;
      if (quoteIndex < quotes.length) {
        const quote = quotes[quoteIndex];
        //== Remove emojis from quote ==//
        const stringWithoutEmojis = quote.replace(/[^\p{L}\p{N}\s]/gu, "");

        //== dynamically create div with background color==//
        const div = document.createElement("div");
        div.style.backgroundColor = getColor(quoteIndex);
        div.classList.add("quotecontainer");

        const pTag = document.createElement("p");
        pTag.textContent = stringWithoutEmojis;
        pTag.classList.add("smarquee");

        div.appendChild(pTag);
        //== Add "odd" class to the first inner div and ==//
        //=="even" class to the second inner div ==//
        if (j === 0) {
          div.classList.add("odd");
        } else {
          div.classList.add("even");
        }
        mainDiv.appendChild(div);
      }
    }
    container.appendChild(mainDiv);
  }
  const smarquees = document.querySelectorAll(".smarquee");
  //== Select all dynamically generated ==//
  /* Loop through all smarquees */
  //==initialize Smarquee for each one ==//
  smarquees.forEach((element) => {
    let smarquee = new Smarquee({
      element: element,
      start: false,
      playState: "stopped",
      velocity: 50,
      // Add your Smarquee options here if needed
      // ...
    });
    element.addEventListener("mouseenter", () => {
      smarquee.init();
    });
    element.addEventListener("mouseleave", () => {
      smarquee.deInit();
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  /* Marquee effect */
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



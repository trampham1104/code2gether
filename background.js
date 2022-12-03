
chrome.runtime.onInstalled.addListener(() => {

  let quote = document.getElementById("quote");
  let author = document.getElementById("author");
  let btn_quote = document.getElementById("btn_quote");

  const url = "https://api.quotable.io/random";
  let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
      });
  };

  window.addEventListener("load", getQuote);
  btn_quote.addEventListener("click", getQuote);
});
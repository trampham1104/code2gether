function getCurrentTabUrl() {
    var queryInfo = {
      active: true,
      currentWindow: true,
    }
  
    chrome.tabs.query(queryInfo, function(tabs) {
      var tab = tabs[0]
      alert(tab.url)
    })
  }

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let btn_url = document.getElementById("btn_url");

const url = "https://api.quotable.io/random";
let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

btn.addEventListener("click", getQuote);
btn_url.addEventListener("click", getCurrentTabUrl)
//document.querySelector('#get-url').addEventListener('click', getCurrentTabUrl)
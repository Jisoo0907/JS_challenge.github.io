const quotes = [
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Despite the forecast, live like it’s spring.",
    author: "Lilly Pulitzer",
  },
  {
    quote:
      "Success is going from failure to failure without a loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Try not to become a man of success but rather try to become a man of value",
    author: "Albert Einstein",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // 0과 1 사이의 랜덤한 숫자

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;

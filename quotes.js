// quotes 배열 <- 10개 객체들 <- 각 객체 내 quote, author 프로퍼티
const quotes = [
    {
        quote: "Life is a series of building, testing, changing and iterating.",
        author: "Lauren Mosenthal",
    },
    {
        quote: "Life consists not in holding cards, but in playing those you hold well.",
        author: "Henry Wheeler Shaw",
    },
    {
        quote: "It always seems impossible until it is done.",
        author: "Nelson Mandela",
    },
    {
        quote: "Success is not final and failure is not fatal. It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "Do what you can, with all you have, where you are.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Only thing we have to fear is fear itself.",
        author: "Franklin Roosevelt",
    },
    {
        quote: "He is the richest who is content with the least.",
        author: "Socrates",
    },
    {
        quote: "Life without experience and sufferings is not a life.",
        author: "Socrates",
    },
    {
        quote: "If you are going through hell, keep going.",
        author: "Winston Churchill",
    },
    {
        quote: "Maybe you have to know the darkness before you can appreciate the light.",
        author: "Madeleine L'Engle",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/* 내가 작성한 코드
const randomNumber = Math.floor(Math.random()*(quotes.length));
quote.innerText = quotes[randomNumber].quote;
author.innerText = quotes[randomNumber].author; */

const todaysQuote = quotes[Math.floor(Math.random()*(quotes.length))];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
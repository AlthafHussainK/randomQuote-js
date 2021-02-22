const button = document.querySelector('button')
const quoteDisplay = document.querySelector('#quote')

const quotes = [
  'Do something today that your future self will thankyou for',
  'Dont worry, be happy!',
  'Your limitation is only your imagination'
]

function showQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length)
  let randomQuote = quotes[randomNumber]

  quoteDisplay.innerHTML = randomQuote
}

button.addEventListener('click', showQuote)
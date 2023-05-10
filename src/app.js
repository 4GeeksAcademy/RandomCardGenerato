function dealCard() {
  var suitTexts = ['♦','♥','♠','♣'];
  var numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  var randomSuitIndex = Math.floor(Math.random() * suitTexts.length);
  var randomNumberIndex = Math.floor(Math.random() * numbers.length);

  var cardSuitElement = document.getElementsByClassName('suitSpan');
  var cardNumberElement = document.getElementById('cardNumber');

  cardNumberElement.textContent = numbers[randomNumberIndex];
  for (var i = 0; i < cardSuitElement.length; i++) {
    cardSuitElement[i].textContent = suitTexts[randomSuitIndex];
    if (cardSuitElement[i].textContent !== suitTexts[0] || cardSuitElement[i].textContent !== suitTexts[1]) {
      cardSuitElement[i].style.color = "black";
      if (cardSuitElement[i].textContent === suitTexts[0] || cardSuitElement[i].textContent === suitTexts[1]) {
        cardSuitElement[i].style.color = "red";
        
        }
    }
    
  }
}
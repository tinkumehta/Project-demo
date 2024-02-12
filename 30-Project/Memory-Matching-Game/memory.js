let cards = [];
let flippedCards = [];
let matchedCards = [];

const symbols = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆'];
function createCards() {
    const doubledSymbols = symbols.concat(symbols);
    doubledSymbols.sort(() => Math.random() - 0.5);
    return doubledSymbols;
}

function createCardElement(symbol){
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<span> ${symbol} </span>`;
    card.addEventListener('click', () => flipCard(card));
    return card;
}

function renderCards() {
    const gridContainer = document.getElementById('gridcontainer');
    gridContainer.innerHTML = '';
    cards.forEach(symbol => {
        const cardElement = createCardElement(symbol);
        gridContainer.appendChild(cardElement);
    });
}

function flipCard(card){
    if(flippedCards.length < 2 && ! flippedCards.includes(card) && !matchedCards.includes(card)){
        card.classList.add('flip');
        flippedCards.push(card);
        if(flippedCards.length === 2){
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const symbol1 = card1.textContent;
    const symbol2 = card2.textContent;
    if(symbol1 === symbol2){
        matchedCards.push(card1, card2);
        flippedCards = [];
        if(matchedCards.length === cards.length){
            setTimeout(() => {
                //alert('Congratulations You Winner');
                document.querySelector(".winner").style.display = "block";
                resetGame();
            }, 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flip');
            card2.classList.remove('flip');
            flippedCards = [];
        }, 1000);
    }
}

function resetGame () {
    cards = createCards();
    flippedCards = [];
    matchedCards = [];
    renderCards();
   
}

 resetGame();
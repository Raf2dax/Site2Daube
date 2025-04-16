// Charge from Json file quotes
async function fetchQuotes() {
    try {
        const response = await fetch('../data/Citation.json');
        if (!response.ok) {
            throw new Error('Erreur de chargement des citations.');
        }
        const quotes = await response.json();
        return quotes;
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Obtain random quotes
async function displayRandomQuote() {
    const quotes = await fetchQuotes();
    if (quotes.length === 0) {
        document.getElementById('quoteDisplay').textContent = 'Erreur de chargement des citations.';
        return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').textContent = quotes[randomIndex];
}

// trigger if the button is clicked
document.getElementById('quoteButton').addEventListener('click', displayRandomQuote);
const axios = require('axios');
const fs = require('fs');

//Klucz API OpenAI
const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY";

// Funkcja która odczytuje pliku tekstowego
function czytajPlik(filepath) {
    return fs.readFileSync(filepath, 'utf8');
}

async function main() {
    const sciezkaPlikuArtykulu = "artykul.txt";  
    // Ścieżka do pliku z artykułem
    const tekstArtykulu = czytajPlik(sciezkaPlikuArtykulu);
}
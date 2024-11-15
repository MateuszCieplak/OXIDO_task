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

    const htmlContent = await generujHtmlZArtykulu(tekstArtykulu);

    if (htmlContent) {
        zapiszHtmlDoPliku(htmlContent);
    } else {
        console.error("Nie udało się wygenerować HTML.");
    }
}

//Funkcja do generowania pliku HTML za pomocą OpenAI
async function generujHtmlZArtykulu(tekstArtykulu) {    
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: `Przetwórz poniższy artykuł na kod HTML spełniający następujące wytyczne:
                        - Użyj odpowiednich tagów HTML, aby strukturyzować treść. Tam gdzie warto dodać tag <h1>, <h2> itp. zrób to i wstaw klase "title".
                        - Pod każdym tagiem tytułowym <h>, wstaw tag <img src="image_placeholder.jpg" alt="opis grafiki"> z klasą "image". Pod każdym obrazem umieść podpis przy użyciu tagu HTML <figcaption> z klasą "title__image". Poniżej grafiki umieść treść artykułu opakowanego w tag paragrafu <p> z klasą "pharagraph".
                        - Nie dodawaj kodu CSS ani JavaScript; kod HTML ma zawierać wyłącznie zawartość, która znajdzie się między tagami <body> i </body>.
                        - Nie dołączaj znaczników <html>, <head> ani <body>.
                        
                        Artykuł do przetworzenia:
                        ${tekstArtykulu}`
                    }
                ],
                max_tokens: 1500,
                temperature: 0.5,
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                }
            }
        );
        return response.data.choices[0].message.content.trim();
    } catch (error) {
        console.error("Błąd podczas łączenia się z API OpenAI:", error);
        return null;
    }
}

// Funkcja do zapisywania wygenerowanego HTML w pliku
function zapiszHtmlDoPliku(htmlContent, filepath = "artykul.html") {
    fs.writeFileSync(filepath, htmlContent, 'utf8');
    console.log(`Wygenerowano plik ${filepath} z przetworzoną zawartością HTML.`);
}

//Wywołanie głównej funkcji "main"
main();
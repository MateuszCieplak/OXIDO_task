# OXIDO_task

Utworzona aplikacja przyjmuje oraz przetwarza treść podanego artykułu, a następnie łączy się z API OpenAI, który tę treść przyjmuje. Na podstawie zawartej wiadomości w funkcji prompt, artykuł przerabiany jest na kod HTML, wzbogacany o dodatkowe elementy jakimi są tagi czy klasy, po czym zapisywany jest w pliku artykul.html. Swobodę jaką daje stworzona aplikacja, jest to, że możemy generować nasz artykuł w taki sposób jaki tylko chcemy. Wystarczy przekazać jej odpowiednią wiadomosć do funkcji prompt.

INSTRUKCJA:
1. WYMAGANIA:

Przed rozpoczęciem korzystania z aplikacji upewnij się, że masz zainstalowane i skonfigurowane następujące elementy:

a) Środowisko:
- Node.js (minimalna wersja 14.0);
- Dostęp do internetu (dla połączenia z OpenAI API);

b) Biblioteki Node.js:
- axios (do wysyłania zapytań HTTP);
- fs (do odczytu i zapisu plików);

2. KONFIGURACJA APLIKACJI:

Przygotuj plik tekstowy z artykułem
- Utwórz plik tekstowy o nazwie artykul.txt w tym samym folderze, co aplikacja.
- Wprowadź do niego treść artykułu, który chcesz przekształcić na HTML.

Ustaw klucz API
- Jeśli korzystasz z własnego klucza OpenAI, wprowadź do zmiennej OPEN_API_KEY:

3. URUCHAMIANIE APLIKACJI:

Otwórz terminal i przejdź do folderu z aplikacją:

cd /ścieżka/do/aplikacji

Uruchom aplikację:

node app.js

Po zakończeniu działania plik wynikowy HTML zostanie zapisany jako artykul.html w tym samym folderze co aplikacja.

4. SZCZEGÓŁY DZIAŁANIA APLIKACJI:
Odczyt artykułu:
    Aplikacja odczytuje plik artykul.txt i przesyła jego zawartość do OpenAI API.

Generowanie HTML:
    OpenAI przetwarza artykuł na kod HTML według następujących zasad:

    - Tytuły są otaczane tagami h1, h2 itd., z klasą CSS title.
    - Pod każdym tytułem znajduje się obrazek (<img src="image_placeholder.jpg" alt="opis grafiki">) z klasą image.
    - Pod obrazkiem jest podpis (<figcaption>) z klasą title__image.
    - Treść artykułu znajduje się w paragrafach (<p>) z klasą paragraph.

Zapis wyniku:
    Kod HTML jest zapisywany do pliku artykul.html.

6. WSKAZÓWKI:
- Dostosowywanie wyjściowego pliku HTML: Możesz zmodyfikować treść wiadomości w funkcji generujHtmlZArtykulu, aby zmienić sposób formatowania HTML.
- Wydajność: Upewnij się, że artykuły do przetworzenia mają odpowiednią długość, by nie przekroczyć limitów API.

Wiadomość od twórcy:

Bardzo dziękuję za możliwość wykonania tego zadania rekrutacyjnego. W trakcie jego realizacji, wiele się nauczyłem i jestep pod wrażeniem jakie możliwości stwarza programowanie i łączenie tego ze sztuczną inteligencją. Dopiero stawiam swoje pierwsze kroki w karierze programisty, a to zadanie otworzyło mi nowe ścieżki zdobywania wiedzy.

Bardzo dziękuję i serdecznie pozdrawiam.

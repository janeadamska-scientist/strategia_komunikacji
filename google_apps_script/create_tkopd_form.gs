/**
 * Tworzy ankietę Google Forms dla zespołu TKOPD.
 * Po uruchomieniu funkcji link do edycji i link publiczny pojawiają się w Execution log.
 */
function createTKOPDCommunicationSurvey() {
  const form = FormApp.create('ANKIETA DLA ZESPOŁU TKOPD - diagnoza komunikacji');
  form.setDescription(
    'Diagnoza komunikacji na potrzeby strategii komunikacji\n\n' +
    'Celem ankiety jest poznanie opinii zespołu Terenowego Komitetu Ochrony Praw Dziecka w Poznaniu na temat obecnej komunikacji organizacji - zarówno zewnętrznej, jak i wewnętrznej.\n\n' +
    'Odpowiedzi pomogą określić mocne strony, najważniejsze problemy oraz priorytety, które powinny zostać uwzględnione w strategii komunikacji TKOPD.\n\n' +
    'Ankieta jest anonimowa. Prosimy o szczere odpowiedzi oparte na codziennych doświadczeniach związanych z pracą w organizacji.\n\n' +
    'Szacowany czas wypełnienia: 15-20 minut.'
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setShowLinkToRespondAgain(false);

  addSection(form, 'I. Informacje ogólne');
  addMultipleChoice(form, '1. Jak długo pracujesz lub współpracujesz z TKOPD?', [
    'Krócej niż 6 miesięcy', 'Od 6 miesięcy do 1 roku', 'Od 1 roku do 3 lat',
    'Od 3 do 5 lat', 'Dłużej niż 5 lat', 'Wolę nie odpowiadać'
  ]);
  addCheckboxes(form, '2. W jakim obszarze działasz w TKOPD?', [
    'Pomoc psychologiczna', 'Pomoc pedagogiczna', 'Pomoc prawna', 'Praca terapeutyczna',
    'Działania edukacyjne i szkoleniowe', 'Realizacja projektów', 'Administracja',
    'Zarządzanie organizacją', 'Komunikacja i promocja', 'Pozyskiwanie środków',
    'Obsługa organizacyjna', 'Wolontariat'
  ], null, true);
  addMultipleChoice(form, '3. Jak często w swojej pracy przekazujesz informacje na zewnątrz organizacji?', [
    'Codziennie', 'Kilka razy w tygodniu', 'Kilka razy w miesiącu', 'Sporadycznie', 'Nigdy'
  ]);

  addSection(form, 'II. Postrzeganie TKOPD');
  addParagraph(form, '4. Jakie trzy określenia najlepiej opisują obecnie TKOPD?');
  addParagraph(form, '5. Jakie trzy określenia powinny opisywać TKOPD w przyszłości?');
  addParagraph(form, '6. Co wyróżnia TKOPD na tle innych organizacji i instytucji wspierających dzieci oraz rodziny?');
  addCheckboxes(form, '7. Jakie wartości powinny być najmocniej widoczne w komunikacji TKOPD? Wybierz maksymalnie pięć odpowiedzi.', [
    'Bezpieczeństwo', 'Zaufanie', 'Profesjonalizm', 'Empatia', 'Dostępność', 'Poufność',
    'Szacunek', 'Skuteczność', 'Doświadczenie', 'Rzetelność', 'Odpowiedzialność',
    'Współpraca', 'Zaangażowanie', 'Otwartość'
  ], 5, true);
  addGrid(form, '8. W jakim stopniu zgadzasz się z poniższymi stwierdzeniami?', [
    'TKOPD ma jasno określoną misję.',
    'Wiem, jakie są najważniejsze cele organizacji.',
    'Wiem, czym TKOPD wyróżnia się na tle innych organizacji.',
    'Potrafię krótko wyjaśnić, czym zajmuje się TKOPD.',
    'Członkowie zespołu przedstawiają działalność TKOPD w podobny sposób.',
    'Komunikacja organizacji jest zgodna z jej wartościami.',
    'TKOPD jest organizacją godną zaufania.',
    'TKOPD jest wystarczająco rozpoznawalny.',
    'Wizerunek TKOPD odpowiada jakości wykonywanej przez organizację pracy.'
  ], ['1 - zdecydowanie się nie zgadzam', '2', '3 - trudno powiedzieć', '4', '5 - zdecydowanie się zgadzam']);

  addSection(form, 'III. Obecna komunikacja zewnętrzna');
  addGrid(form, '9. Jak oceniasz obecną komunikację zewnętrzną TKOPD?', [
    'Strona internetowa', 'Komunikacja w mediach społecznościowych', 'Informowanie o dostępnych formach pomocy',
    'Informowanie o szkoleniach i wydarzeniach', 'Informowanie o projektach', 'Komunikacja skierowana do rodziców i opiekunów',
    'Komunikacja skierowana do dzieci i młodzieży', 'Komunikacja skierowana do specjalistów', 'Komunikacja skierowana do instytucji',
    'Komunikacja skierowana do darczyńców', 'Kontakty z mediami', 'Spójność materiałów wizualnych',
    'Regularność publikacji', 'Zrozumiałość języka'
  ], ['1 - bardzo źle', '2', '3', '4', '5 - bardzo dobrze', 'ND - nie mam wiedzy']);
  addParagraph(form, '10. Jakie są najmocniejsze strony obecnej komunikacji TKOPD?');
  addCheckboxes(form, '11. Jakie są największe problemy związane z obecną komunikacją TKOPD? Wybierz maksymalnie pięć odpowiedzi.', [
    'Brak jasno określonych celów komunikacji', 'Brak spójnego przekazu', 'Brak regularności publikacji',
    'Brak czasu na przygotowywanie treści', 'Brak osoby odpowiedzialnej za komunikację', 'Niejasny podział obowiązków',
    'Zbyt mała liczba materiałów', 'Zbyt mała widoczność organizacji', 'Nieaktualne informacje', 'Zbyt formalny język',
    'Zbyt trudny język', 'Niespójna identyfikacja wizualna', 'Brak zdjęć, grafik i materiałów wideo',
    'Brak planu publikacji', 'Brak wiedzy o potrzebach odbiorców', 'Trudność w komunikowaniu tematów wrażliwych',
    'Brak procedur akceptacji treści', 'Długi proces uzgadniania publikacji', 'Niedostateczna komunikacja pomiędzy zespołami',
    'Brak odpowiednich narzędzi'
  ], 5, true);
  addMultipleChoice(form, '12. Czy informacje publikowane przez TKOPD właściwie pokazują skalę i znaczenie działalności organizacji?', [
    'Zdecydowanie tak', 'Raczej tak', 'Częściowo', 'Raczej nie', 'Zdecydowanie nie', 'Nie mam zdania'
  ]);
  addParagraph(form, '13. Jakich obszarów działalności TKOPD brakuje w obecnej komunikacji?');
  addCheckboxes(form, '14. Jakie działania TKOPD powinny być komunikowane częściej? Wybierz maksymalnie pięć odpowiedzi.', [
    'Dostępne formy pomocy', 'Konsultacje psychologiczne', 'Konsultacje prawne', 'Wsparcie rodzin',
    'Prawa dziecka', 'Profilaktyka przemocy', 'Zdrowie psychiczne dzieci i młodzieży', 'Szkolenia i warsztaty',
    'Projekty', 'Współpraca z instytucjami', 'Działania zespołu specjalistów', 'Efekty działalności',
    'Historie pomocy przedstawiane anonimowo', 'Wiedza ekspercka', 'Możliwości przekazania darowizny',
    'Możliwości współpracy z organizacją', 'Wolontariat'
  ], 5, true);

  addSection(form, 'IV. Grupy odbiorców');
  addCheckboxes(form, '15. Do jakich grup TKOPD powinien kierować komunikację w pierwszej kolejności? Wybierz maksymalnie pięć odpowiedzi.', [
    'Dzieci', 'Młodzież', 'Rodzice i opiekunowie', 'Rodziny w kryzysie', 'Nauczyciele i pedagodzy',
    'Psychologowie i terapeuci', 'Prawnicy', 'Pracownicy pomocy społecznej', 'Szkoły i placówki edukacyjne',
    'Instytucje publiczne', 'Samorządy', 'Organizacje pozarządowe', 'Darczyńcy indywidualni',
    'Firmy i partnerzy biznesowi', 'Media', 'Potencjalni pracownicy i wolontariusze', 'Społeczność lokalna'
  ], 5, true);
  addParagraph(form, '16. Które grupy odbiorców są obecnie niedostatecznie uwzględnione w komunikacji?');
  addCheckboxes(form, '17. Jakich informacji najczęściej potrzebują osoby kontaktujące się z TKOPD? Wybierz maksymalnie pięć odpowiedzi.', [
    'Jak uzyskać pomoc', 'Z kim się skontaktować', 'W jakich godzinach działa organizacja', 'Kto może skorzystać z pomocy',
    'Czy pomoc jest bezpłatna', 'Jak wygląda pierwsza konsultacja', 'Ile trwa oczekiwanie', 'Jak przygotować się do spotkania',
    'Jakie dokumenty są potrzebne', 'Jak wygląda ochrona danych i poufność', 'Gdzie szukać pomocy w sytuacji nagłej',
    'Jak zapisać się na szkolenie', 'Jak rozpocząć współpracę z TKOPD', 'Jak wesprzeć organizację'
  ], 5, true);

  addSection(form, 'V. Kanały i formaty komunikacji');
  addCheckboxes(form, '18. Które kanały komunikacji powinny być najważniejsze dla TKOPD? Wybierz maksymalnie pięć odpowiedzi.', [
    'Strona internetowa', 'Facebook', 'Instagram', 'LinkedIn', 'YouTube', 'TikTok', 'Newsletter', 'Lokalne media',
    'Radio', 'Prasa', 'Materiały drukowane', 'Webinary', 'Spotkania i wydarzenia', 'Szkolenia',
    'Bezpośredni kontakt z instytucjami', 'Materiały przekazywane szkołom', 'Materiały przekazywane poradniom i ośrodkom pomocy'
  ], 5, true);
  addCheckboxes(form, '19. Jakie formaty treści powinny być wykorzystywane częściej? Wybierz maksymalnie pięć odpowiedzi.', [
    'Krótkie posty informacyjne', 'Artykuły eksperckie', 'Poradniki', 'Infografiki', 'Materiały do pobrania',
    'Odpowiedzi na najczęściej zadawane pytania', 'Krótkie filmy', 'Rozmowy z ekspertami', 'Webinary', 'Podcasty',
    'Newsletter', 'Relacje z wydarzeń', 'Raporty i podsumowania działalności', 'Anonimowe historie przypadków',
    'Wypowiedzi pracowników i ekspertów', 'Kampanie społeczne'
  ], 5, true);
  addMultipleChoice(form, '20. Jak często TKOPD powinien publikować treści w mediach społecznościowych?', [
    'Codziennie', '3-4 razy w tygodniu', '1-2 razy w tygodniu', 'Kilka razy w miesiącu',
    'Tylko wtedy, gdy pojawia się ważna informacja', 'Nie mam zdania'
  ]);
  addCheckboxes(form, '21. Jaki ton komunikacji powinien stosować TKOPD? Wybierz maksymalnie pięć odpowiedzi.', [
    'Profesjonalny', 'Ekspercki', 'Empatyczny', 'Spokojny', 'Bezpośredni', 'Przyjazny',
    'Edukacyjny', 'Formalny', 'Prosty i zrozumiały', 'Mobilizujący do działania', 'Ostrożny', 'Wspierający'
  ], 5, true);

  addSection(form, 'VI. Komunikacja tematów trudnych i wrażliwych');
  addMultipleChoice(form, '22. Jak oceniasz gotowość TKOPD do komunikowania tematów trudnych i wrażliwych?', [
    'Bardzo wysoko', 'Wysoko', 'Średnio', 'Nisko', 'Bardzo nisko', 'Nie mam zdania'
  ]);
  addCheckboxes(form, '23. Jakie tematy są najtrudniejsze do komunikowania?', [
    'Przemoc wobec dzieci', 'Przemoc seksualna', 'Kryzysy psychiczne dzieci i młodzieży', 'Konflikty rodzinne',
    'Sprawy sądowe', 'Ograniczenie lub odebranie praw rodzicielskich', 'Piecza zastępcza', 'Śmierć i żałoba',
    'Dane dotyczące udzielonej pomocy', 'Historie konkretnych osób', 'Pozyskiwanie darowizn',
    'Sytuacje kryzysowe dotyczące organizacji', 'Krytyka lub negatywne komentarze'
  ], null, true);
  addCheckboxes(form, '24. Czego potrzebuje zespół, aby lepiej komunikować tematy wrażliwe? Wybierz maksymalnie pięć odpowiedzi.', [
    'Jasnych zasad komunikacji', 'Procedury reagowania kryzysowego', 'Wytycznych dotyczących ochrony danych',
    'Wytycznych dotyczących publikowania wizerunku dzieci', 'Gotowych wzorów komunikatów', 'Konsultacji prawnej',
    'Konsultacji psychologicznej', 'Szkoleń medialnych', 'Szkoleń z prostego języka', 'Szkoleń z komunikacji kryzysowej',
    'Szybkiego procesu akceptacji treści', 'Jednej osoby koordynującej komunikację'
  ], 5, true);

  addSection(form, 'VII. Komunikacja wewnętrzna');
  addGrid(form, '25. Jak oceniasz komunikację wewnętrzną w TKOPD?', [
    'Przepływ informacji pomiędzy pracownikami', 'Przepływ informacji pomiędzy zespołami', 'Informowanie o nowych projektach',
    'Informowanie o wydarzeniach', 'Informowanie o sukcesach organizacji', 'Informowanie o zmianach organizacyjnych',
    'Dostęp do aktualnych materiałów', 'Jasność podziału odpowiedzialności', 'Możliwość zgłaszania pomysłów',
    'Możliwość przekazywania informacji do publikacji', 'Szybkość podejmowania decyzji',
    'Komunikacja pomiędzy zespołem a osobami zarządzającymi'
  ], ['1 - bardzo źle', '2', '3', '4', '5 - bardzo dobrze']);
  addCheckboxes(form, '26. Z jakich kanałów komunikacji wewnętrznej korzystasz najczęściej?', [
    'E-mail', 'Telefon', 'Wiadomości SMS', 'Komunikator internetowy', 'Spotkania zespołu', 'Rozmowy bezpośrednie',
    'Dysk współdzielony', 'Dokumenty online', 'Kalendarz współdzielony', 'Intranet'
  ], null, true);
  addCheckboxes(form, '27. Jakie problemy występują w komunikacji wewnętrznej? Wybierz maksymalnie pięć odpowiedzi.', [
    'Informacje docierają zbyt późno', 'Nie wiadomo, kto powinien przekazać informacje', 'Informacje są rozproszone',
    'Trudno znaleźć aktualne dokumenty', 'Zbyt wiele kanałów komunikacji', 'Zbyt mało spotkań', 'Zbyt wiele spotkań',
    'Brak podsumowań ustaleń', 'Brak informacji zwrotnej', 'Brak wiedzy o działaniach innych zespołów',
    'Niejasny podział obowiązków', 'Decyzje nie są komunikowane całemu zespołowi',
    'Brak procedury przekazywania tematów do promocji', 'Nie występują istotne problemy'
  ], 5, true);
  addParagraph(form, '28. Jakich informacji potrzebujesz częściej w swojej pracy?');
  addCheckboxes(form, '29. Jakie rozwiązania usprawniłyby komunikację wewnętrzną? Wybierz maksymalnie pięć odpowiedzi.', [
    'Regularne spotkania całego zespołu', 'Krótkie spotkania operacyjne', 'Miesięczne podsumowanie działań',
    'Wspólny kalendarz', 'Newsletter wewnętrzny', 'Jedno repozytorium dokumentów', 'Jasny podział odpowiedzialności',
    'Lista osób kontaktowych', 'Formularz zgłaszania tematów do komunikacji', 'Kalendarz publikacji',
    'Procedura akceptacji materiałów', 'Baza zdjęć, grafik i dokumentów', 'Szablony materiałów', 'Komunikator zespołowy'
  ], 5, true);

  addSection(form, 'VIII. Organizacja komunikacji');
  addMultipleChoice(form, '30. Czy obecny podział odpowiedzialności za komunikację jest jasny?', [
    'Zdecydowanie tak', 'Raczej tak', 'Częściowo', 'Raczej nie', 'Zdecydowanie nie', 'Nie wiem'
  ]);
  addMultipleChoice(form, '31. Kto powinien odpowiadać za komunikację TKOPD?', [
    'Jedna osoba zatrudniona do komunikacji', 'Wyznaczony członek obecnego zespołu',
    'Kilka osób reprezentujących różne obszary', 'Zespół komunikacyjny', 'Zarząd organizacji',
    'Zewnętrzna agencja lub specjalista', 'Model mieszany: osoba wewnętrzna i wsparcie zewnętrzne'
  ], true);
  addParagraph(form, '32. Jak powinien wyglądać proces przygotowania publikacji?');
  addCheckboxes(form, '33. Jakie materiały lub narzędzia byłyby najbardziej przydatne zespołowi? Wybierz maksymalnie siedem odpowiedzi.', [
    'Strategia komunikacji', 'Księga identyfikacji wizualnej', 'Szablony postów', 'Szablony prezentacji',
    'Szablony dokumentów', 'Kalendarz publikacji', 'Plan komunikacji kryzysowej', 'Baza zdjęć', 'Baza grafik',
    'Lista ekspertów i tematów', 'Bank pomysłów na treści', 'Instrukcja prostego języka',
    'Zasady wykorzystywania wizerunku', 'Formularz zgłaszania tematów', 'Raporty dotyczące skuteczności komunikacji'
  ], 7, true);
  addMultipleChoice(form, '34. Czy byłbyś/byłabyś gotowy/gotowa współtworzyć komunikację TKOPD?', [
    'Tak, regularnie', 'Tak, okazjonalnie', 'Tak, w obszarze mojej specjalizacji', 'Raczej nie', 'Nie', 'Trudno powiedzieć'
  ]);
  addCheckboxes(form, '35. W jakie działania komunikacyjne możesz się zaangażować?', [
    'Proponowanie tematów', 'Pisanie tekstów', 'Weryfikacja merytoryczna', 'Występowanie w materiałach wideo',
    'Udzielanie wywiadów', 'Prowadzenie webinarów', 'Przygotowywanie materiałów edukacyjnych',
    'Przekazywanie informacji o działaniach zespołu', 'Robienie zdjęć', 'Pomoc przy wydarzeniach',
    'Kontakt z instytucjami', 'Kontakt z mediami', 'Nie chcę się angażować'
  ], null, true);

  addSection(form, 'IX. Cele i priorytety strategii');
  addCheckboxes(form, '36. Jakie powinny być najważniejsze cele komunikacji TKOPD w ciągu najbliższych dwóch lat? Wybierz maksymalnie pięć odpowiedzi.', [
    'Zwiększenie rozpoznawalności TKOPD', 'Zwiększenie liczby osób korzystających z pomocy',
    'Lepsze informowanie o dostępnych usługach', 'Budowanie zaufania do organizacji',
    'Edukowanie na temat praw dziecka', 'Zwiększenie widoczności ekspertów TKOPD',
    'Wzmocnienie współpracy z instytucjami', 'Pozyskiwanie nowych partnerów', 'Pozyskiwanie darczyńców',
    'Zwiększenie wpływów z 1,5% podatku', 'Rekrutacja pracowników i wolontariuszy', 'Promowanie projektów',
    'Budowanie pozycji eksperckiej', 'Poprawa komunikacji wewnętrznej', 'Uporządkowanie identyfikacji wizualnej',
    'Przygotowanie organizacji do komunikacji kryzysowej'
  ], 5, true);
  addParagraph(form, '37. Które trzy działania komunikacyjne powinny zostać wdrożone w pierwszej kolejności?');
  addCheckboxes(form, '38. Po czym poznamy, że komunikacja TKOPD jest skuteczna? Wybierz maksymalnie pięć odpowiedzi.', [
    'Więcej osób będzie znało TKOPD', 'Więcej osób będzie wiedziało, jak uzyskać pomoc',
    'Wzrośnie liczba wejść na stronę internetową', 'Wzrośnie liczba obserwujących w mediach społecznościowych',
    'Wzrośnie zaangażowanie pod publikacjami', 'Wzrośnie liczba zapisów na wydarzenia',
    'Wzrośnie liczba zapytań od instytucji', 'Wzrośnie liczba partnerstw', 'Wzrośnie liczba darczyńców',
    'Wzrosną wpływy z 1,5% podatku', 'Wzrośnie liczba publikacji medialnych', 'Zespół będzie lepiej poinformowany',
    'Skróci się czas przygotowania publikacji', 'Komunikacja stanie się bardziej regularna'
  ], 5, true);

  addSection(form, 'X. Podsumowanie');
  addParagraph(form, '39. Co TKOPD robi obecnie dobrze w obszarze komunikacji?');
  addParagraph(form, '40. Co należy zmienić w pierwszej kolejności?');
  addParagraph(form, '41. Jakie jedno zdanie powinno najlepiej opisywać TKOPD?');
  addParagraph(form, '42. Jakie hasło lub główny komunikat powinien kojarzyć się z TKOPD?');
  addParagraph(form, '43. Czy jest coś jeszcze, co powinno zostać uwzględnione w strategii komunikacji TKOPD?');

  form.setConfirmationMessage('Dziękujemy za udział w ankiecie. Twoje odpowiedzi pomogą przygotować strategię komunikacji odpowiadającą potrzebom TKOPD oraz jego zespołu.');
  Logger.log('Link do edycji formularza: ' + form.getEditUrl());
  Logger.log('Link do wypełnienia ankiety: ' + form.getPublishedUrl());
}

function addSection(form, title) {
  form.addPageBreakItem().setTitle(title);
}

function addParagraph(form, title) {
  form.addParagraphTextItem().setTitle(title).setRequired(false);
}

function addMultipleChoice(form, title, choices, hasOther) {
  const item = form.addMultipleChoiceItem().setTitle(title).setRequired(false);
  item.setChoiceValues(choices);
  if (hasOther) item.showOtherOption(true);
}

function addCheckboxes(form, title, choices, maxChoices, hasOther) {
  const item = form.addCheckboxItem().setTitle(title).setRequired(false);
  item.setChoiceValues(choices);
  if (hasOther) item.showOtherOption(true);
  if (maxChoices) {
    const validation = FormApp.createCheckboxValidation()
      .requireSelectAtMost(maxChoices)
      .setHelpText('Wybierz maksymalnie ' + maxChoices + ' odpowiedzi.')
      .build();
    item.setValidation(validation);
  }
}

function addGrid(form, title, rows, columns) {
  form.addGridItem()
    .setTitle(title)
    .setRows(rows)
    .setColumns(columns)
    .setRequired(false);
}

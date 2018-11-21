

### Identifikationskortsgenerering

Med hjälp av googles directory-api kan ni komma åt namn och grupper för elever och personal vid NTI Johanneberg.

Målet är att skapa unika passer/identifikations/lånekort för varje person.

Passerkorten kommer skrivas ut på en plastkortsskrivare. Skrivaren fungerar som en vanlig skrivare, men skriver ut på plastkort istället för papper.

Passerkorten ska innehålla:

* Foto på personen som kortet tillhör

* Namn på personen

* Om det är en elev: elevens unika id.

* Om det är personal: personalens titel (t.ex "Rektor" eller "Vaktmästare").

* En streckkod som identifierar vem personen är och som kan användas vid t.ex. bokutlåning

Utseendet på kortet kommer skapas med hjälp av elever på designprogrammet, och kommer levereras i form av en png-fil, som man sedan kan använda ett bildbehandlingsbibliotek för att lägga till personliga bilder, text och streckkoder ovanpå.

Man ska kunna

* Smidigt generera kort åt multipla personer åt gången (t.ex genom att ladda upp bilder namngivna på ett givet sätt).
* Smidigt skapa kort åt en enskild person.
* Smidigt kunna skriva ut kort åt multipla personer.
* Smidigt kunna skriva ut en enskild persons kort.
* Smidigt kunna uppdatera t.ex bild och namn på en person, och sen skriva ut ett nytt kort.
* Söka efter användare och se deras kort och information.
* Ta bort användares kort och information.

### Kurslitteraturutlåning

Varje år försvinner kurslitteratur för stora belopp vid NTI Johanneberg. För att förhindra detta vill skolan ha ett system som håller koll på

* titlar och relevant information om titeln (t.ex namn, isbn, ersättningskostnad).
* relevant information om böcker (t.ex unik streckkod, anmärkning om t.ex status på boken (t.ex "saknar framsida")).
* vem som lånat ut vilken bok.
* till vem boken har lånats ut.
* när boken ska vara återlämnad.

Systemet kommer fungera med hjälp av unika streckkoder i varje bok (man köper streckkodsetiketter på rulle och klistrar in i varje bok), och elevernas streckkodsförsedda kort. Streckkodsläsare används sen vid in/utlåning av böcker.

Administratörer (personal) ska kunna

* Skapa, uppdatera och ta bort titlar.
* Smidigt kunna registrera och knyta flera böcker åt gången till en titel.
* Smidigt kunna registrera och knyta en enstaka bok till en titel.
* Markera böcker som borttappade/förstörda/avskrivna.
* Smidigt kunna låna ut böcker åt flera elever i sträck. Föreslaget arbetsflöde:
  * Lärare loggar in.
  * Lärare väljer aktuell titel och återlämningsdatum.
  * För varje elev blippar sen läraren.
    * först bokens unika streckkod. 
    * sen elevens kort. 
    * Boken blir då automagiskt utlånad till eleven enligt återlämningsdatumet som ställts in tidigare.
* Smidigt kunna ta reda på vem en specifik bok tillhör.
* Smidigt kunna lämna tillbaks böcker.

* Smidigt kunna låna ut en enstaka bok åt en enskild elev.

Elever ska

* smidigt kunna se vilka böcker man lånat, och relevant information kopplat till lånen.

Systemet ska även kunna

- Skicka ut påminnelser om återlämning.
- Sammanställa information för generering av utskick av återbetalningsanmodan.
- Ta fram statistik kring böcker som kan vara relevant.

### Biblioteksystem

Bibliotekssystemet ska användas för låta elever och personal låna ut böcker från skolans bibliotek till sig själva.

En administratör (personal) ska kunna:

* Registrera titlar med lämplig information. Här underlättar det med en integration med t.ex. googles isbn-api.
* Registrera böcker (även dessa böcker kommer ha en unik streckkod).
* Se status på aktuella lån osv.
* Markera böcker som borttappade/förstörda/avskrivna.

Samtliga användare ska kunna:

* Söka bland titlar och böcker.
* Se lånestatus på en specifik bok.
* Se sina lån.
* Låna och lämna tillbaks böcker.
* Ge varje bok ett kort betyg.

Systemet ska även kunna

- skicka ut påminnelser om återlämning.
- Sammanställa information för generering av utskick av återbetalningsanmodan.
- Ta fram statistik kring böcker som kan vara relevant.

## Resurser

[Awesome Ruby](https://github.com/markets/awesome-ruby)

[Ruby Toolbox](https://www.ruby-toolbox.com/)

[Google API Client (Ruby)](https://developers.google.com/api-client-library/ruby/)

[Google Directory API](https://developers.google.com/admin-sdk/directory/)


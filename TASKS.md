[X] - MILESTONE 1
Mettiamo su un nuovo progetto React aiutandoci con Vite
Ripuliamo come sempre l’app da file e codice di esempio non necessari
Installiamo il necessario: React Router, Axios e Bootstrap (se volete utilizzarlo)

[X] - MILESTONE 2
Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.
Creiamo 2 pagine:
La home, in cui mostreremo la lista dei film
La pagina di dettaglio di un singolo film

[X] - MILESTONE 3
Configuriamo l’app di backend (repo webapp-express) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware CORS
Proviamo quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri

[X] - MILESTONE 4
In ultimo, effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni

[ ] - Bonus
Impostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props!
Curare l’aspetto estetico della vostra applicazione


* DAY 2
Esercizio
Miglioriamo l’esperienza dell’utente inserendo

[X] - MILESTONE 1 (BACKEND)
Predisponiamo un’API per salvare nel database una nuova recensione legata ad un film
Testiamola su postman e verifichiamo che nel DB venga effettivamente inserita una nuova recensione

[X] - MILESTONE 2 (FRONTEND)
Creiamo un componente che contenga il form per le recensioni
Inseriamo questo componente nella pagina di dettaglio del film
All’invio del form, la nuova recensione viene salvata sul database e visualizzata nella pagina, in fondo alle altre

[ ] - BONUS:
Inseriamo una validazione nel form di recensione

* DAY3

Esercizio

[ ] - Concludiamo migliorando l’esperienza sulla nostra SPA, inserendo un loader.
creiamo un componente loader
Questo componente deve poter apparire su qualunque pagina della nostra app.
Creiamo e sfruttiamo un Context per dare la possibilità ad ogni componente di attivare o disattivare il loader sulla propria pagina

[ ] - BONUS:
Personalizziamo l’aspetto della nostra app col CSS
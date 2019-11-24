var express = require('express'); // Carica in memoria la libreria express usando la variabile express

var app = express(); // Assegno la variabile express nella variabile app

app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici come 
                                                // fogli di stile css e immagini

app.set('view engine', 'pug');  // Invece di usare le pagine con estensione ".html" contenute nella cartella 
                                // principale, dico a express di usare files con estensione ".pug" contenuti 
                                // nella cartella "views" e usarla come cartella principale 
                                // per trovare le pagine con estensione ".pug"

const lego = require('./lego.json'); // Copio il contenuto del file lego.json nella variabile models

app.get('/', function (req, res)
 { 
  res.render('index', {
   title: 'Lego',
   scatole: lego.models //Passa il vettore profiles alla pagina index.pug
 });
});

/* SECONDA PAGINA
app.get('/profile', (req, res) => {
  const person = people.profiles.find((p) => p.id === req.query.id);
  res.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});
*/

app.listen(3000, function () {
 console.log('Apertura server web su porta 3000!!');
});

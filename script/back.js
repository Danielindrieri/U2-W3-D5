class Game {
  constructor(_name, _description, _console, _price,_uscita) {
    this.name = _name;
    this.description = _description;
    this.console = _console;
    this.price = _price;
    this.uscita= _uscita
  }
}

const API_KEY = "https://striveschool-api.herokuapp.com/api/product";

fetch(API_KEY, {
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MzQ5ZGFlZGU3ODAwMTU3OTM0ZjIiLCJpYXQiOjE3MzE2NzExOTcsImV4cCI6MTczMjg4MDc5N30.R1dA9-mZmzSbj1L3VoQqa4bOw_bz9HlN9RbKTXNUI_c"
  }
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Errore nel recupero dei dati');
    }
  })
  .then((One) => {
    if (One) {
      document.getElementById('name').value = One.name || '';
      document.getElementById('description').value = One.description || '';
      document.getElementById('console').value = One.console || '';
      document.getElementById('price').value = One.price || '';
       document.getElementById('uscita').value = One.uscita || ''
    }
  })
  .catch((err) => console.log('Errore', err));

const form = document.getElementById('Game-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const descriptionInput = document.getElementById('description');
  const consoleInput = document.getElementById('console');
  const priceInput = document.getElementById('price');
  const uscitaInput = document.getElementById('uscita')

  const newGame = new Game(
    nameInput.value,
    descriptionInput.value,
    consoleInput.value,
    priceInput.value,
    uscitaInput.value
  );

  fetch(API_KEY, {
    method: 'POST',
    body: JSON.stringify(newGame),
    headers: {
      'Content-Type': 'application/json',
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MzQ5ZGFlZGU3ODAwMTU3OTM0ZjIiLCJpYXQiOjE3MzE2NzExOTcsImV4cCI6MTczMjg4MDc5N30.R1dA9-mZmzSbj1L3VoQqa4bOw_bz9HlN9RbKTXNUI_c"
    },
   
  })
    .then((response) => {
      if (response.ok) {
        alert('Gioco salvato');
        nameInput.value = '';
        descriptionInput.value = '';
        consoleInput.value = '';
        priceInput.value = '';
        uscitaInput.value = ''
      } else {
        throw new Error('Errore nella creazione del gioco');
      }
    })
    .catch((error) => {
      console.log('ERROR', error);
    });
});
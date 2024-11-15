const API_KEY = "https://striveschool-api.herokuapp.com/api/product/"

fetch(API_KEY, {
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MzQ5ZGFlZGU3ODAwMTU3OTM0ZjIiLCJpYXQiOjE3MzE2NzExOTcsImV4cCI6MTczMjg4MDc5N30.R1dA9-mZmzSbj1L3VoQqa4bOw_bz9HlN9RbKTXNUI_c"
    }
})
  .then((response) => {
    console.log('RESPONSE', response)
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Errore')
    }
  })
  .then((arr) => {
    const row = document.getElementById('Zona1')
    arr.forEach((game) => {
      const newCol = document.createElement('div')
      newCol.classList.add('col', 'col-12', 'col-md-6', 'col-lg-4')

      newCol.innerHTML = `
        <div class="card">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${game.name}</h5>
                <p class="card-text">${game.description}</p>
                <p class="card-text">${game.console}</p>
                <p class="card-text">${game.price}€</p>
                <p class="card-text">${game.uscita}€</p>
                <a href="./lavorazione.html?id=${game._id}" class="btn btn-primary">Dettagli</a>
                  <a href="./lavorazione.html?gametId=${game._id} class="btn btn-primary"></a>
            </div>
        </div>
      `
      row.appendChild(newCol)
    })
  })
  .catch((error) => {
    console.log('ERROR', error)
  })
//Ciao Stefano ho provato ma ad una certa mi da un errore e non riesco a capire come corregerlo, ho preso spunto da quello che abbiamo fatto ieri.
//ma non riesco a venirne a capo, puoi gentilmente darmi una review velocissima su cosa non funziona e come potevo risolverlo,grazie e cerca di guarire
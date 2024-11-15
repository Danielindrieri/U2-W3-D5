const API_KEY = "https://striveschool-api.herokuapp.com/api/product/"
const gameId = '123'

fetch(`${API_KEY}/${gameId}`)
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Errore nel recupero dei dettagli del gioco')
    }
  })
  .then((One) => {
    const col = document.getElementById('card-container')
    col.innerHTML = `
      <div class="card">
          <img src="https://www.adobe.com/creativecloud/photography/discover/media_15955bf89f635a586d897b5c35f7a447b495f6ed7.jpeg?width=1200&format=pjpg&optimize=medium" class="card-img-top" alt="foto">
          <div class="card-body">
              <h5 class="card-title">${One.name}</h5>
              <p class="card-text">${One.description}</p>
              <p class="card-text">${One.console}</p>
              <p class="card-text">${One.price}€</p>
              <p class="card-text">${One.uscita}€</p>
              <a class="btn btn-warning" href="./backoffice.html?gameId=${gameId}">MODIFICA</a>
              <button class="btn btn-danger" onclick="deleteGame('${gameId}')">ELIMINA</button>
          </div>
      </div>
    `
  })
  .catch((error) => {
    console.log('ERROR', error)
  })
const deleteGame = function (gameId) {
  fetch(`${API_KEY}/${gameId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        alert('Gioco eliminato!')
        window.location.assign('./welcome.html')
      } else {
        throw new Error('Errore nell eliminazione del gioco')
      }
    })
    .catch((error) => {
      console.log('ERROR', error)
    })
}

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
            <img src="https://images.pexels.com/photos/18688773/pexels-photo-18688773/free-photo-of-presents-by-christmas-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top w-100 " alt="foto" >
            <div class="card-body">
                <h5 class="card-title">${game.name}</h5>
                <p class="card-text">${game.description}</p>
                <p class="card-text">${game.brand}</p>
                <p class="card-text">${game.imageUrl}€</p>
                <p class="card-text">${game.price}€</p>
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
window.addEventListener("load", crearTarjetas);

function crearTarjetas() {
  fetch('app/product.json')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(function(product) {
        output += `
          <div class="col-md-4">
            <div class="card mb-4">
              <img src="${product.imagen}" class="card-img-top" alt="${product.nombre}">
              <div class="card-body">
                <h5 class="card-title">${product.nombre}</h5>
                <p class="card-text">${product.descripcion.join(', ')}</p>
              </div>
            </div>
          </div>
        `;
      });
      document.getElementById('product-cards').innerHTML = output;
    })
    .catch(err => console.log(err));
}

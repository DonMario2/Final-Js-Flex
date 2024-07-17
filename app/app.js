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


document.addEventListener('DOMContentLoaded', function() {
  const typeSelect = document.getElementById('type-select');
  
  // Realizar una solicitud fetch para obtener los datos desde product.json
  fetch('app/product.json') 
      .then(response => response.json())
      .then(data => {
          // Cargar los nombres de los productos en el menú desplegable
          data.forEach(function(product) {
              const option = document.createElement('option');
              option.value = product.nombre;
              option.textContent = product.nombre;
              typeSelect.appendChild(option);
          });

          // Guardar los datos en una variable global para usarlos en loadSizes
          window.pizzaData = data;
      })
      .catch(error => console.error('Error al cargar los datos:', error));
});

function loadSizes() {
  const typeSelect = document.getElementById('type-select');
  const sizeSelect = document.getElementById('size-select');
  const pizzaSizes = document.getElementById('pizza-sizes');

  // Obtener el producto seleccionado
  const selectedProduct = window.pizzaData.find(product => product.nombre === typeSelect.value);

  // Limpiar las opciones anteriores del menú desplegable de tamaños
  sizeSelect.innerHTML = '';

  // Cargar las opciones del menú desplegable de tamaños según el producto seleccionado
  if (selectedProduct) {
    selectedProduct.tamaños.forEach(function(tamaño) {
      const option = document.createElement('option');
      option.value = tamaño.tamaño;
      option.textContent = tamaño.tamaño;
      sizeSelect.appendChild(option);
    });

    // Mostrar el menú desplegable de tamaños
    pizzaSizes.classList.remove('d-none');
  } else {
    // Ocultar el menú desplegable de tamaños si no se selecciona ninguna pizza
    pizzaSizes.classList.add('d-none');
  }
}
const card = document.createElement('div');
card.classList.add('card');

const image = document.createElement('img');
image.src = producto.imagen;
image.classList.add('card-img-top');

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');

const title = document.createElement('h5');
title.classList.add('card-title');
title.textContent = producto.nombre;

const description = document.createElement('p');
description.classList.add('card-text');
description.textContent = producto.descripcion;

const price = document.createElement('p');
price.classList.add('card-text');
price.textContent = producto.precio;

cardBody.appendChild(title);
cardBody.appendChild(description);
cardBody.appendChild(price);

card.appendChild(image);
card.appendChild(cardBody);

// Agrega la tarjeta al contenedor de las tarjetas
productosContainer.appendChild(card);

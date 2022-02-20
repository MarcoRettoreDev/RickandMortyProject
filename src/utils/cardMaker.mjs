const cardMaker = object =>
{
  // console.log(object);
  const card = document.createElement('article');
  card.classList.add('card');
  card.innerHTML =
  `
    <div class="img-container">
      <img src="${object.image}" alt="Image of ${object.name}">
    </div>
    <div class="card-text">
      <div class="text-header">
        <h3 class="card-title" id="class-title">${object.name}</h3>
        <p class="${object.status.toLowerCase()} status">${object.status}</p>
      </div>
      <div class="text-wrapper text-title">
        <p> Specie </p>
        <p> Dimension </p>
        </div>
      <div class="text-wrapper">
        <p>${object.species}</p>
        <p class="card-dimension">${object.location.name}</p>
      </div>
    </div>
  `;
  return card;
}

export { cardMaker };
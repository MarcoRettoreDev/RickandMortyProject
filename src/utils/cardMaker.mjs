const cardMaker = object =>
{
  const card = document.createElement('article');
  card.classList.add('card');
  card.innerHTML =
  `
    <div class="card-wrapper">
        <div class="img-container">
          <img src="${object.image}" alt="Image of ${object.name}">
        </div>
        <div class="card-text">
          <h3 class="card-title" id="class-title">${object.name}</h3>
          <div>
            <p> Status: </p>
            <p class="card-status">${object.status}</p>
          </div>
          <div>
            <p> Dimension: </p>
            <p class="card-dimension">${object.origin.name}</p>
          </div>
        </div>
    </div>
  `;
  return card;
}

export { cardMaker };
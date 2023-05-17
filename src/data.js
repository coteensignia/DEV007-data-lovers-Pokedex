
// card
export function card(i, poke) {
  const out = ` 
  <div class="card-pokemon" id="${Math.abs(poke.num)-1}"> 
    <button pos="${i}" class="card">  
      <div class="card-content">
        <p class="numberPokemon" >${poke.num}</p>
        <h3>${poke.name}</h3>
        <div class="power">
        ${getTypePokemon(poke.type)}
        </div>
      </div>
      <div class="card-img">
        <img src="${poke.img}" class="imagen" alt=""> 
      </div>
    </button>
  </div>`
  return out
}


// card modal
export function openCard(data_, place) {
  document.querySelectorAll('.card').forEach((el)=>{
    el.addEventListener('click', ()=>{
      const pokeinfo = data_[el.getAttribute('pos')]

      place.insertAdjacentHTML(
        'beforeend', cardDetails(pokeinfo)
      );
      const cardDetailsContainer = document.querySelector('.card-details-container')
      cardDetailsContainer.addEventListener('click', ()=>{
        cardDetailsContainer.remove()
      })
    })
  })
}


// card modal (contenido)
function cardDetails(poke) {
  const out  = `
  <div class="card-details-container">
    <div class="card-details">
      <div class="card-details-head">
        <div class="num">${poke.num}</div>
        <div class="power">${getTypePokemon(poke.type)}</div>
      </div>
      
      <div class="card-details-main">
        <div class="title">${poke.name}</div>
        <img class="image" src="${poke.img}" alt="" loading="lazy">
      </div>

      <div class="card-details-about">
        <div class="title">Datos</div>
        <div class="sec">
          <div class="title">Weight</div>
          <div class="info">${poke.size.weight}</div>
          </div>
          <div class="sec">
          <div class="title">Height</div>
          <div class="info">${poke.size.height}</div>
        </div>
        <div class="sec">
          <div class="title">Rarity</div>
          <div class="info">${poke['pokemon-rarity']}</div>
        </div>
        <div class="sec">
          <div class="title">Generation</div>
          <div class="info">${poke.generation.name}</div>
        </div>
      </div>

      <div class="card-details-description">
        <div class="title">Descripción</div>
        <div class="info">${poke.about}</div>
      </div>

    </div>
  </div>
  `
  return out
}





// iconos de tipo de pokemon
function getTypePokemon(types) {
  let img = "";
  types.forEach(function (type) {
    img += `<img src="./img/${type}.png" alt="${type}" widht="50px" height="50px" loading="lazy">`;
  });
  return img;
}





//  estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};






































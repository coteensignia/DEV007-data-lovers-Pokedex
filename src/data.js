
// ------------------------------------ card
export function card(i, poke, hide=null) {

  let hideInitial = hide==='hide' ? ' style="display:none;" ': ''

  const out = ` 
  <div ${hideInitial} class="card-pokemon" id="${Math.abs(poke.num)-1}"> 
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

export function ordeningCp(data_){
  data_.sort((a, b) => {
    if (a.stats["max-cp"] > b.stats["max-cp"] ) {
      return -1;
    }
    if (a.stats["max-cp"] <  b.stats["max-cp"] ) {
      return 1;
    }
    return 0;
  });
return data_
}

export function ordeningNum(data_){
  data_.sort((a, b) => {
    if (a.num < b.num ) {
      return -1;
    }
    if (a.num  > b.num ) {
      return 1;
    }
    return 0;
  });
return data_
}







// ------------------------------------ card modal
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


// ------------------------------------ card modal (contenido)
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
          <div class="title">ATTACK-DEFENSE</div>
          <div class="info">${promedio(poke.stats["base-attack"],poke.stats["base-defense"])}</div>
        </div>
        <div class="sec">
          <div class="title">CP</div>
          <div class="info">${poke.stats["max-cp"]}</div>
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

//promedio
function promedio (attack,defense){
  return attack-defense
}



// ------------------------------------ iconos de tipo de pokemon
function getTypePokemon(types) {
  let img = "";
  types.forEach(function (type) {
    img += `<img src="./img/${type}.png" alt="${type}" widht="50px" height="50px" loading="lazy">`;
  });
  return img;
}





// ------------------------------------  estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};























































// crear pagina (funcion)
export function paginationInit(data, elemLast, page_num, page, containerCard, body ) {

  let out = ''
  data.pokemon.forEach((poke, idx)=>{
    if(idx<=elemLast){
      out += card(idx, poke)
    }else{
      out += card(idx, poke, 'hide')
    }
  })

  containerCard.innerHTML = out
  page.innerHTML = page_num
  
  // crea funciones para modales
  openCard(data.pokemon, body)
  

}





// boton siguiente
export function next(maxElemPerPage, elemIni, elemLast, page_num, page, len) {
  if(elemLast<=len){
    elemIni = elemIni+maxElemPerPage
    elemLast = elemIni+maxElemPerPage-1

    document.querySelectorAll('.card-pokemon').forEach((el,idx)=>{
      if(idx>=elemIni && idx<=elemLast){
        el.style.display = 'flex'
      }else{
        el.style.display = 'none'
      }
    })
    page_num++
    page.innerHTML = page_num
  }
  return [elemIni, elemLast, page_num]
}


// boton previo
export function prev(maxElemPerPage, elemIni, elemLast, page_num, page) {
  if(elemIni !== 0){
    elemIni = elemIni-maxElemPerPage
    elemLast = elemIni+maxElemPerPage-1
    document.querySelectorAll('.card-pokemon').forEach((el,idx)=>{
      if(idx>=elemIni && idx<=elemLast){
        el.style.display = 'flex'
      }else{
        el.style.display = 'none'
      }
    })
    page_num--
    page.innerHTML = page_num
  }
  return [elemIni, elemLast, page_num]
}





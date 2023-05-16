//import { name, type } from './data.js';
// import data from './data/lol/lol.js';
//import pokemon from './data/pokemon/pokemon.js';
import data from "./data/pokemon/pokemon.js";
//llamasdos al DOM
const containerCard = document.querySelector(".containerCard");
const infoCard = document.getElementById("infoCard");

//creacion de funcion para recorrer
function getTypePokemon(types) {
  let img = "";
  types.forEach(function (type) {
    img += `<img src="./img/${type}.png" alt="${type}" widht="50px" height="50px">`;
  });
  return img;
}

/*apaga modal*/
infoCard.style.display = "none";

//impresion de cartas con paginación

var current_page = 1;
var obj_per_page = 30;
function totNumPages() {
  return Math.ceil(data.pokemon.length / obj_per_page);
}

function prevPage() {
  containerCard.innerHTML = "";
  if (current_page > 1) {
    current_page--;
    change(current_page);
  }
}
function nextPage() {
  containerCard.innerHTML = "";
  if (current_page < totNumPages()) {
    current_page++;
    change(current_page);
  }
}
function change(page) {
  var btn_next = document.getElementById("btn_next");
  btn_next.addEventListener("click", nextPage);
  var btn_prev = document.getElementById("btn_prev");
  btn_prev.addEventListener("click", prevPage);

  var page_span = document.getElementById("page");
  if (page < 1) page = 1;
  if (page > totNumPages()) page = totNumPages();

  for (var i = (page - 1) * obj_per_page; i < page * obj_per_page; i++) {
    
    let pokemon_unit = data.pokemon[i];
    let typePokemon = getTypePokemon(pokemon_unit.type);

    containerCard.innerHTML += ` 
      <div class="card-pokemon"> 
        <button class="card" id="${Math.abs(pokemon_unit.num)-1}">  
          <div class="card-content">
            <p class="numberPokemon" >${pokemon_unit.num}</p>
            <h3>${pokemon_unit.name}</h3>
            <div class="power">
            ${typePokemon}
            </div>
          </div>
          <div class="card-img">
            <img src="${pokemon_unit.img}" class="imagen" alt=""> 
          </div>
        </button>
      </div>`;
        
  }

  for(let i = 0; i < containerCard.children.length; i++){
    console.log(containerCard.children[i]);
    containerCard.children[i].addEventListener("click", (e) => {
      console.log(e.target.classList(card-pokemon))

    });
  }

  page_span.innerHTML = page;
  if (page == 1) {
    btn_prev.style.visibility = "hidden";
  } else {
    btn_prev.style.visibility = "visible";
  }
  if (page == totNumPages()) {
    btn_next.style.visibility = "hidden";
    
  } else {
    btn_next.style.visibility = "visible";
  }
}
window.onload = function () {
  change(1);
};



function openModal(idPokemon) {
  infoCard.style.display = "block";
  console.log(idPokemon); 
  const objPokemon = data.pokemon[idPokemon];
  console.log(objPokemon);
  document.getElementById("infoCard").innerHTML = `
        <div class="mainInfo">
          <p class="numberPokemon">${objPokemon.num}</p>
          <p class="close"></p>
          <h3>${objPokemon.name}</h3>
          <img src="${objPokemon.img}" alt="">
          <div>
            <div class="power">${objPokemon.type}</div>
            <h4>Sobre</h4>
            <div>
              <div class="weightDiv">
                <div>            
                  <img src="" alt="">
                  <p class="weight"></p>
                </div>
                <p>Peso</p>
              </div>
              <div class="sizeDiv">
                <div>            
                  <img src="" alt="">
                  <p class="size"></p>
                </div>
                <p>Medida</p>
              </div>
              <div class="movesDiv">
                <p class="moves"></p>
                <p>Moves</p>
            </div>
            <div class="description">
              <p>${objPokemon.about}</p>
            </div>
            <div>
              <h3>Estadística</h3>
              <div>
    
              </div>
            </div>
          </div> `;         
}



document.addEventListener("keyup", e => {
 if(e.target.matches(".search")){
  
    document.querySelectorAll(".card").forEach(nombre =>{
    nombre.textContent.toLowerCase().includes(e.target.value) // incluye el valor 
    ?nombre.classList.remove()          //remueve elementos del dom 
    :nombre.classList.add("filtro")
  });
  if(e.key === "Escape")e.target.value = "";
}
  
});


/*
const buttonType = document.getElementById("buttomType");
const listType = document.getElementById("listType");

//const iter = data.pokemon.filter(i=> type ="water")



buttonType.addEventListener("click", ()=>{
  listType.style.display = "block";
});
listType.addEventListener("click",(e)=>{
const classListType = e.target.classList[0];
switch (classListType) {
case ('water'):  containerCard.innerHTML += ` 
<div id="card-pokemon>
    <button class="card" id="${Math.abs(pokemon_unit.num)-1}">
      <div class="card-content">
        <p class="numberPokemon" >${pokemon_unit.num}</p>
        <h3>${pokemon_unit.name}</h3>
        <div class="power">
        ${typePokemon}
        </div>
      </div>
      <div class="card-img">
        <img src="${pokemon_unit.img}" class="imagen" alt=""> 
      </div>
    </button>
  </div>`;
})
  

    break;

  default:
    break;
}
});*/
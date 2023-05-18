


// important funciones para crear tarjetas "card" y crear modal "openCard"
import { card, openCard } from './data.js';

// important datos
import data from "./data/pokemon/pokemon.js";

// crar constantes curpo, contenedor e input de busqueda
const body = document.querySelector("body")
const containerCard = document.querySelector(".containerCard")
const buscar = document.getElementById("buscar")

// crear constantes de botones para filtrado y orden
const buttonType = document.getElementById("buttomType");
const buttonOrder = document.getElementById("buttomOrder");








//impresion de cards + paginación

let current_page = 1;
const obj_per_page = 30;

function totNumPages() {
  return Math.ceil(data.pokemon.length / obj_per_page);
}

// boton previo
function prevPage() {
  containerCard.innerHTML = "";
  if (current_page > 1) {
    current_page--;
    change(current_page);
  }
}

// boton next
function nextPage() {
  containerCard.innerHTML = "";
  if (current_page < totNumPages()) {
    current_page++;
    change(current_page);
  }
}



// crear pagina (funcion)

function change(page) {
  const btn_next = document.getElementById("btn_next");
  btn_next.addEventListener("click", nextPage);
  const btn_prev = document.getElementById("btn_prev");
  btn_prev.addEventListener("click", prevPage);

  const page_span = document.getElementById("page");
  if (page < 1) page = 1;
  if (page > totNumPages()) page = totNumPages();

  for (let i = (page - 1) * obj_per_page; i < page * obj_per_page; i++) {
    
    containerCard.innerHTML +=  card(i,data.pokemon[i]);
    // crea funciones para modales
    openCard(data.pokemon, body)
    let pokemon_unit = data.pokemon[i];
    let typePokemon = getTypePokemon(pokemon_unit.type);

    containerCard.innerHTML += ` 
      <div class="card-pokemon" id="${Math.abs(pokemon_unit.num)-1}"> 
        <button class="card">  
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
    containerCard.children[i].addEventListener("click", () => {
    });
  }

  page_span.innerHTML = page;
  if (page === 1) {
    btn_prev.style.visibility = "hidden";
  } else {
    btn_prev.style.visibility = "visible";
  }
  if (page === totNumPages()) {
    btn_next.style.visibility = "hidden";
    
  } else {
    btn_next.style.visibility = "visible";
  }
}



// crear pagina (ejecucion)
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


// interaccion input busqueda

buscar.addEventListener("keydown", e => {
  const val = e.target.value.toLowerCase()
  let out = ''
  data.pokemon.forEach((poke,idx)=>{
    // EVALUAR SI LO Q ENTRA EN INPUT EXISTE COMO PARTE DE ALGUN NOMBRE
    // poke.name   (el nombre en objeto)
    // includes    (revisa si incluye en )
    // val         (el texto q esta entrando en input)
    if(poke.name.includes(val)){
      out += card(idx, poke)
    }
  })
  containerCard.innerHTML = out

  // crea funciones para modales
  openCard(data.pokemon, body)
});


/*
const buttonType = document.getElementById("buttomType");
const listType = document.getElementById("listType");

//const iter = data.pokemon.filter(i=> type ="water")



// interaccion botones filtrado

buttonType.addEventListener("click", e=>{
  // como el div q contiene el boton NODO PADRE
  const parent = e.target.parentNode
  // insertAdjacentHTML AGREGA CONTENIDO SIN RECARGAR EL DIV a diferencia de innerHTML
  parent.insertAdjacentHTML(
    'beforeend', `
    <ul class="list-type" id="listType">
      <li class="btn-filter-type"    poke-type="water"  >  Water     </li>
      <li class="btn-filter-type"   poke-type="dragon"   >  Dragon    </li>
      <li class="btn-filter-type"     poke-type="fire"     >  Fire      </li>
      <li class="btn-filter-type" poke-type="electric" >  Electric  </li>
      <li class="btn-filter-type"    poke-type="fairy"    >  Fairy     </li>
      <li class="btn-filter-type"    poke-type="ghost"    >  Ghost     </li>
      <li class="btn-filter-type"      poke-type="ice"      >  Ice       </li>
      <li class="btn-filter-type"   poke-type="normal"   >  Normal    </li>
      <li class="btn-filter-type"    poke-type="grass"    >  Grass     </li>
      <li class="btn-filter-type" poke-type="fighting" >  Fighting  </li>
      <li class="btn-filter-type"      poke-type="bug"      >  Bug       </li>
      <li class="btn-filter-type"   poke-type="poison"   >  Poison    </li>
      <li class="btn-filter-type"   poke-type="flying"   >  Flying    </li>
      <li class="btn-filter-type"  poke-type="psychic"  >  Psychic   </li>
      <li class="btn-filter-type"     poke-type="rock"     >  Rock      </li>
      <li class="btn-filter-type"     poke-type="dark"     >  Dark      </li>
      <li class="btn-filter-type"   poke-type="ground"   >  Ground    </li>
      <li class="btn-filter-type"    poke-type="steel"    >  Steel     </li>
    </ul>
    `
  );

  // tomar todos los botones
  const btnFilterType = document.querySelectorAll('.btn-filter-type')

  // filtrar y crear modales(openCard)
  btnFilterType.forEach(btn => {
    btn.addEventListener('click', btn_e=>{
      //pokeType  --->  el tipo en el atributo del boton
      const pokeType = btn_e.target.getAttribute('poke-type')
      let out = ''
      
      // filtrado
      data.pokemon.forEach((e_poke,idx_poke)=>{
        // e_poke.type (es el arregle de tipos de pokemon en el objeto con 251)
        //.includes    (si está incluido)
        // pokeType    (el tipo en el atributo del boton)
        if(e_poke.type.includes(pokeType)){
          out += card(idx_poke, e_poke)
        }
      })

      containerCard.innerHTML = out

      // modal
      openCard(data.pokemon, body) 
    })
  });


  // mostrar y ocultar lista de botones azules
  const listType = document.querySelector('#listType')
  // escucha cuando entra
  listType.addEventListener('mouseenter', ()=>{
    // escucha cuando sale
    listType.addEventListener('mouseleave', ()=>{
      // remueve
      listType.remove()
    })
  })


})


// interaccion bonton mostrar todos

buttonOrder.addEventListener("click", ()=>{
  // crea todas las card
  let out = ''
  data.pokemon.forEach((e_poke,idx_poke)=>{
    out += card(idx_poke, e_poke)
  })
  containerCard.innerHTML = out
  // crea funciones para modales
  openCard(data.pokemon, body)
});


  default:
    break;
}
})
    

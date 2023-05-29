//------------------------------------ inicialización

// important funciones desde data.js
import {  ordeningCp, ordeningNum, filteringName, filteringType, calculation } from "./data.js";

// important datos desde base de datos pokemon.js
import data from "./data/pokemon/pokemon.js";

// crear constantes cuerpo, contenedor e input de busqueda

const body = document.querySelector("body");
const containerCard = document.querySelector(".containerCard");
const buscar = document.getElementById("buscar");

// crear constantes de botones para filtrado y orden
const buttonType = document.getElementById("buttomType");
const buttonOrder = document.getElementById("buttomOrder");
const buttomCp = document.getElementById("buttomCp");

// crear constantes para pag de inicio 
const startButton = document.getElementById("startButton");
const upperDoc = document.getElementById("upperDoc");
const nav = document.getElementById("nav");
const paginado = document.getElementById("paginado");
const pagStart = document.getElementById("pagStart");


// apagar pag de inicio y encender segunda pagina 

startButton.addEventListener("click", () => {
  pagStart.style.display = "none";
  containerCard.style.display = "flex";
  upperDoc.style.display = "flex";
  nav.style.display = "flex";
  paginado.style.display = "flex";
});

//------------------------------------ impresion de cards + paginación



function card(i, poke, hide = null) {
  const hideInitial = hide === "hide" ? ' style="display:none;" ' : "";

  const out = ` 
    <div ${hideInitial} class="card-pokemon"> 
      <button pos="${i}" class="card">  
        <div class="card-content">
          <p class="numberPokemon" >${poke.num}</p>
          <h3>${poke.name}</h3>
          <div class="power">
          ${getTypePokemon(poke.type)}
          </div>
          <h2>Cp-max: ${poke.stats["max-cp"]}</h2>
        </div>
        <div class="card-img">
          <img src="${poke.img}" class="imagen" alt=""> 
        </div>
      </button>
    </div>`;
  //console.log(typeof(card))
  return out;
}


// crear pagina (ejecucion)
// change(1,data,containerCard,body)
// change(1,data,containerCard,body)
const maxElemPerPage = 30;
let elemIni = 0;
let elemLast = maxElemPerPage - 1;
const len = data.pokemon.length;
let page_num = 1;

const page = document.getElementById("page");
const btn_next = document.getElementById("btn_next");
const btn_prev = document.getElementById("btn_prev");

paginationInit(data, elemLast, page_num, page, containerCard, body);

btn_next.addEventListener("click", () => {
  [elemIni, elemLast, page_num] = next(
    maxElemPerPage,
    elemIni,
    elemLast,
    page_num,
    page,
    len
  );
});

btn_prev.addEventListener("click", () => {
  [elemIni, elemLast, page_num] = prev(
    maxElemPerPage,
    elemIni,
    elemLast,
    page_num,
    page
  );
});
// crear pagina (funcion)
function paginationInit(data, elemLast, page_num, page, containerCard, body) {
  let out = "";
  data.pokemon.forEach((poke, idx) => {
    if (idx <= elemLast) {
      out += card(idx, poke);
    } else {
      out += card(idx, poke, "hide");
    }
  });

  containerCard.innerHTML = out;
  page.innerHTML = page_num;

  // crea funciones para modales
  openCard(data.pokemon, body);
}

// boton siguiente
function next(maxElemPerPage, elemIni, elemLast, page_num, page, len) {
  if (elemLast <= len) {
    elemIni = elemIni + maxElemPerPage;
    elemLast = elemIni + maxElemPerPage - 1;

    document.querySelectorAll(".card-pokemon").forEach((el, idx) => {
      if (idx >= elemIni && idx <= elemLast) {
        el.style.display = "flex";
      } else {
        el.style.display = "none";
      }
    });
    page_num++;
    page.innerHTML = page_num;
  }
  return [elemIni, elemLast, page_num];
}

// boton previo
function prev(maxElemPerPage, elemIni, elemLast, page_num, page) {
  if (elemIni !== 0) {
    elemIni = elemIni - maxElemPerPage;
    elemLast = elemIni + maxElemPerPage - 1;
    document.querySelectorAll(".card-pokemon").forEach((el, idx) => {
      if (idx >= elemIni && idx <= elemLast) {
        el.style.display = "flex";
      } else {
        el.style.display = "none";
      }
    });
    page_num--;
    page.innerHTML = page_num;
  }
  return [elemIni, elemLast, page_num];
}

// ------------------------------------ interaccion input busqueda


buscar.addEventListener("input", function () {
  const val = buscar.value;

  let out = "";
  let pokemonFilter;

  if (val.length >= 3) {
    pokemonFilter = filteringName(data.pokemon, val);
    pokemonFilter.forEach((e_poke, idx_poke) => {
      out += card(idx_poke, e_poke);
    });
    containerCard.innerHTML = out;
    openCard(pokemonFilter, body);
  } else if (val.length === 0) {
    data.pokemon.forEach((e_poke, idx_poke) => {
      out += card(idx_poke, e_poke);
    });
    containerCard.innerHTML = out;
    openCard(data.pokemon, body);
  }
});

// ------------------------------------ interaccion botones filtrado

// tipo de pokemon con barra desplegable

buttonType.addEventListener("click", (e) => {
  // como el div q contiene el boton ----> NODO PADRE
  const parent = e.target.parentNode;
  // insertAdjacentHTML   --->   AGREGA CONTENIDO SIN RECARGAR EL DIV a diferencia de innerHTML
  parent.insertAdjacentHTML(
    "beforeend",
    `
      <ul class="list-type" id="listType">
        <li class="btn-filter-type water"    poke-type="water"    >  Water     </li>
        <li class="btn-filter-type dragon"   poke-type="dragon"   >  Dragon    </li>
        <li class="btn-filter-type fire"     poke-type="fire"     >  Fire      </li>
        <li class="btn-filter-type electric" poke-type="electric" >  Electric  </li>
        <li class="btn-filter-type fairy"    poke-type="fairy"    >  Fairy     </li>
        <li class="btn-filter-type ghost"    poke-type="ghost"    >  Ghost     </li>
        <li class="btn-filter-type ice"      poke-type="ice"      >  Ice       </li>
        <li class="btn-filter-type normal"   poke-type="normal"   >  Normal    </li>
        <li class="btn-filter-type grass"    poke-type="grass"    >  Grass     </li>
        <li class="btn-filter-type fighting" poke-type="fighting" >  Fighting  </li>
        <li class="btn-filter-type bug"      poke-type="bug"      >  Bug       </li>
        <li class="btn-filter-type poison"   poke-type="poison"   >  Poison    </li>
        <li class="btn-filter-type flying"   poke-type="flying"   >  Flying    </li>
        <li class="btn-filter-type psychic"  poke-type="psychic"  >  Psychic   </li>
        <li class="btn-filter-type rock"     poke-type="rock"     >  Rock      </li>
        <li class="btn-filter-type dark"     poke-type="dark"     >  Dark      </li>
        <li class="btn-filter-type ground"   poke-type="ground"   >  Ground    </li>
        <li class="btn-filter-type steel"    poke-type="steel"    >  Steel     </li>
      </ul>
      `
  );

  // tomar todos los botones
  const btnFilterType = document.querySelectorAll(".btn-filter-type");

  // filtrar y crear modales(openCard)
  btnFilterType.forEach((btn) => {
    btn.addEventListener("click", (btn_e) => {
      //pokeType  --->  el tipo en el atributo del boton
      const pokeType = btn_e.target.getAttribute("poke-type");
      let out = "";

      // filtrado
      const pokemonFilter = filteringType(data.pokemon, pokeType);
      pokemonFilter.forEach((e_poke, idx_poke) => {
        // e_poke.type (es el arregle de tipos de pokemon en el objeto con 251)
        //.includes    (si está incluido)
        // pokeType    (el tipo en el atributo del boton)
        out += card(idx_poke, e_poke);
      });

      containerCard.innerHTML = out;
      // modal
      openCard(data.pokemon, body);
    });
  });

  // mostrar y ocultar lista de botones azules
  const listType = document.querySelector("#listType");
  // escucha cuando entra
  listType.addEventListener("mouseenter", () => {
    // escucha cuando sale
    listType.addEventListener("mouseleave", () => {
      // remueve
      listType.remove();
    });
  });
});

// ------------------------------------ interaccion bonton mostrar ordenados por numero

buttonOrder.addEventListener("click", () => {
  // crea todas las card
  let out = "";
  const ordenNum = ordeningNum(data.pokemon);
  ordenNum.forEach((e_poke, idx_poke) => {
    out += card(idx_poke, e_poke);
  });
  containerCard.innerHTML = out;
  // crea funciones para modales
  openCard(data.pokemon, body);
});

buttomCp.addEventListener("click", () => {
  let out = "";
  const orderCp = ordeningCp(data.pokemon);

  orderCp.forEach((e_poke, idx_poke) => {
    out += card(idx_poke, e_poke);
  });
  containerCard.innerHTML = out;
  // crea funciones para modales
  openCard(data.pokemon, body);
});


// ------------------------------------ card modal
function openCard(data_, place) {
  document.querySelectorAll(".card").forEach((el) => {
    el.addEventListener("click", () => {
      const pokeinfo = data_[el.getAttribute("pos")];

      place.insertAdjacentHTML("beforeend", cardDetails(pokeinfo));
      const cardDetailsContainer = document.querySelector(
        ".card-details-container"
      );
      cardDetailsContainer.addEventListener("click", () => {
        cardDetailsContainer.remove();
      });
    });
  });
}

// ------------------------------------ card modal (contenido)
function cardDetails(poke) {
  const out = `
    <div class="card-details-container">
      <div class="card-details">
        <div class="card-details-head">
          <div class="num">${poke.num}</div>
          <div class="exis"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-xbox-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#C5312A" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
          <path d="M9 8l6 8" />
          <path d="M15 8l-6 8" />
        </svg></div>
        </div>
        
        <div class="card-details-main">
          <div class="title">${poke.name}</div>
          <img class="image" src="${poke.img}" alt="" loading="lazy">
        </div>
        <div class="power">${getTypePokemon(poke.type)}</div>
        <div class="card-details-about">
          <div class="title">Datos</div>
          <br>
          <div class="sec">
            <div class="title">Weight</div>
            <div class="info">${poke.size.weight}</div>
            </div>
            <div class="sec">
            <div class="title">Height</div>
            <div class="info">${poke.size.height}</div>
          </div>
          <div class="sec">
            <div class="title">Att-Def</div>
            <div class="info">${calculation(poke.stats["base-attack"], poke.stats["base-defense"])}</div>
          </div>
          <div class="sec">
            <div class="title">Cp-max</div>
            <div class="info">${poke.stats["max-cp"]}</div>
          </div>
        </div>
  
        <div class="card-details-description">
          <div class="title">Descripción</div>
        
          <div class="info">${poke.about}</div>
        </div>
  
      </div>
    </div>
    `;
  return out;
}

// ------------------------------------ iconos de tipo de pokemon
function getTypePokemon(types) {
  let img = "";
  types.forEach(function (type) {
    img += `<img src="./img/${type}.png" alt="${type}" widht="30px" height="30px" loading="lazy">`;
  });
  return img;
}
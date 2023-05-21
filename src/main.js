
//------------------------------------ inicialización

// important funciones para crear tarjetas "card" y crear modal "openCard"
import { card, openCard, paginationInit, next, prev,ordeningCp, ordeningNum} from './data.js';


// important datos
import data from "./data/pokemon/pokemon.js";


// crar constantes curpo, contenedor e input de busqueda
const body = document.querySelector("body")
const containerCard = document.querySelector(".containerCard")
const buscar = document.getElementById("buscar")

// crear constantes de botones para filtrado y orden
const buttonType = document.getElementById("buttomType");
const buttonOrder = document.getElementById("buttomOrder");
const buttomCp = document.getElementById("buttomCp");








//------------------------------------ impresion de cards + paginación

// crear pagina (ejecucion)
// change(1,data,containerCard,body)
// change(1,data,containerCard,body)
let maxElemPerPage = 30;
let elemIni = 0;
let elemLast = maxElemPerPage-1;
let len = data.pokemon.length;
let page_num = 1;

const page = document.getElementById("page");
const btn_next = document.getElementById("btn_next");
const btn_prev = document.getElementById("btn_prev");

paginationInit(data, elemLast, page_num, page, containerCard, body)



btn_next.addEventListener("click", ()=>{
  [elemIni,elemLast,page_num]  = next(maxElemPerPage, elemIni, elemLast, page_num, page, len)
});

btn_prev.addEventListener("click", ()=>{
  [elemIni,elemLast,page_num]  = prev(maxElemPerPage, elemIni, elemLast, page_num, page)
});











// ------------------------------------ interaccion input busqueda

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














// ------------------------------------ interaccion botones filtrado

buttonType.addEventListener("click", e=>{
  // como el div q contiene el boton ----> NODO PADRE
  const parent = e.target.parentNode
  // insertAdjacentHTML   --->   AGREGA CONTENIDO SIN RECARGAR EL DIV a diferencia de innerHTML
  parent.insertAdjacentHTML(
    'beforeend', `
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












// ------------------------------------ interaccion bonton mostrar todos

buttonOrder.addEventListener("click", ()=>{
  // crea todas las card
  let out = ''
  const ordenNum = ordeningNum(data.pokemon)
  ordenNum.forEach((e_poke,idx_poke)=>{
    out += card(idx_poke, e_poke)
  })
  containerCard.innerHTML = out
  // crea funciones para modales
  openCard(data.pokemon, body)
});


buttomCp.addEventListener('click', ()=>{
  let out = ''
  let orderCp = ordeningCp(data.pokemon)

  orderCp.forEach((e_poke,idx_poke)=>{
    out += card(idx_poke, e_poke)
  })
  containerCard.innerHTML = out
  // crea funciones para modales
  openCard(data.pokemon, body)
});















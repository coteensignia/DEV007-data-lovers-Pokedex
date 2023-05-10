//import { name, type } from './data.js';
// import data from './data/lol/lol.js';
//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// crear una funcion para obtener los pokemons
//la funcion debe ir al objeto pokemon
//recorrerlo con un for o foreach para obtener numero,nombre, imagen y tipo
    
const containerCard = document.querySelector(".containerCard");
const infoCard = document.getElementById("infoCard");
const upperDoc = document.getElementById("upperDoc");
const bottomDoc = document.getElementById("bottomDoc");


/*const card = document.querySelectorAll(".card");*/
// Creación de objeto de type
const x ={ 
  water: '',
  dragon: 'https://images.wikidexcdn.net/mwuploads/wikidex/1/15/latest/20230128124905/Tipo_drag%C3%B3n_icono_EP.svg',
  electric: 'https://images.wikidexcdn.net/mwuploads/wikidex/8/84/latest/20230128125008/Tipo_el%C3%A9ctrico_icono_EP.svg',
  "fairy":'https://images.wikidexcdn.net/mwuploads/wikidex/b/b7/latest/20230128125233/Tipo_hada_icono_EP.svg',
  ghosh:'https://images.wikidexcdn.net/mwuploads/wikidex/3/3d/latest/20230128125103/Tipo_fantasma_icono_EP.svg',
  fire:'https://images.wikidexcdn.net/mwuploads/wikidex/5/55/latest/20230128125153/Tipo_fuego_icono_EP.svg',
  ice:'https://images.wikidexcdn.net/mwuploads/wikidex/a/a6/latest/20230128125423/Tipo_hielo_icono_EP.svg',
  grass: 'https://images.wikidexcdn.net/mwuploads/wikidex/e/ed/latest/20230128125654/Tipo_planta_icono_EP.svg',
  bug: 'https://images.wikidexcdn.net/mwuploads/wikidex/1/1a/latest/20230128124809/Tipo_bicho_icono_EP.svg',
  fighting: 'https://images.wikidexcdn.net/mwuploads/wikidex/f/f2/latest/20230128125518/Tipo_lucha_icono_EP.svg',
  normal: 'https://images.wikidexcdn.net/mwuploads/wikidex/c/c3/latest/20230128125621/Tipo_normal_icono_EP.svg',
  dark: 'https://images.wikidexcdn.net/mwuploads/wikidex/e/e0/latest/20230128132504/Tipo_siniestro_icono_EP.svg',
  steel: 'https://images.wikidexcdn.net/mwuploads/wikidex/6/6c/latest/20230128124521/Tipo_acero_icono_EP.svg',
  rock: 'https://images.wikidexcdn.net/mwuploads/wikidex/1/14/latest/20230128125805/Tipo_roca_icono_EP.svg',
  psychic: 'https://images.wikidexcdn.net/mwuploads/wikidex/2/22/latest/20230128125735/Tipo_ps%C3%ADquico_icono_EP.svg',
  ground: 'https://images.wikidexcdn.net/mwuploads/wikidex/c/c8/latest/20230128132625/Tipo_tierra_icono_EP.svg',
  poison: 'https://images.wikidexcdn.net/mwuploads/wikidex/f/fa/latest/20230128132735/Tipo_veneno_icono_EP.svg',
  fly: 'https://images.wikidexcdn.net/mwuploads/wikidex/6/6b/latest/20230128132815/Tipo_volador_icono_EP.svg'

};

function getTypePokemon(types){
  let img ="";
  types.forEach(function(type){
    console.log(type);
    
    img+= `<img src="./img/${type}.png" alt="${type}" widht="50px" height="50px">`;
   /* switch(type)
    {
      case 'water': 
       
      break; 
      case 'dragon': break;
      case 'electric': break;
      case 'ghosh': break;
      case 'fire': break;
      case 'ice': break;
      case 'grass': break;
      case 'bug': break;
      case 'electric': break;
      case 'fighting': break;
      case 'normal': break;
      case 'dark': break;
      case 'steel': break;
      case 'rock': break;
      case 'psychic': break;
      case 'ground': break;
      case 'poison': break;
      case 'fly': break;
      default: break;


    }*/
    

  }  
  );
  return img;
 
 /* if(n === "water"){return (x.water);} 
  else if(n === "dragon"){return (x.dragon);}
  else if(n === "electric"){return (x.electric);}
  else if(n === "ghosh"){return (x.ghosh);}
  else if(n === "fire"){return (x.fire);}
  else if(n === "ice"){return (x.ice);}
  else if(n === "grass"){return (x.grass);}
  else if(n === "bug"){return (x.bug);}
  else if(n === "fighting"){return (x.fighting);}
  else if(n === "normal"){return (x.normal);}
  else if(n === "dark"){return (x.dark);}
  else if(n === "steel"){return (x.steel);}
  else if(n === "rock"){return (x.rock);}
  else if(n === "psychic"){return (x.psychic);}
  else if(n === "ground"){return (x.ground);}
  else if(n === "poison"){return (x.poison);}
  else if(n === "fly"){return (x.fly);}*/
}




/*apaga modal*/
infoCard.style.display = "none";

data.pokemon.forEach((i,idx) => {
  let typePokemon = getTypePokemon(i.type);
  containerCard.innerHTML += ` 
    <button class="card" id="${idx}">
      <div class="card-content">
        <p class="numberPokemon" >${i.num}</p>
        <h3>${i.name}</h3>
        <div class="power">
        ${typePokemon}
        </div>
      </div>
      <div class="card-img">
        <img src="${i.img}" class="imagen" alt=""> 
      </div>
    </button>`;
    
});

const openModal = function (idPokemon)
{
    infoCard.style.display = "block";
    console.log(idPokemon);
    const objPokemon = data.pokemon[idPokemon];
    console.log(objPokemon);
    infoCard.innerHTML = `
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


document.addEventListener("DOMContentLoaded", function(event) {
  console.log(event);
  const showCard = document.getElementByClassName("card");
console.log(showCard);

  /*showCard.addEventListener("click", () =>{
    console.log(this.id);
    openModal(this.id);
  });*/
});


  






 
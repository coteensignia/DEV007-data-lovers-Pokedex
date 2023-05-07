//import { name, type } from './data.js';
// import data from './data/lol/lol.js';
//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// crear una funcion para obtener los pokemons
//la funcion debe ir al objeto pokemon
//recorrerlo con un for o foreach para obtener numero,nombre, imagen y tipo
    
const containerCard = document.querySelector(".containerCard");
/*const card = document.querySelectorAll(".card");*/
const infoCard = document.getElementById("infoCard");

/*apaga modal*/
infoCard.style.display = "none";

/*
a: function (data){
    const b = pokemon.
    const x=0
    for (let i=0; i< data.length; i++);

}*/


/*for (const i in data.pokemon) {
   console.log(data.pokemon[i].name);
        
    }*/
data.pokemon.forEach((i,idx) => {
  /*m: function (idx) { 
    const n = idx.toString()};
    
  console.log(m);*/
    containerCard.innerHTML += ` 
    <button class="card">
      <div class="card-content">
        <p class="numberPokemon" >${i.num}</p>
        <h3>${i.name}</h3>
        <div class="power">
        ${i.type}
        </div>
      </div>
      <div class="card-img">
        <img src="${i.img}" class="imagen" alt=""> 
      </div>
    </button>`;
      
   
   // if (type == "grass"){ power.innerHTML = `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2i8m2Z5K9N4N4G6_grass-medallion-by-zekrom-9-pokemon-tipo-erva-logo%2F&psig=AOvVaw0gvP4NXMC_7VFxxvrL9CbI&ust=1683563110765000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDJ0rvP4_4CFQAAAAAdAAAAABAJ`;
  
   // }
});

/*const imagen = document.querySelectorAll(".imagen");
console.log(imagen)
btnshow.forEach(imgenes => {
    imagenes.addEventListener("click", (e) =>{
        
        console.log(data.pokemon[e.target.src])
    });
    */

/*console.log(data.pokemon[0]);*/

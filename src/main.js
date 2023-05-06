//import { name, type } from './data.js';
// import data from './data/lol/lol.js';
//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// crear una funcion para obtener los pokemons
//la funcion debe ir al objeto pokemon
//recorrerlo con un for o foreach para obtener numero,nombre, imagen y tipo
    
const containerCard = document.querySelector(".containerCard");

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
    containerCard.innerHTML += ` 
    <div class="card">
      <div class="card-content">
        <p>${i.num}</p>
        <h3>${i.name}</h3>
        <div class="power">

        </div>
      </div>
      <div class="card-img">
        <img src="${i.img}" class="imagen" alt=""> 
      </div>
    </div>`;
      
});

/*const imagen = document.querySelectorAll(".imagen");
console.log(imagen)
btnshow.forEach(imgenes => {
    imagenes.addEventListener("click", (e) =>{
        
        console.log(data.pokemon[e.target.src])
    });
    */

/*console.log(data.pokemon[0]);*/

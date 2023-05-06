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
        <h2>${i.name}</h2>
        <p>descripcion</p>
        <button id="${idx}" class="btnshow">Click me</button>
    </div>`;
      
});

const btnshow = document.querySelectorAll(".btnshow");
console.log(btnshow)
btnshow.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        
        console.log(data.pokemon[e.target.id])
    });
    
});

/*console.log(data.pokemon[0]);*/

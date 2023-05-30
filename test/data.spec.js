import { ordeningCp, ordeningNum, filteringName,  filteringType, calculation } from "../src/data.js";

//Data ficticia simulando la data real
const data = [
  { "name": "bulbasaur", "type": ["grass"], "num": "1", "stats": {"max-cp": "1115"}},
  { "name": "psyduck", "type": ["water"],"num": "54", "stats": {"max-cp": "1106"}},
  { "name": "squirtle", "type": ["water"], "num": "7", "stats": {"max-cp": "946"}},
  { "name": "charmander", "type": ["fire"], "num": "4", "stats": { "max-cp": "980"}},
  { "name": "pikachu", "type": ["electric"], "num": "25", "stats": { "max-cp": "671"}}      
];

//Resultados esperados
const pokemonGrass = [{ "name": "bulbasaur", "type": ["grass"], "num": "1", "stats": {"max-cp": "1115"}}];
const pokemonWater = [
  { "name": "squirtle", "type": ["water"], "num": "7", "stats": {"max-cp": "946"}},
  {"name": "psyduck", "type": ["water"],"num": "54", "stats": {"max-cp": "1106"}}
];
const pokemonFire = [{ "name": "charmander", "type": ["fire"], "num": "4", "stats": {"max-cp": "980"}}];
const pokemonElectric = [{ "name": "pikachu", "type": ["electric"], "num": "25", "stats": {"max-cp": "671"}}];


//resultado esperado al ordenar por numero
const outputNewObjNum =
[
  { "name": "bulbasaur", "type": ["grass"], "num": "1", "stats": {"max-cp": "1115"}},
  { "name": "charmander", "type": ["fire"], "num": "4", "stats": {"max-cp": "980"}},
  { "name": "squirtle", "type": ["water"], "num": "7", "stats": {"max-cp": "946"}},
  { "name": "pikachu", "type": ["electric"], "num": "25", "stats": {"max-cp": "671"}},
  { "name": "psyduck", "type": ["water"],"num": "54", "stats": {"max-cp": "1106"}}    
];

//resultado ordenado por nombre
const outputNewObjName =
[
  { "name": "bulbasaur", "type": ["grass"], "num": "1", "stats": {"max-cp": "1115" }},
];

////resultado esperado al filtrar por CP
const outputNewObjCP =
[
  { "name": "bulbasaur", "type": ["grass"], "num": "1", "stats": {"max-cp": "1115" }},
  { "name": "psyduck", "type": ["water"],"num": "54", "stats": {"max-cp": "1106"}},
  { "name": "charmander", "type": ["fire"], "num": "4", "stats": {"max-cp": "980" }},
  { "name": "squirtle", "type": ["water"], "num": "7", "stats": {"max-cp": "946"}},
  { "name": "pikachu", "type": ["electric"], "num": "25", "stats": {"max-cp": "671"}}
]




// funciones de testeo

describe("ordeningCp", () => {
  it("ordeningCp es una función", () => {
    expect(typeof ordeningCp).toBe("function");
  });
  it("la función ordeningCp debería retornar un nuevo array de objeto ", () => {
    expect(typeof outputNewObjCP).toBe("object");
  });
  it("debería retornar el array de objeto ordenado por max-cp de mayor a menor", () => {
    expect(ordeningCp(data)).toEqual(outputNewObjCP);
  });
});

describe("ordeningNum", () => {
  it("ordeningNum es una función", () => {
    expect(typeof ordeningNum).toBe("function");
  });
  it("debería retornar el array de objeto ordenado  por numero de menor a mayor", () => {
    expect(ordeningNum(data)).toEqual(outputNewObjNum);
  });
});

describe("filteringName", () => {
  it("filteringName es una función", () => {
    expect(typeof filteringName).toBe("function");
  });
  it("la finción filteringName debe retornar un nuevo array de objeto con los datos de bulbasaur al ingresar como parámetro bulbasaur o BULBASAUR o Bulb ", () => {
    expect(filteringName(data,"Bulb")).toEqual(outputNewObjName);
  });

});

describe("filteringType", () => {
  it("filteringType es una función", () => {
    expect(typeof filteringType).toBe("function");
  });
  it("Debería retornar una nuevo array de objeto con los pokémons de tipo water", () => {
    expect(filteringType(data,"water")).toEqual(pokemonWater);
  });
  it("Debería retornar una nuevo array de objeto con los pokémons de tipo grass", () => {
    expect(filteringType(data,"grass")).toEqual(pokemonGrass);
  });
  
  it("Debería retornar una nuevo array de objeto con los pokémons de tipo fire", () => {
    expect(filteringType(data,"fire")).toEqual(pokemonFire);
  });
  it("Debería retornar una nuevo array de objeto con los pokémons de tipo electric", () => {
    expect(filteringType(data,"electric")).toEqual(pokemonElectric);
  });
     
});

describe("calculation", () => {
  it("calculation es una función", () => {
    expect(typeof calculation).toBe("function");
  });

  it("cuando se ingresan los parámetros (118,111) a la función calculation, esta debería retornar (7)", () => {
    expect(calculation(118, 111)).toBe(7);
  });
});
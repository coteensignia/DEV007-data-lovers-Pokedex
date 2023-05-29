import { ordeningCp, ordeningNum, filteringName,  calculation } from "../src/data.js";

//Data ficticia simulando la data real
const data = [
  { "name": "bulbasaur", "type": ["grass"], "num": "1", "stats": {"max-cp": "1115"}},
  { "name": "psyduck", "type": ["water"],"num": "54", "stats": {"max-cp": "1106"}},
  { "name": "squirtle", "type": ["water"], "num": "7", "stats": {"max-cp": "946"}},
  { "name": "charmander", "type": ["fire"], "num": "4", "stats": { "max-cp": "980"}},
  { "name": "pikachu", "type": ["electric"], "num": "25", "stats": { "max-cp": "671"}}      
];

//Resultados esperados
/*const pokemonGrass = [{ "name": "bulbasaur", "type": ["grass"], "num": "1", "stats": {"max-cp": "1115"}}];
const pokemonWater = [
  { "name": "squirtle", "type": ["water"], "num": "7", "stats": {"max-cp": "946"}},
  {"name": "psyduck", "type": ["water"],"num": "54", "stats": {"max-cp": "1106"}}
];
const pokemonFire = [{ "name": "charmander", "type": ["fire"], "num": "4", "stats": {"max-cp": "980"}}];
const pokemonElectric = [{ "name": "pikachu", "type": ["electric"], "num": "25", "stats": {"max-cp": "671"}}];*/
//resultado esperado al ordenar por numero
const outputNewArrayNum =
[
  { "name": "bulbasaur", "type": ["grass"], "num": "1", "stats": {"max-cp": "1115"}},
  { "name": "charmander", "type": ["fire"], "num": "4", "stats": {"max-cp": "980"}},
  { "name": "squirtle", "type": ["water"], "num": "7", "stats": {"max-cp": "946"}},
  { "name": "pikachu", "type": ["electric"], "num": "25", "stats": {"max-cp": "671"}},
  { "name": "psyduck", "type": ["water"],"num": "54", "stats": {"max-cp": "1106"}}    
];

//resultado ordenado por nombre
const outputNewArrayName =
[
  { "name": "bulbasaur", "type": ["grass"], "num": "1", "stats": {"max-cp": "1115" }},
  { "name": "charmander", "type": ["fire"], "num": "4", "stats": {"max-cp": "980"}},
  { "name": "pikachu", "type": ["electric"], "num": "25", "stats": {"max-cp": "671"}},
  { "name": "psyduck", "type": ["water"],"num": "54", "stats": {"max-cp": "1106"}},
  { "name": "squirtle", "type": ["water"], "num": "7", "stats": {"max-cp": "946"}}
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


describe("ordeningCp function", () => {
  it("is a function", () => {
    expect(typeof ordeningCp).toBe("function");
  });
  it("is a nuevo objeto", () => {
    expect(typeof outputNewObjCP).toBe("object");
  });

  it("debería retornar un objeto ordenado de mayor a menor por max-cp", () => {
    expect(ordeningCp(data.stats)).toEqual(outputNewObjCP);
  });
});

describe("ordeningNum", () => {
  it("is a function", () => {
    expect(typeof ordeningNum).toBe("function");
  });

  it("debería retornar un array ordenado de menor a mayor por numero", () => {
    expect(ordeningNum(data)).toEqual(outputNewArrayNum);
  });
});

describe("filteringName", () => {
  it("is a function", () => {
    expect(typeof filteringName).toBe("function");
  });
  it("debería retornar un array con los datos de bulbasaur", () => {
    expect(ordeningCp(data)).toEqual(outputNewArrayName);
  });

});

/*describe("filteringType", () => {
  it("is a function", () => {
    expect(typeof filteringType).toBe("function");
  });
  
  it("Debería retornar el tipo grass", () => {});
  expect(filteringType(data, "grass")).toEqual(pokemonGrass);

  it("Debería retornar el tipo water", () => {});
  expect(filteringType(data, "water")).toEqual(pokemonWater);

  it("Debería retornar el tipo fire", () => {});
  expect(filteringType(data, "fire")).toEqual(pokemonFire);

  it("Debería retornar el tipo electric", () => {});
  expect(filteringType(data, "electric")).toEqual(pokemonElectric);
  
});*/

describe("calculation", () => {
  it("is a function", () => {
    expect(typeof calculation).toBe("function");
  });

  it("debería retornar (7) para la resta de 118-111", () => {
    expect(calculation(118, 111)).toBe(7);
  });
});
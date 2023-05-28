import { ordeningCp, ordeningNum, calculation } from "../src/data.js";
import data from "../src/data/pokemon/pokemon.js";

describe("ordeningCp function", () => {
  it("is a function", () => {
    expect(typeof ordeningCp).toBe("function");
  });

  it("debería retornar un objeto al tocar el boton cp", () => {
    expect(ordeningCp(data.pokemon)).toBe("object");
  });
});

describe("ordeningNum", () => {
  it("is a function", () => {
    expect(typeof ordeningNum).toBe("function");
  });

  it("debería retornar un objeto al tocar el boton All", () => {
    expect(ordeningNum(data.pokemon)).toEqual();
  });
});

describe("calculation", () => {
  it("is a function", () => {
    expect(typeof calculation).toBe("function");
  });

  it("debería retornar un numero)", () => {
    expect(calculation(118, 111)).toBe(7);
  });
});
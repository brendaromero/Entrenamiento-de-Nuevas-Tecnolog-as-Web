describe("operaciones aritméticas", function(){
it("adicion", function(){
var suma = 1 + 3;
expect(suma).toEqual(4);
});

it("resta", function(){
var resta = 2 + 1;
expect(resta).toBeLessThan(4);
});

it("multiplicacion", function(){
var multiplicacion = 2 * 10;
expect(multiplicacion).toBeGreaterThan(9);
});

it("division", function(){
var division = 15 + 3;
expect(division).toEqual(5);
});
});



------------


describe("operaciones aritméticas", function(){
var suma;
var resta;
var multiplicacion;
var division;

beforeEach(function(){
suma = 1 + 3;
resta = 2 + 1;
multiplicacion = 2 * 10;
division = 15 + 3;
});

afterEach(function(){
suma = 0;
resta = 0;
multiplicacion = 0;
division = 0;
});

it("adicion", function(){ 
expect(suma).toEqual(4);
});

it("resta", function(){
expect(resta).toBeLessThan(4);
});

it("multiplicacion", function(){
expect(multiplicacion).toBeGreaterThan(9);
});

it("division", function(){
expect(division).toEqual(5);
});
});	


------------------
describe("calculadora",function(){
describe("operaciones aritméticas", function(){
var suma;
var resta;
var multiplicacion;
var division;

beforeEach(function(){
suma = 1 + 3;
resta = 2 + 1;
multiplicacion = 2 * 10;
division = 15 + 3;
});

afterEach(function(){
suma = 0;
resta = 0;
multiplicacion = 0;
division = 0;
});

it("adicion", function(){ 
expect(suma).toEqual(4);
});

it("resta", function(){
expect(resta).toBeLessThan(4);
});

it("multiplicacion", function(){
expect(multiplicacion).toBeGreaterThan(9);
});

it("division", function(){
expect(division).toEqual(5);
});
});

describe("operaciones especiales",function(){

beforeEach(function(){
var raizcuadrada = 0;
var exponente = 0;
var base = 0;
});

afterEach(function(){
var raizcuadrada = 0;
var exponente = 0;
var base = 0;
});

it("raiz cuadrada",function(){
raizcuadrada = 4
expect(raizcuadrada).toEqual(Math.sqrt(16));
});


it("exponente",function(){
var exponente = 3;
var base = 4;
respuesta = Math.pow(base,exponente);
expect(respuesta).toEqual(64);
});

});
});




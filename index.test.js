const test = require('tape')
const index = require('./index.js')

// PARTE DE ADIÇÃO

test("Soma básica", (t)=> {
    t.assert(index.somar(10, 5) === 15, "Adicionou corretamente")
    t.end()
});


test("Primeiro valor de adição negativo", (t)=> {
    t.assert(index.somar(-10, 10) === 0, "Adicionou corretamente")
    t.end()
});

test("Segundo valor de adição negativo", (t)=>{
    t.assert(index.somar(10, -1) === 9, "Adicionou corretamente")
    t.end()
});

test("Primeiro valor de adição em string", (t)=>{
    t.assert(index.somar("10", 10) === 20, "Adicionou corretamente")
    t.end()
});

test("Segundo valor de adição em string", (t)=> {
    t.assert(index.somar(10, "10") === 20, "Adicionou corretamente")
    t.end()
});

test("Primeiro valor de adição c/ letra", (t)=>{
    t.assert(index.somar("10A", 10) === "Os valores nao podem conter letras",
     "Bloqueou corretamente")
    t.end()
});

test("Segundo valor de adição c/ letra", (t)=>{
    t.assert(index.somar(10, "10A") === "Os valores nao podem conter letras",
     "Bloqueou corretamente")
    t.end()
});

// PARTE DE SUBTRAÇÃO

test("Subtração básica", (t)=>{
    t.assert(index.subtrair(10, 9) === 1, "Subtraiu corretamente")
    t.end()
});

test("Subtrair mais que o possível", (t)=> {
    t.assert(index.subtrair(5, 10) === -5, "Subtraiu corretamente")
    t.end()
});

test("Primeiro valor de subtração negativo", (t)=> {
    t.assert(index.subtrair(-10, 10) === -20, "Subtraiu corretamente")
    t.end()
});

test("Segundo valor de subtração negativo", (t)=> {
    t.assert(index.subtrair(10, -10) === 20, "Subtraiu corretamente")
    t.end()
});

test("Primeiro valor de subtração em string", (t)=> {
    t.assert(index.subtrair("10", 10) === 0, "Subtraiu corretamente")
    t.end()
});

test("Segundo valor de subtração em string", (t)=> {
    t.assert(index.subtrair(10, "10") === 0, "Subtraiu corretamente")
    t.end()
});

test("Primeiro valor de subtração c/ letra", (t)=> {
    t.assert(index.subtrair("10A", 10) === "Os valores nao podem conter letras",
     "Bloqueou corretamente")
    t.end()
});

test("Segundo valor de subtração c/ letra", (t)=> {
    t.assert(index.subtrair(10, "10A") === "Os valores nao podem conter letras",
     "Bloqueou corretamente")
    t.end()
});

// PARTE DE MULTIPLICAÇÃO

test("Multiplicação básica", (t) => {
	t.assert(index.multiplicar(10, 10) === 100, "Multiplicou corretamente");
	t.end();
});

test("Multiplicação com valor negativo", (t) => {
	t.assert(index.multiplicar(10, -10) === -100, "Multiplicou corretamente");
	t.end();
});

test("Multiplicação com dois valores negativo", (t) => {
	t.assert(index.multiplicar(-10, -10) === 100, "Multiplicou corretamente");
	t.end();
});

test("Multiplicação por 0", (t) => {
	t.assert(index.multiplicar(10, 0) === 0, "Multiplicou corretamente");
	t.end();
});

test("Primeiro valor de multiplicação em string", (t) => {
	t.assert(index.multiplicar("10", 10) === 100, "Multiplicou corretamente");
	t.end();
});

test("Segundo valor de multiplicação em string", (t) => {
	t.assert(index.multiplicar(10, "10") === 100, "Multiplicou corretamente");
	t.end();
});

test("Primeiro valor de multiplicação c/ letra", (t) => {
	t.assert(index.multiplicar("10A", 10) === "Os valores nao podem conter letras",
     "Bloqueou corretamente");
	t.end();
});

test("Segundo valor de multiplicação c/ letra", (t) => {
	t.assert(index.multiplicar(10, "10A") === "Os valores nao podem conter letras",
     "Bloqueou corretamente");
	t.end();
});

// PARTE DE DIVISÃO

test("Divisão básica", (t)=> {
    t.assert(index.dividir(10, 2) === 5, "Dividiu corretamente")
    t.end()
});

test("Primeiro valor de divisão negativo", (t)=> {
    t.assert(index.dividir(-10, 2) === -5, "Dividiu corretamente")
    t.end()
});

test("Segundo valor de divisão negativo", (t)=> {
    t.assert(index.dividir(10, -2) === -5, "Dividiu corretamente")
    t.end()
});

test("Primeiro valor de divisão zerado", (t)=> {
    t.assert(index.dividir(0, 2) === 0, "Dividiu corretamente")
    t.end(0)
});

test("Segundo valor de divisão zerado", (t)=>{
    t.assert(index.dividir(2, 0) === "O segundo valor não pode ser 0", "Bloqueou corretamente")
    t.end()
});

test("Primeiro valor de divisão menor que segundo", (t)=>{
    t.assert(index.dividir(5, 10) === 0.5, "Dividiu corretamente")
    t.end()
});

test("Primeiro valor de divisão em string", (t)=>{
    t.assert(index.dividir("10", 2) === 5, "Dividiu corretamente")
    t.end()
});

test("Segundo valor de divisão em string", (t)=>{
    t.assert(index.dividir(10, "2") === 5, "Dividiu corretamente")
    t.end()
});

test("Primeiro valor de divisão c/ letra", (t)=>{
    t.assert(index.dividir("10A", 2) === "Os valores nao podem conter letras",
     "Bloqueou corretamente")
    t.end()
});

test("Primeiro valor de divisão c/ letra", (t)=>{
    t.assert(index.dividir(10, "2A") === "Os valores nao podem conter letras",
     "Bloqueou corretamente")
    t.end()
});
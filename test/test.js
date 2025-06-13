"use strict";

// npm test

let expect = require("chai").expect;
let ortografia = require("../js/ortografia-simplificada.js");

describe("#ortografia-simplificada", function() {
	it("Versión 1", function() {
	let result = ortografia.Simplificar("vacaciones pingüino seguido queso argentino hola rey cimiento",1,0,0,0,0,0,0);
	expect(result).to.equal("bakaziones pinguino segido keso arjentino ola rei zimiento");
	});
	it("Versión 1 + Yeísmo", function() {
	let result = ortografia.Simplificar("caballo",1,1,0,0,0,0,0);
	expect(result).to.equal("kabayo");
	});
	it("Versión 1 + Seseo", function() {
	let result = ortografia.Simplificar("cabeza",1,0,1,0,0,0,0);
	expect(result).to.equal("kabesa");
	});
	it("Versión 1 + Neísmo", function() {
	let result = ortografia.Simplificar("niño",1,0,0,1,0,0,0);
	expect(result).to.equal("ninio");
	});
	it("Versión 1 + Leleo", function() {
	let result = ortografia.Simplificar("Por favor",1,0,0,0,1,0,0);
	expect(result).to.equal("Pol fabol");
	});
	it("Versión 2", function() {
	let result = ortografia.Simplificar("plancha caballo perro rosa siembra siempre axioma xilófono",2,0,0,0,0,0,0);
	expect(result).to.equal("planha kabaqo pevo vosa sienbra sienpre aksioma silófono");
	});
	it("Versión 2 + Yeísmo", function() {
	let result = ortografia.Simplificar("lluvia",2,1,0,0,0,0,0);
	expect(result).to.equal("yubia");
	});
	it("Versión 2 + Seseo", function() {
	let result = ortografia.Simplificar("zorro",2,0,1,0,0,0,0);
	expect(result).to.equal("sovo");
	});
	it("Versión 2 + Neísmo", function() {
	let result = ortografia.Simplificar("ruiseñor",2,0,0,1,0,0,0);
	expect(result).to.equal("vuisenior");
	});
	it("Versión 2 + Leleo", function() {
	let result = ortografia.Simplificar("el perro muerde",2,0,0,0,1,0,0);
	expect(result).to.equal("el pelo muelde");
	});
	it("Mayúsculas:minúsculas (A:a)", function() {
	let result = ortografia.Simplificar("La Casa Verde",1,0,0,0,0,1,0);
	expect(result).to.equal("la kasa berde");
	});
	it("Signos de puntuación (“¿¡”)", function() {
	let result = ortografia.Simplificar("¿Por qué? ¡Qué! «sí» “no” ‘no sé’ `tal vez´",2,0,0,0,0,0,1);
	expect(result).to.equal('Por ké? Ké! "sí" "no"' + " 'no sé' 'tal bez'");
	});
});

'use strict';

// node uso.js

let texto = 'Se escribe como se pronuncia y se pronuncia como se escribe';
let ortografia = require('../js/ortografia-fonetica.js');
let textoIntegral = ortografia.Simplificar(texto,1,0,0,0,0,0,0);

console.log(textoIntegral);

// Se eskribe komo se pronunzia i se pronunzia komo se eskribe

console.log("Welcome to the main module")
import {  usePlants } from './field.js'
import {  harvestPlants } from './harvester.js'

const plants = usePlants();

console.log(plants);
console.log(harvestPlants(plants));

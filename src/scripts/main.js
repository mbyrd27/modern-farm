console.log("Welcome to the main module")
import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { addPlant, usePlants } from './field.js'

const cropPlan = createPlan();

console.log(cropPlan);


const asparagusSeed = createAsparagus();

addPlant(asparagusSeed);

const somePlants = usePlants();

console.log(somePlants);
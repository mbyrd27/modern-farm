import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'

let plants = [];
let plan = createPlan();
let seeds = plantSeeds(plan);

const addPlant = function(seed) {
    plants.push(seed);
}

for (const seed of seeds) {
    addPlant(seed);
}


export const usePlants = () => plants.slice();
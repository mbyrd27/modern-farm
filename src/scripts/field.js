//import { createPlan } from './plan.js'


let plants = [];

export const addPlant = function(seed) {
    plants.push(seed);
}


export const usePlants = () => plants.slice();
console.log("Welcome to the main module")
import { createPlan } from './plan.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { Catalog } from './catalog.js'

const yearlyPlan = createPlan();

plantSeeds(yearlyPlan);

const plants = usePlants();

console.log(plants);

const plantsToSell = harvestPlants(plants);

console.log(plantsToSell);

Catalog(harvestPlants(plants));



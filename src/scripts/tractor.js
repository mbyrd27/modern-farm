import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { createAsparagus } from './seeds/asparagus.js'

import { addPlant } from './field.js'


export const plantSeeds = (plan) => {
    plan.forEach(row => {
        row.forEach(item => {
            switch(item) {
                case 'Asparagus':
                    addPlant(createAsparagus());
                    break;
                case 'Potato': 
                    addPlant(createPotato());
                    break;
                case 'Corn': 
                    addPlant(createCorn());
                    break;
                case 'Soybean':
                    addPlant(createSoybean());
                    break;
                case 'Sunflower': 
                    addPlant(createSunflower());
                    break;
                case 'Wheat':
                    addPlant(createWheat());
                    break;
                default:
                    console.log(`No ${item}`);
            }
        });
    });
}



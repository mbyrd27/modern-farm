import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { createAsparagus } from './seeds/asparagus.js'



export const plantSeeds = (plan) => {
    let seedList = []
    plan.forEach(row => {
        row.forEach(item => {
            switch(item) {
                case 'Asparagus':
                    seedList.push(createAsparagus());
                    break;
                case 'Potato': 
                    seedList.push(createPotato());
                    break;
                case 'Corn': 
                    seedList.push(createCorn());
                    break;
                case 'Soybean':
                    seedList.push(createSoybean());
                    break;
                case 'Sunflower': 
                    seedList.push(createSunflower());
                    break;
                case 'Wheat':
                    seedList.push(createWheat());
                    break;
                default:
                    console.log(`No ${item}`);
            }
        });
    });

    return seedList;
}


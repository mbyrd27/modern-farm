export const harvestPlants = (plants) => {
    let harvestArr = [];
    plants.forEach(item => {
        if (!Array.isArray(item)) {
            for (let i = 0; i < item.output; i++) {
                harvestArr.push(item);
            }
        }
        else {
            for (let i = 0; i < item[0].output; i++) {
                harvestArr.push(item[0]);
            }
        }
    }
)
return harvestArr;
}
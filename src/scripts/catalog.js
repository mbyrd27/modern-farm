export const Catalog = (food) => {
    let contentTarget = document.querySelector('.container');
    
    food.forEach(item => {
        let catalogItem = `<section class="food">
        <h2>${item.type}</h2>
        </section>
        `
        contentTarget.innerHTML += catalogItem;
    });

}
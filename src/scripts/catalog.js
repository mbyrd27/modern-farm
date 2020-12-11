export const Catalog = (food) => {
    let contentTarget = document.querySelector('.container');
    
    contentTarget.innerHTML += food.map(item => {
        return `<section class="food">
                    <h2>${item.type}</h2>
                </section>`
    }).join('');

}
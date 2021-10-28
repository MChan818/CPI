export default class ShopCounter{
    constructor(root, nombre, precio, contador, img, id){
        this.root = root;
        this.root.innerHTML += `
        <div class="menu-item-container">
            <img src="${img}"" alt="generico" class="menu-img">
                <h5 class="center">${nombre}</h5>
                <h5 class="center">$${precio}</h5>
                <div class="counter-container">
                    <button class="counter-minus button-menu" id="cm${id}">-</button>
                    <p class="counter-display" id="cd${id}">${contador}</p>
                    <button class="counter-plus button-menu" id="cp${id}">+</button>
                </div>
            <button class="button-menu button-buy" id="buy${id}"> Agregar al Pedido</button>
        </div>
        `;
    }
}


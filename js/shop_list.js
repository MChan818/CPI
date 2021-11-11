export default class ShopList{
    constructor(root,item,quantity){
        this.root = root;
        this.root.innerHTML += `
        <p class="text-list"><strong>${item} x</strong> ${quantity}</p>
        `;
    }
}
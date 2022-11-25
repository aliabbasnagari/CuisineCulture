class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

const item_list = [];

function addToCart(name, price) {
  item_list.push(new Item(name, price, 1));
  sessionStorage.myObject = JSON.stringify(item_list); //will set object to the stringified myObject
}

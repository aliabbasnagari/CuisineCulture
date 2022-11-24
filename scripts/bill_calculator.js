class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const item_list = [];
var item1 = new Item("Test", 1);
item_list.push(item1);

function addToCart(name, price) {
  var itemp = new Item(name, price);
  item_list.push(new Item(name, price));

  sessionStorage.myObject = JSON.stringify(item_list); //will set object to the stringified myObject

  console.log(itemp);
}

function getList() {
  var ilist = JSON.parse(sessionStorage.myObject); //will parse JSON string back to object
  console.log(ilist);

  for (let i = 0; i < ilist.length; i++) {
    console.log(ilist[i]);
  }
}

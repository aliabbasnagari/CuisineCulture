var ilist = JSON.parse(sessionStorage.myObject); //will parse JSON string back to object
console.log(ilist);

let price = 0;
for (let i = 0; i < ilist.length; i++) {
  document.getElementById("cart_items").innerHTML +=
    "<li>" + ilist[i].name + "   " + ilist[i].quantity + "</li>";
  price += ilist[i].price;
}

document.getElementById("total_pay").innerHTML = "Total: PKR " + price + "/-";

function getList() {
  var ilist = JSON.parse(sessionStorage.myObject); //will parse JSON string back to object
  console.log(ilist);

  for (let i = 0; i < ilist.length; i++) {
    console.log(ilist[i]);
    let price = 0;
    for (let i = 0; i < ilist.length; i++) {
      price += ilist[i].price;
    }
    document.getElementById("total_pay").innerHTML = price;
  }
}

/* # 2. Shopping Cart (Array Methods)

Given:

javascript
const cart = [
  { item: "Laptop", quantity: 1, price: 1200 },
  { item: "Mouse", quantity: 2, price: 25 },
  { item: "Keyboard", quantity: 1, price: 80 }
];


Without using loops (for, while):

* Calculate the total cart value.
* Remove the Mouse.
* Increase every item's price by 10%.
* Return only item names as an array.

--- */

const cart = [
  { item: "Laptop", quantity: 1, price: 1200 },
  { item: "Mouse", quantity: 2, price: 25 },
  { item: "Keyboard", quantity: 1, price: 80 }
];

//Calculate total cart Value

const total = cart.reduce((sum,item)=>{

    return sum + (item.quantity * item.price);

},0);

console.log("Ttoal value of cart is : ", total);

//remove the mouse 

const updatedCart = cart.filter(item => item.item !== "Mouse");

console.log("Updated cart removing mouse : " , updatedCart);

//increase every items price by 10%

const increasedPrice = cart.map(item => {

    return {
        ...item,                         //spread operator used here that copies all existing properties first and then increase price.
        price: item.price * 1.10
    };

});

console.log("Items with 10% increase in prices : " ,increasedPrice);

//Return only item names as an array.

const names = cart.map(item =>item.item)
console.log("Items names are : " ,names)

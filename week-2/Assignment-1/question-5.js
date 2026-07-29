/*
## 5. Inventory Update (Objects)

Given:

javascript
const inventory = {
  apple: 15,
  banana: 8,
  orange: 20
};


Write a function that:

* Adds a new item if it doesn't exist.
* Updates the quantity if it already exists.
* Removes items whose quantity becomes zero.

Example:

javascript
updateInventory("banana", -8);


should remove "banana".

--- */

// const inventory = {
//   apple: 15,
//   banana: 8,
//   orange: 20
// };

//Write a function that Adds a new item if it doesn't exist.

function addNewItem(newItem, quantity){
  console.log("Before : ", {...inventory})

   if (!(newItem in inventory)) {
    inventory[newItem] = quantity;
    console.log(`${newItem} added successfully.`);
  } else {
    console.log(`${newItem} already exists.`);
  }

  console.log("After:", inventory);
}

addNewItem("strawberry", 90);


//Updates the quantity if it already exists.

// const inventory = {
//   apple: 15,
//   banana: 8,
//   orange: 20
// };

function updateInventory(item, quantity) {

  console.log("Before:", { ...inventory });

  if (item in inventory) {
    console.log(`${item} already exists. Quantity updated.`);
  } else {
    console.log(`${item} added successfully.`);
  }

  inventory[item] = quantity;

  console.log("After:", inventory);
}

//Removes items whose quantity becomes zero.

const inventory = {
  apple: 15,
  banana: 8,
  orange: 20
};

function removeItem(item) {

  console.log("Before:", { ...inventory });

  if (item in inventory && inventory[item] === 0) {
    delete inventory[item];
    console.log(`${item} removed successfully.`);
  } else {
    console.log(`${item} cannot be removed because its quantity is not 0.`);
  }

  console.log("After:", inventory);
}



//All at once using if-else

  function updateInventory(item, quantity){

    if(inventory[item]){
        inventory[item] += quantity;
    }
    else{
        inventory[item] = quantity;
    }

    if(inventory[item] <= 0){
        delete inventory[item];
    }

    return inventory;

}

console.log(updateInventory("banana",-8));
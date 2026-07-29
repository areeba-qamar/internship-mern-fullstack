/*
## 3. Destructuring Challenge

Given:

javascript
const user = {
  id: 10,
  name: "Sarah",
  address: {
    city: "Dubai",
    country: "UAE"
  },
  skills: ["JS", "React", "Node"]
};


Using *one destructuring statement*, create variables:

* userName
* city
* primarySkill
* secondarySkill

Also assign a default value "Unknown" if country doesn't exist.

---
 */

const user = {
  id: 10,
  name: "Sarah",
  address: {
    city: "Dubai",
    country:"UAE"
  },
  skills: ["JS", "React", "Node"]
};

// creating variables using destructuring
// if country doesn't exist make default value unknown.

const {name:userName , address:{ city , country="Unknown"}, skills:[primarySkill , secondarySkill]} = user 

console.log(userName);
console.log(city);
console.log(primarySkill);
console.log(secondarySkill);
console.log(country);


//if we mutate username directly , original change or not ?

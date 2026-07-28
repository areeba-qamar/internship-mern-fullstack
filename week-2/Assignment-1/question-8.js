/*
## 8. Object Merge Conflict

Given:

javascript
const defaults = {
  theme: "light",
  language: "en",
  notifications: true
};

const userSettings = {
  language: "ar",
  notifications: false
};


1. Merge both objects so user settings override defaults.
2. Add a new property:

javascript
fontSize: 16


without modifying the original objects.

3. Which object should appear last in the spread operation? Explain why.

--- */

const defaults = {
  theme: "light",
  language: "en",
  notifications: true
};

const userSettings = {
  language: "ar",
  notifications: false
};


//1. Merge both objects so user settings override defaults.

const merged = {

    ...defaults,                 //we will use spread operator here.
    ...userSettings,             // The properties from userSettings overwrite the properties from defaults if they have the same key.

};

console.log(merged);



/*2. Add a new property:

javascript
fontSize: 16


without modifying the original objects.*/


const merged = {
  ...defaults,
  ...userSettings,                 
  fontSize: 16
};

console.log(merged);




//3. Which object should appear last in the spread operation? Explain why.

/*userSettings should appear last because when two objects have the same
property, the value from the object that is spread last overrides the previous
one.Since we want the user's preferences to replace the default settings,
userSettings must come after defaults. */
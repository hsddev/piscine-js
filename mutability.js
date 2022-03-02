var clone1 = Object.freeze(Object.assign({}, person));
var clone2 = Object.freeze({ ...person });

// Increase age property
person.age++;

// samePerson object property values changes with person property values
var samePerson = person;

// Change country property
person.country = "FR";

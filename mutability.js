person.country = "FR";
person.age = 17;

var clone1 = Object.freeze(Object.assign({}, person));
var clone2 = Object.freeze({ ...person });

person.age--;

var samePerson = { ...person };

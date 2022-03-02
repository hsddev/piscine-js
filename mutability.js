var clone1 = Object.freeze(Object.assign({}, person));
var clone2 = Object.freeze({ ...person });
var samePerson = { ...person };

person.age--;

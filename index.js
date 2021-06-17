let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
let java = language.slice(0,1);
let script = language.slice(4,5);
console.log(`${java}${script}`);
//b) Without using .slice(), use method chaining to accomplish the same thing.
language.replace('ava','').replace('cript','');
//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."
let abr = language.replace('ava','').replace('cript','');
console.log(`The abbrevation for '${language}' is '${abr}'.`);
//d) Just for fun, try chaining 3 or more methods together, and then print the result.
//no thanks
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2019&month=january';
var q = url.parse(adr, true);

console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?year=2019&month=january'

var qdata =  q.query; // returns an object: { year: 2019, month: 'january' }
console.log(qdata.month); // returns 'january'

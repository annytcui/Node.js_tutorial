var fs = require('fs');

// fs.appendFile()
fs.appendFile('mynewfile1.txt', 'This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

// fs.writeFile()
fs.writeFile('mynewfile3.txt', 'This is my text.', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

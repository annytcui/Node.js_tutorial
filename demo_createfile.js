var fs = require('fs');
// fs.appendFile()
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// fs.open()
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

// fs.writeFile()
fs.writeFile('mynewfile3.txt', 'Hello Content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

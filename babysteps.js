var result = 0;

var lol = process.argv.length;

for (var i = 2; i < lol; i++) {
  result += Number(process.argv[i]);
}

console.log(result);

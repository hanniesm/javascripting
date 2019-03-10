var receiveArgument = process.argv.slice(2)[0];
var fs = require("fs");
// console.log(receiveArgument);


fs.readFile(receiveArgument, function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log(data.toString());
});
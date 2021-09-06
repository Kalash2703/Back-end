var fs = require('fs');

fs.mkdirSync('day_1');

fs.writeFileSync("day_1/hello.txt","Hello awsome people", (err) => {
     if(err) {
     console.log(err);
     }
     });

     
fs.appendFileSync("day_1/hello.txt","appended");

fs.readFileSync("day_1/hello.txt");

fs.renameSync("day_1/hello.txt","day_1/hello2.txt");
        undefined
fs.unlinkSync("day_1/hello2.txt")
        undefined

fs.rmdirSync("day_1")
        undefined
.exit


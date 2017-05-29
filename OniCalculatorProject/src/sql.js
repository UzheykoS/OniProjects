var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('testdb.db');
var check;
db.serialize(() => {

    db.run("CREATE TABLE if not exists lorem (info TEXT)");
    //   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    //   for (var i = 0; i < 10; i++) {
    //       stmt.run("Ipsum " + i);
    //   }
    //   stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });

    db.all("SELECT * FROM lorem WHERE rowid > 5", (err, rows) => {
        console.log("TEST SELECT OPERATION");
        if (rows.length) {
            rows.forEach((element) => {
                console.log(element.info);
            }, this);
        }
        else {
            console.log(rows[0].info);
        }
    });
});

db.close();
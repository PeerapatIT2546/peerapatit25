const sqlite3 = require('sqlite3').verbose();
let sql;

const db = new sqlite3.Database('input.db',sqlite3.OPEN_READWRITE, (err, data) => {
    if (err) {return console.error(err.message);}
});
//สร้าง
    //      sql = 'CREATE TABLE meow(id INTEGER PRIMARY KEY,name,num,up,down,hit)';        
    //      db.run(sql);
//เลือก Table
// db.run("DROP TABLE meow");
//ใส่ข้อมูล
// sql = 'INSERT INTO meow(name,num,up,down,hit) VALUES (?,?,?,?,?)';
// db.run(sql,
//     ["","","","",""],
//     (err) => {
//         if (err) return console.error(err,message);
//     });

// แสดง
sql = 'SELECT * FROM meow'
db.all(sql, [], (err,rows) => {
    if (err) return console.error(err.message);
    rows.forEach(row=>{
        console.log(row.name,row.num,row.up,row.down,row.hit);
    })
})

// update
// sql = 'UPDATE meow SET name = ? WHERE id = ?';
// db.run(sql,['Max',1], (err) =>{
//     if (err) return console.error(err.message);
// })

// delete
// sql = 'DELETE FROM meow WHERE id = ?';
// db.run(sql,[1], (err) =>{
//     if (err) return console.error(err.message);
// })
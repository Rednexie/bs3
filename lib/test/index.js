let i = 0;



for(let i = 0; i < 1000; i++){
    const db = new require('better-sqlite3')('./data.sqlite')
    db.prepare('INSERT INTO SIGMA (id) VALUES (?)').run(i)
    db.close()
    console.log(i)
    i++
}
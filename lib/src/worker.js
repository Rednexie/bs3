const { parentPort } = require('worker_threads');
const Database = require('better-sqlite3')

parentPort.on('message', message => {
    const {
        stmt,
        method,
        params,
        options,

    } = message

    const db = new Database(options.database, options.options);


    const result = db.prepare(stmt)[method](...params)
    
    parentPort.postMessage(result)

    db.close();

    
})
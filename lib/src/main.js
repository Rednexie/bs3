const Database = require('better-sqlite3')
const db = new Database('./data.sqlite', { timeout: 10000, verbose: op => {}, });

const bs3 = require('.')

async function main(){
    
    await bs3("get", 'SELECT * FROM SIGMA31 WHERE id = ?', [1], {
        database: 'data.sqlite',
        max: 5,
        forceConfig: false, // force user to set a config
        options: {}
    })

}   main()
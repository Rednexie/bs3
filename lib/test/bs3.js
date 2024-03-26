const config = {
    database: 'data.sqlite',
    max: 5,
    forceConfig: false, // force user to set a config, default false
    overrideConfig: true, // override the config set vefore if new provided, default true
    options: {}
}

const bs3 = require('../src/index')

for(let i = 0; i < 1000; i++){
    bs3("run", 'INSERT INTO bs3 (id) VALUES (?)', [i], config)
    console.log(i)
    i++
}
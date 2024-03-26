// const { randomUUID } = require('crypto');
const { Worker, isMainThread, parentPort, workerData, resourceLimits } = require('worker_threads');
const path = require('path')


let poll = 0;
let errors = 0;
let successes = 0;


var bs3config;


module.exports = async (method, stmt, params, config) => {

    const options = bs3config || config;

    return new Promise((resolve, reject) => {
        const worker = new Worker(path.join(__dirname, './worker.js'));
        worker.postMessage({ method, stmt, params, options });


        worker.on('error', err => { 
            poll = poll - 1
            errors = errors + 1
            return reject( err ) 
        });
        worker.on('message', msg => { 
            poll = poll - 1;
            successes = successes + 1;
            return resolve(msg)
        })
        worker.on('exit', () => {})

    }) 
    
}

module.exports.config = async (object) => {
    bs3config = object
}

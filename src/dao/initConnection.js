const promiseRetry = require('promise-retry')
const MongoClient = require('mongodb').MongoClient

const options = {
    useNewUrlParser: true,
    reconnectTries: 60,
    reconnectInterval: 1000,
    poolSize: 10,
    bufferMaxEntries: 0
}

const promiseRetryOptions = {
    retries: options.reconnectTries,
    factor: 1.5,
    minTimeout: options.reconnectInterval,
    maxTimeout: 5000
}

const connect = (url) => {
    return promiseRetry((retry, number) => {
        console.log(`MongoClient connecting to ${url} - retry number: ${number}`)
        return MongoClient.connect(url, options).catch(retry)
    }, promiseRetryOptions)
}

module.exports = { connect }
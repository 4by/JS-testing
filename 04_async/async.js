const axios = require('axios')

class Ajax {
    static echo = data =>
        new Promise(((resolve, reject) =>
            setTimeout(() => data
                ? resolve(data)
                : reject(new Error('error')), 150)
        ))


    static async get() {
        try { return axios.get('https://jsonplaceholder.typicode.com/todos/1').data }
        catch (e) { console.log(e) }
    }
}

module.exports = Ajax
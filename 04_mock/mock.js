const axios = require('axios')


function map(array, callback) {
    const result = []
    for (let i = 0; i < array.length; i++) result.push(callback(array[i]))
    return result
}

class async {
    static async gets() {
        try { return axios.get('https://jsonplaceholder.typicode.com/todos/1').data }
        catch (e) { console.log(e) }
    }
}
module.exports = { map, async }
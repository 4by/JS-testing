const axios = require('axios')

class Ajax {
    static echo = data =>
        new Promise(((resolve, reject) =>
            setTimeout(() => data
                ? resolve(data)
                : reject(new Error('error')), 150)
        ))

}

module.exports = Ajax
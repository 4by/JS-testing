
const async = data =>
    new Promise(((res, rej) =>
        setTimeout(() => data
            ? res(data)
            : rej(new Error('error')), 150)
    ))


module.exports = async
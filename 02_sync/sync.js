class Lodash {

    compact = (array) => array.filter(val => !!val)

    groupBy = (array, prop) => array.reduce((acc, i) => {
        // определяем индекс key каждого элемента i в отсортированном массиве acc  
        const key = typeof prop === 'function' ? prop(i) : i[prop]
        if (!acc[key]) acc[key] = []
        acc[key].push(i)
        return acc
    }, {})

}

module.exports = Lodash
const sorterPromise = (array) => {
    return new Promise((resolve, reject) => {
        const typeofArray = array
            .map(item => typeof item)
            .filter(item => item !== 'string')
        if (typeofArray.length === 0) {
            const newArray = array.sort();
            return resolve(newArray)
        }
        else {
            reject('Error: Not all elements are string type!')
        }
    })
};




export default sorterPromise;

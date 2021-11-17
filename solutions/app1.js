const converterPromise = (array) => {
    return new Promise((resolve, reject) => {
        try {
        const newArray = array.map(item => item.toUpperCase())
            resolve (newArray)
        }
        catch {
            reject ('Error: Not all elements are string type!')
        }
    }
    )
};


export default converterPromise;

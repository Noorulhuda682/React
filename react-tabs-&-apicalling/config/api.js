function searchData(text) {
    return new Promise((resolve, reject) => {
        fetch('https://hn.algolia.com/api/v1/search?query=' + text)
        .then(res => res.json())
        .then(res => {
            resolve(res.hits);
            console.log('my res',res);
            
        }).catch(e => {
            reject({message: "Something Went Wrong..."})
        }) 
    })
}

//for returning asynchronous(request/response) 
//response from a function

export {
    searchData
}
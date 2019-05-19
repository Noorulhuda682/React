// function searchData(text) {
//     return new Promise((resolve, reject) => {
//         fetch('https://hn.algolia.com/api/v1/search?query=' + text)
//         .then(res => res.json())
//         .then(res => {
//             resolve(res.hits);
//             console.log('my res',res);
            
//         }).catch(e => {
//             reject({message: "Something Went Wrong..."})
//         }) 
//     })
// }

// //for returning asynchronous(request/response) 
// //response from a function

// export {
//     searchData
// }

function searchData() {
    return new Promise((resolve, reject) => {
        fetch('https://data.police.uk/api/crimes-no-location?category=all-crime&force=leicestershire')
        // fetch('https://hn.algolia.com/api/v1/search?query=' )
        .then(res => res.json())
        .then(res => {
            resolve(res);
            // console.log('my res',res);
            
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
























 const crime = [{"url":"all-crime","name":"All crime"},
{"url":"anti-social-behaviour","name":"Anti-social behaviour"},{"url":"bicycle-theft","name":"Bicycle theft"},
{"url":"burglary","name":"Burglary"},{"url":"criminal-damage-arson","name":"Criminal damage and arson"},
{"url":"drugs","name":"Drugs"},{"url":"other-theft","name":"Other theft"},{"url":"possession-of-weapons","name":"Possession of weapons"},
{"url":"public-order","name":"Public order"},{"url":"robbery","name":"Robbery"},
{"url":"shoplifting","name":"Shoplifting"},{"url":"theft-from-the-person","name":"Theft from the person"},
{"url":"vehicle-crime","name":"Vehicle crime"},{"url":"violent-crime","name":"Violence and sexual offences"},
{"url":"other-crime","name":"Other crime"}]

const Forces = [{"id":"avon-and-somerset","name":"Avon and Somerset Constabulary"},
{"id":"bedfordshire","name":"Bedfordshire Police"},{"id":"cambridgeshire","name":"Cambridgeshire Constabulary"},
{"id":"cheshire","name":"Cheshire Constabulary"},{"id":"city-of-london","name":"City of London Police"},
{"id":"cleveland","name":"Cleveland Police"},{"id":"cumbria","name":"Cumbria Constabulary"},
{"id":"derbyshire","name":"Derbyshire Constabulary"},{"id":"devon-and-cornwall","name":"Devon & Cornwall Police"},
{"id":"dorset","name":"Dorset Police"},{"id":"durham","name":"Durham Constabulary"},
{"id":"dyfed-powys","name":"Dyfed-Powys Police"},{"id":"essex","name":"Essex Police"},
{"id":"gloucestershire","name":"Gloucestershire Constabulary"},{"id":"greater-manchester","name":"Greater Manchester Police"},
{"id":"gwent","name":"Gwent Police"},{"id":"hampshire","name":"Hampshire Constabulary"},
{"id":"hertfordshire","name":"Hertfordshire Constabulary"},{"id":"humberside","name":"Humberside Police"},
{"id":"kent","name":"Kent Police"},{"id":"lancashire","name":"Lancashire Constabulary"},
{"id":"leicestershire","name":"Leicestershire Police"},{"id":"lincolnshire","name":"Lincolnshire Police"},
{"id":"merseyside","name":"Merseyside Police"},{"id":"metropolitan","name":"Metropolitan Police Service"},
{"id":"norfolk","name":"Norfolk Constabulary"},{"id":"north-wales","name":"North Wales Police"},
{"id":"north-yorkshire","name":"North Yorkshire Police"},{"id":"northamptonshire","name":"Northamptonshire Police"},
{"id":"northumbria","name":"Northumbria Police"},{"id":"nottinghamshire","name":"Nottinghamshire Police"},
{"id":"northern-ireland","name":"Police Service of Northern Ireland"},{"id":"south-wales","name":"South Wales Police"},
{"id":"south-yorkshire","name":"South Yorkshire Police"},{"id":"staffordshire","name":"Staffordshire Police"},
{"id":"suffolk","name":"Suffolk Constabulary"},{"id":"surrey","name":"Surrey Police"},{"id":"sussex","name":"Sussex Police"},
{"id":"thames-valley","name":"Thames Valley Police"},{"id":"warwickshire","name":"Warwickshire Police"},{"id":"west-mercia","name":"West Mercia Police"},
{"id":"west-midlands","name":"West Midlands Police"},{"id":"west-yorkshire","name":"West Yorkshire Police"},{"id":"wiltshire","name":"Wiltshire Police"}]



export default{
    crime , Forces
}

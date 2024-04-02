const movie={
    name : 'a',
    releseDate: 2023,
    rating : 5.5,
    director:'ram'
}
showProperties(movie)

function showProperties(movie){
    for (let property in movie){
        if (typeof movie[property]!== 'number'){
            console.log(property,movie[property])
        }
    }
}
function fetchApiPicture(query, page) {
    return fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=37294582-8910eff478423fe25551a6b37&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => { if(res.ok) {return res.json()}})
}
const api = {
    fetchApiPicture
}

export default  api 
class MoviesApi {
    constructor(options) {
        this._url = options.baseUrl;
    }

    _getResponse(res) {
        return res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusCode}`)
    }

    _request(url, options) {
        return fetch(`${this._url}${url}`, options)
          .then(this._getResponse)
    }

    getMovie() {
        return this._request('/')
    }
}


const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies'
})

export default moviesApi
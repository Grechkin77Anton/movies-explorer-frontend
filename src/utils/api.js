class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
        this._authorization = options.headers.authorization;
    }

    _checkResponse(res) {return res.ok ? res.json() : Promise.reject}

    getInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkResponse)
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkResponse)
    }

    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH', 
            headers: this._headers,
            body: JSON.stringify({
                name:data.username,
                about:data.description,
            })
        })
        .then(this._checkResponse)
    }

    setNewAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH', 
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
        .then(this._checkResponse)
    }

    addNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST', 
            headers: this._headers,
            body: JSON.stringify({
                name:data.name,
                link:data.link,
            })
        })
        .then(this._checkResponse)
    }

    addCardLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT', 
            headers: {
                authorization: this._authorization
            },
        })
        .then(this._checkResponse)
    }

    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE', 
            headers: {
                authorization: this._authorization
            },
        })
        .then(this._checkResponse)
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE', 
            headers: {
                authorization: this._authorization
            },
        })
        .then(this._checkResponse)
    }
};

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
      authorization: 'd71baa1f-8151-4635-9148-fe0661728bd9',
      'Content-Type': 'application/json'
    }
  });

  export default api; 
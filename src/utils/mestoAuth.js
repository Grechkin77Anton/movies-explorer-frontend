const baseUrl = 'https://auth.nomoreparties.co'

function getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusCode}`)
}

export function registration(password, email) {
    return fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: password,
        email: email,
      })
    })
    .then(res => getResponse(res))
  }

export function autorization( password , email) {
    return fetch(`${baseUrl}/signin` , {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password: password,
            email: email,
        })
    })
    .then(res => getResponse(res))
}

export function getContent(token) {
    return fetch(`${baseUrl}/users/me` , {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
    .then(res => getResponse(res))
}

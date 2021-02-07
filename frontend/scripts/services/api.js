class API {

  constructor(port = 3000) {
    this.port = port
    this.url = URL + port
  }

  // HELPERS //

  parseJSON = res => res.json()

  headers = {'Accepts':'application/json', 'Content-Type':'application/json'}

  // URL GETTERS //

  get usersURL() {
    return this.url + '/users'
  }

  get scoresURL() {
    return this.url + '/scores'
  }

  // GET //

  // fetch get all users
  // chain on .then to return value
  getUsers = () => {
    return fetch(this.usersURL).then(this.parseJSON)
  }

  getUser = (userId) => {
    return fetch(this.usersURL + `/${userId}`).then(this.parseJSON)
  }

  // fetch all scores
  getScores = () => {
    return fetch(this.scoresURL).then(this.parseJSON)
  }

  getScore = () => {
    fetch(this.scoresURL + `/${scoreId}`).then(this.parseJSON)
  }

  getHighScores = () => {
    return fetch(this.scoresURL + '/highscores')
  }

  // POST

  postUser = body => fetch(this.usersURL, {
    method: 'POST',
    headers: this.headers,
    body: JSON.stringify(body)
  }).then(this.parseJSON)










  // fetch post new user

  // fetch post new score + user

}

// fetch('http://localhost:3000/users', {
//     method: 'POST',
//         headers: {'Accepts': 'application/json', 'Content-Type': 'application/json'},
//         body: JSON.stringify({name: "Chris", initials: "cjs"})
// })
// Promise {<pending>}__proto__: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Response
// .then(res => res.json())

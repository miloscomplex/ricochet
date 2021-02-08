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
    return fetch(this.scoresURL + '/highscores').then(this.parseJSON)
  }

  // POST

  postUser = body => fetch(this.usersURL, {
    method: 'POST',
    headers: this.headers,
    body: JSON.stringify(body)
  }).then(this.parseJSON)

  postUserScore = body => fetch(this.scoresURL, {
    method: 'POST',
    headers: this.headers,
    body: JSON.stringify(body)
  })

}

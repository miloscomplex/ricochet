class ShowScores {
  constructor() {
    // need a clearing method
    canvasWrapper.innerHTML = '' //may be overkill

    this.showScoresContainer = document.createElement('div')
    this.showScoresContainer.id = 'infoBoxContainer'
    canvasWrapper.append(this.showScoresContainer)
    api.getHighScores().then(this.renderHighScores)

  }

  renderHighScores = highScoresObj => {
    const highScoreText = document.createElement('p')
    highScoreText.innerText = 'Here are the top 10 scores'

    let highScoreList = document.createElement('ul')
    this.showScoresContainer.append(highScoreText)

    highScoresObj.forEach( highScore => {
      let score = document.createElement('li') score.innerText = `${highScore.user.initials} - Seconds: ${highScore.time_in_seconds} and used ${highScore.platforms_used} platforms`
      this.showScoresContainer.append(score)
    })

  }

}

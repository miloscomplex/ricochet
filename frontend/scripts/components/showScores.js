class ShowScores {
  constructor() {
    // need a clearing method?
    canvasWrapper.innerHTML = '' //may be overkill

    this.showScoresContainer = document.createElement('div')
    this.showScoresContainer.id = 'infoBoxContainer'
    canvasWrapper.append(this.showScoresContainer)
    api.getHighScores().then(this.renderHighScores)
    this.newGameBtn = document.createElement('a')
  }

  renderHighScores = highScoresObj => {
    const highScoreText = document.createElement('h3')
    highScoreText.innerText = 'Here are the top 10 scores'
    this.showScoresContainer.append(highScoreText)
    const highScoreList = document.createElement('ul')
    highScoreList.className = 'highScoreList'
    this.showScoresContainer.append(highScoreList)
    highScoresObj.forEach( (score, i) => {
      let scoreLi = document.createElement('li')
      scoreLi.innerText = `${i + 1 }. ${score.user.initials.toUpperCase()} -- Seconds: ${score.time_in_seconds} -  ${score.platforms_used} platforms used`
      highScoreList.append(scoreLi)
    })
    this.attachNewGameBtn()
  }

  attachNewGameBtn = () => {
    this.newGameBtn.className = 'button'
    this.newGameBtn.innerText = 'Play Again?'
    this.newGameBtn.addEventListener('click', this.startNewGameBtn )
    this.showScoresContainer.append(this.newGameBtn)
  }

  startNewGameBtn = event => {
    event.preventDefault()
    startGame()
  }

}

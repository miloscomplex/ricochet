class ShowScores {
  constructor(scoreInfo = {}) {
    // need a clearing method
    canvasWrapper.innerHTML = '' //may be overkill
    this.score = scoreInfo
    this.showScoresContainer = document.createElement('div')
    this.showScoresContainer.id = 'infoBoxContainer'
    canvasWrapper.append(this.levelCompletedContainer)

    this.successMessage()
    this.makeForm()
  }

  HighScore = function() {
    const highScoreText = document.createElement('p')
    highScoreText.innerText = `Here are the top 10 scores`
    this.levelCompletedContainer.append(highScoreText)
  }

}

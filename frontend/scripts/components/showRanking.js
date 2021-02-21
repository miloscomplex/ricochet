class ShowRanking {
  constructor() {
    // need a clearing method?
    canvasWrapper.innerHTML = ''

    this.showRankContainer = document.createElement('div')
    this.showRankContainer.id = 'infoBoxContainer'
    canvasWrapper.append(this.showRankContainer)
    api.getScores.then(this.renderScores)
    this.newGameBtn = document.createElement('a')
  }

  renderScores = scoresObj => {
    const rankText = document.createElement('h3')
    rankText.innerText = 'Here is your ranking'
    this.showRankContainer.append(rankText)
    const rankList = document.createElement('ul')
    rankList.className = 'rankList'
    this.showRankContainer.append(rankList)
    scoresObj.forEach( (score, i) => {
      let scoreLi = document.createElement('li')
      scoreLi.innerText = `${i + 1 }. ${score.user.initials.toUpperCase()} -- Seconds: ${score.time_in_seconds} -  ${score.platforms_used} platforms used`
      rankList.append(scoreLi)
    })
    this.attachNewGameBtn()
  }

  attachNewGameBtn = () => {
    this.newGameBtn.className = 'button'
    this.newGameBtn.innerText = 'Play Again?'
    this.newGameBtn.addEventListener('click', this.startNewGameBtn )
    this.showRankContainer.append(this.newGameBtn)
  }

  startNewGameBtn = event => {
    event.preventDefault()
    startGame()
  }

}

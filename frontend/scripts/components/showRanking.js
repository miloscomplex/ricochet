class ShowRanking {
  constructor(scoreEntryObj={
    level: 1,
    platforms_used: 6,
    time_in_seconds: 23,
    user: { name: "Ruth", initials: "rjr"}
  }) {
    // need a clearing method?
    canvasWrapper.innerHTML = ''
    this.scoreEntryObj = scoreEntryObj
    this.showRankContainer = document.createElement('div')
    this.showRankContainer.id = 'infoBoxContainer'
    canvasWrapper.append(this.showRankContainer)
    api.getScores().then(this.renderScores)
    this.newGameBtn = document.createElement('a')
  }

  renderScores = scoresObj => {
    //console.log(this.scoreEntryObj)
    //console.log(scoresObj)
    const results = scoresObj.filter((score, i) => {
      return (score.level == this.scoreEntryObj.level && score.platforms_used == this.scoreEntryObj.platforms_used && score.time_in_seconds == this.scoreEntryObj.time_in_seconds && score.user.initials == this.scoreEntryObj.user.initials && score.user.name == this.scoreEntryObj.user.name)
    })

    console.log(results)
    const rankText = document.createElement('h3')
    rankText.innerText = 'Here is your ranking'
    this.showRankContainer.append(rankText)
    const rankList = document.createElement('ul')
    rankList.className = 'rankList'
    this.showRankContainer.append(rankList)
    // const sortedScores = scoresObj.sort(function(a,b) {
    //   return a.time_in_seconds - b.time_in_seconds || a.platformsUsed - b.platformsUsed
    // })
    //console.log('sortedScores= ' + sortedScores)
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

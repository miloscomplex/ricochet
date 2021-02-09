class Instructions {

  constructor() {
    // need a clearing method?
    canvasWrapper.innerHTML = '' //may be overkill

    this.instructionsContainer = document.createElement('div')
    this.instructionsContainer.id = 'infoBoxContainer'
    canvasWrapper.append(this.instructionsContainer)
    //api.getHighScores().then(this.renderHighScores)
    this.newGameBtn = document.createElement('a')
    this.renderInstructions()
  }

  renderInstructions = () => {
    const instructionsHeader = document.createElement('h2')
    instructionsHeader.innerText = 'How to Play Ricochet'
    this.instructionsContainer.append(instructionsHeader)
    const p = document.createElement('p')
    p.className = 'highScoreList'
    p.innerText = `The game's object is to get the ball to cross through the goal post on the right side of the screen (colored cyan) before leaving the container on the bottom from gravitational forces. You accomplish this task by placing platforms, via mouse clicks, at the correct interval to bounce the ball across the screen and through the goal post. The amount of platforms have a limit, but you can redo your placement by removing them at any time by clicking the button below the container`
    this.instructionsContainer.append(p)
    this.attachNewGameBtn()
  }

  attachNewGameBtn = () => {
    this.newGameBtn.className = 'button'
    this.newGameBtn.innerText = 'Play'
    this.newGameBtn.addEventListener('click', this.startNewGameBtn )
    this.instructionsContainer.append(this.newGameBtn)
  }

  startNewGameBtn = event => {
    event.preventDefault()
    startGame()
  }

}

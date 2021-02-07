class LevelCompleted {
  constructor(scoreInfo) {
    // need a clearing method
    canvasWrapper.innerHTML = '' //may be overkill
    this.scoreInfo = scoreInfo
    this.levelCompletedContainer = document.createElement('div')
    this.levelCompletedContainer.id = 'infoBoxContainer'
    canvasWrapper.append(this.levelCompletedContainer)

    this.successMessage()
    this.makeForm()
  }

  successMessage = function() {
    const successMessage = document.createElement('p')
    successMessage.innerText = `Excellent Job! You won in ${this.scoreInfo.time} seconds and while using ${this.scoreInfo.platformsUsed} platforms. Submit your score to see how you rank.`
    this.levelCompletedContainer.append(successMessage)
  }

  makeForm = function() {
    const nameForm = document.createElement('form')
    this.levelCompletedContainer.append(nameForm)

    const nameLabel = document.createElement('label')
    nameLabel.innerText = 'Name: '
    this.nameInput = document.createElement('input')
    this.nameInput.type = 'text'
    const initialsLabel = document.createElement('label')
    initialsLabel.innerText = 'Initials: '
    this.initialsInput = document.createElement('input')
    this.initialsInput.type = 'text'

    const submitButton = document.createElement('input')
    submitButton.type = 'submit'
    submitButton.className = 'button'
    submitButton.value = 'Submit Your Score'

    nameForm.addEventListener('submit', this.scoreSubmitted )
    // {
    //   e.preventDefault()
    //   console.log(event);
    // })
    nameForm.append(nameLabel, this.nameInput, initialsLabel, this.initialsInput, submitButton)
  }

  scoreSubmitted = event => {
    event.preventDefault()
    console.log(event)
    console.log("nameINput= " + this.nameInput.value)
    api.postUserScore({
      user: {
        name: this.nameInput.value,
        initials: this.initialsInput.value.trim().toLowerCase()
      },
      score: {
        time_in_seconds: this.scoreInfo.time,
        platforms_used: this.scoreInfo.platformsUsed,
        level: this.scoreInfo.level
      }
    })
    event.target.remove()

  }
}

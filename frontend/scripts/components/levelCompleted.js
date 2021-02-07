class LevelCompleted {
  constructor(scoreInfo) {
    // need a clearing method
    canvasWrapper.innerHTML = '' //may be overkill
    this.scoreInfo = scoreInfo
    this.levelCompletedContainer = document.createElement('div')
    this.levelCompletedContainer.id = 'infoBoxContainer'
    canvasWrapper.append(this.levelCompletedContainer)

    this.successMessage()
    this.nameForm()
  }

  successMessage = function() {
    const successMessage = document.createElement('p')
    successMessage.innerText = `Excellent Job! You won in ${this.scoreInfo.time} seconds and while using ${this.scoreInfo.platformsUsed} platforms. Submit your score to see how you rank.`
    this.levelCompletedContainer.append(successMessage)
  }

  nameForm = function() {
    const nameForm = document.createElement('form')
    this.levelCompletedContainer.append(nameForm)

    const nameLabel = document.createElement('label')
    nameLabel.innerText = 'Name: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    const initialsLabel = document.createElement('label')
    initialsLabel.innerText = 'Initials: '
    const initialsForm = document.createElement('input')
    const submitButton = document.createElement('submit')
    submitButton.type = 'submit'
    submitButton.className = 'button'
    submitButton.innerText = 'Submit Your Score'
    submitButton.addEventListener('click', function(e) {
      e.preventDefault()
      console.log(event);
    })
    nameForm.append(nameLabel, nameInput, initialsLabel, initialsForm, submitButton)
  }

  scoreSubmitted = function(event) {

  }
}

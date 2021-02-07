class LevelCompleted {
  constructor(scoreInfo) {
    // need a clearing method
    canvasWrapper.innerHTML = '' //may be overkill


    const levelCompletedContainer = document.createElement('div')
    levelCompletedContainer.id = 'levelCompletedContianer'
    canvasWrapper.append(levelCompletedContainer)

    const successMessage = document.createElement('p')
    successMessage.innerText = `Excellent Job! You won in {scoreInfo.time} seconds and while using {scoreInfo.platforms_used} platforms. Submit your score to see how you rank.`
    levelCompletedContainer.append(successMessage)

    const nameForm = document.createElement('form')
    levelCompletedContainer.append(nameForm)
    const nameLabel = document.createElement('label')
    nameLabel.innerText = 'Name: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    const initialsLabel = document.createElement('label')
    initialsLabel.innerText = 'Initials: '
    const initialsForm = document.createElement('input')
    const submitButton = document.createElement('input')
    submitButton.type = 'submit'
    submitButton.value = 'Submit Your Score'

    nameForm.append(nameLabel, nameInput, initialsLabel, initialsForm, submitButton)

  }
}

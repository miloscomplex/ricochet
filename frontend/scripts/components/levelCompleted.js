class LevelCompleted {
  constructor(scoreInfo) {
    // need a clearing method
    // innerHTML = '' may be overkill
    const levelCompletedContianer = document.createElement('div')
    levelCompletedContianer.id = 'levelCompletedContianer'

    const successMessage = document.createElement('p')
    successMessage.innerText = `Excellent Job! You won in ${scoreInfo.time} seconds and while using ${scoreInfo.platforms_used} platforms. Submit your score to see how you rank.`

    const nameForm = document.createElement('form')
    const nameLabel = document.createElement('label')
    nameLabel.innerText = 'Name: '
    const initialsForm = document.createElement('form')
    const initialsLabel = document.createElement('label')
    initialsLabel = 'Initials: '
  }
}

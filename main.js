const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''

function updateTitle() {
  const playerInput = document.getElementById(turnPlayer)
  document.getElementById('turnPlayer').innerText = playerInput.value
}

function initGame() {
  vBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  turnPlayer = 'player1'
  document.querySelector('h2').innerHTML =
    'Vez de: <span id="turnPlayer"></span>'
  updateTitle()
  boardRegions.forEach(function (element) {
    element.classList.remove('win')
    element.innerText = ''
    element.addEventListener('click', handleBoardClick())
  })
}

function handleBoardClick() {}

document.getElementById('start').addEventListener('click', initGame)

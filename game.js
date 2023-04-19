document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    var squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('#score')
    const startButton = document.querySelector('#start-button')
    const width = 10
    var nextRandom = 0
    var timerId 
    var score = 0
    console.log(squares)
    
    const lTetro = [
        [1,width+1,width*2+1,2], 
        [width,width+1,width+2,width*2+2], 
        [1,width+1,width*2+1,width*2],
        [width,width*2,width*2+1,width*2+2],
    ]
    const zTetro = [
        [0,width,width+1,width*2+1],
        [width+1,width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1,width+2,width*2,width*2+1]
    ]
    const tTetro = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1] 
    ]
    const oTetro = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]
    const iTetro = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
    ]
    
    let Tetros = [lTetro, zTetro, tTetro, oTetro, iTetro]

    let presentPostiion = 4
    let presentRotator = 0
    //set random selection for the Tetros 
    let random = Math.floor(Math.random()*Tetros.length)
    let present = Tetros[random][0]
    function draw () {
        present.forEach(index => {
            squares[presentPostiion + index].classList.add('tetro')
        })
    }
    draw()
    function undraw() {
        present.forEach(index => {
            squares[presentPostiion +index].classList.remove('tetro')
        })
    }
    undraw()

    //assignint key buttons
    function controller(e) {
        if(e.keyCode === 37) {
            leftMove()
        } else if (e.keyCode === 38) {
            rotation()
        }else if (e.keyCode === 39) { 
            rightMove()
        }else if (e.keyCode === 40) {
            downMover()
        }
    }
    document.addEventListener('keyup', controller)
    console.log()

    function downMover() {
        undraw()
        presentPostiion += width
        draw()
        Froze()
    } 
    function Froze() {
        if(present.some(index => squares[presentPostiion + index + width].classList.contains('taker'))) {
            present.forEach(index => squares[presentPostiion + index].classList.add('taker'))
            random = nextRandom
            nextRandom = Math.floor(Math.random() * Tetros.length)
            present = Tetros[random][presentRotator]
            presentPostiion = 4
            draw()
            shapeDisplay()
            scroreBoard()
        }
    }
    // How to move the Tetros left or right on the grid
    function leftMove() {
        undraw()
        const leftEdge = present.some(index => (presentPostiion + index) % width === 0)
        if (!leftEdge) presentPostiion -=1

        if (present.some(index => squares[presentPostiion + index].classList.contains('taker'))) {
            presentPostiion +=1
        }
        draw()
    }
    function rightMove() {
        undraw()
        const rightEdge = present.some(index => (presentPostiion + index) % width === width -1)
        if (!rightEdge) presentPostiion +=1

        if (present.some(index => squares[presentPostiion + index].classList.contains('taker'))) {
            presentPostiion -=1
        }
        draw()
    }
    //how to rotate Tetro
    function rotation() {
        undraw()
        presentRotator ++
        if(presentRotator === present.length) {
            presentRotator = 0
        }
        present = Tetros[random][presentRotator]
        draw()
    }

    const squareDisplay = document.querySelectorAll('.grid-grid div')
    const widthDisplay = 4
    let indexDisplay = 0

    const nextTetro = [
        [1, widthDisplay+1, widthDisplay*2+1, 2],
        [0, widthDisplay, widthDisplay+1, widthDisplay*2+1],
        [1, widthDisplay, widthDisplay+1, widthDisplay+2],
        [0, 1, widthDisplay, widthDisplay+1],
        [1, widthDisplay+1, widthDisplay*2+1, widthDisplay*3+1]
    ]

    function shapeDisplay() {
        squareDisplay.forEach(squares => {
            squares.classList.remove('tetro')
        })
        nextTetro[nextRandom].forEach( index => {
            squareDisplay[indexDisplay + index].classList.add('tetro')
        }) 
    }
    startButton.addEventListener('click', () => {
        if (timerId) {
            clearInterval(timerId)
            timerId = null
        }   else {
            draw()
            timerId = setInterval(downMover, 500)
            nextRandom = Math.floor(Math.random()*Tetros.length)
            shapeDisplay()
        }
    })
//Creating the scoreboard
    function scroreBoard () {
        for (let i = 0; i < 199; i +=width) {
            const rows = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]

            if(rows.every(index => squares[index].classList.contains('taker'))) {
                score +=10
                scoreDisplay.innerHTML = score
                rows.forEach(index => {
                    squares[index].classList.remove('taker')
                })
                const removeSquares = squares.splice(i, width)
                console.log(removeSquares)
            }

        }
    }


})
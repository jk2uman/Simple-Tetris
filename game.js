document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('grid')
    var squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('score')
    const startButton = document.querySelector('#start-button')
    const width = 10
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
    
    const Tetros = [lTetro, zTetro, tTetro, oTetro, iTetro]
    
    
})
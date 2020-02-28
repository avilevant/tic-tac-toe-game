let player1Arr, player2Arr, mark;

const winArr = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9]
];

const idArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]


const clearGame = () => {

    for (let index = 1; index < 10; index++) {
        document.getElementById(`${index}`).textContent = ''
    }
    document.querySelector('.winner').textContent = ''

    player1Arr = []
    player2Arr = []
    mark = 'x';

}

clearGame()



const findPosition = () => {

    idArray.forEach(element => {
        document.getElementById(`${element}`).addEventListener('click', function() {
            const marker = document.getElementById(`${element}`)
            applyMarker(marker)
        })
    })
}



const applyMarker = (marker) => {
    marker.textContent = mark
    if (mark === 'x') {
        mark = 'o'
        player1Arr.push(parseInt(marker.id))
        checkWinner1()
    } else {
        mark = 'x';
        player2Arr.push(parseInt(marker.id));
        checkWinner2()
    }
}



findPosition();

const checkWinner1 = () => {
    winArr.forEach(el => {
        let test = el.every(element => player1Arr.indexOf(element) > -1)
        if (test === true) {
            document.querySelector('.winner').textContent = 'player 1 is the winner'
        }
    })
}

const checkWinner2 = () => {
    winArr.forEach(el => {
        let test = el.every(element => player2Arr.indexOf(element) > -1)
        if (test === true) {
            document.querySelector('.winner').textContent = 'player 2 is the winner'
        }
    })
}



document.querySelector('.button').addEventListener('click', clearGame)
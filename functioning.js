document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    // const playerDisplay = document.querySelector('#player');
    const playerX = 'PlayerX'
    const playerO = 'PlayerO'
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    let playero = false;

    squares.forEach(square => {
        square.addEventListener('click', clickOutcome, { once: true });
    });

    function clickOutcome(e) {
        const squareArray = Array.from(squares); //Turn all collected squares into an array
        console.log(squareArray)
        const index = squareArray.indexOf(e.target); //Which one is clicked followed by assigning to indexof

        const currentClass = playero ? playerO : playerX;

        place();
        function place() {
            squares[index].classList.add(currentClass);
            swap();
        };

        function swap() {
            playero = !playero;
        };

        function checkWin(currentClass) {
            return winningCombinations.some(combination => {
                return combination.every(index => {
                    return squares[index].classList.contains(currentClass)
                })
            })
        }

        function endGame() {
            alert(currentClass + ' wins. Reloading in 5 seconds')
            setTimeout(() => {
                window.location.reload(false)
            }, 5000)
        }

        if (checkWin(currentClass)) {
            endGame(false);
        }
    };
})

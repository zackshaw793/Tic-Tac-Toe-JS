//created variables

const boxes = Array.from(document.getElementsByClassName('box'));
const resetBtn = document.getElementById('reset');
const spaces = [];
const oText = 'O';
const xText = 'X';
let currentPlayer = oText;

//drawing the gameboard border to appear within the squares. 

const drawBoard = () => { 
    boxes.forEach((box, index) => { 
        let styleString = '';
        if (index < 3) { 
            styleString += 'border-bottom: 3px solid black;';
        }
        if (index % 3 === 0) { 
            styleString += 'border-right: 3px solid black;';
        }
        if (index % 3 === 2) { 
            styleString += 'border-left: 3px solid black;';
        }
        if (index > 5) { 
            styleString += 'border-top: 3px solid black;';
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked);
    });
} 

// The boxClicked function handles the logic when a box is clicked. 

const boxClicked = (e) => { 
   const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if(playerHasWon()) { 
            playText.innerText = `${currentPlayer} has won!`
            return;
        }
        currentPlayer = currentPlayer === oText ? xText : oText;
    }
}

// playerHasWon is the actual game logic that takes all of the potential winning 
//moves into account and sends an alert when a condition is met. 

const playerHasWon = () => { 
    if (spaces[0] === currentPlayer) { 
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) { 
            alert(`${currentPlayer} wins up top!`);
            return true;
           
        }
        if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) { 
            alert(`${currentPlayer} wins on the left!`);
            return true;
        }
        if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) { 
            alert(`${currentPlayer} wins diagonally!`);
            return true;
        }
    } else if (spaces[8] === currentPlayer) { 
        if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) { 
            alert(`${currentPlayer} wins on the right!`);
            return true;
        }
        if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) { 
            alert(`${currentPlayer} wins on the bottom!`);
            return true;
        }
    } else if (spaces[4] === currentPlayer) { 
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) { 
            alert(`${currentPlayer} wins vertically in the center!`);
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) { 
            alert(`${currentPlayer} wins horizontally in the center!`);
            return true;
        }
        if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) { 
            alert(`${currentPlayer} wins horizontally in the center!`);
            return true;
        }
        if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) { 
            alert(`${currentPlayer} wins diaganolly in the center!`);
            return true;
        } 
}
}

//the reset function which clears the baord...

const reset = () => { 
        spaces.forEach((space, index) => { 
            spaces[index] = null;
        });
        boxes.forEach(box => { 
            box.innerText = '';
        });
        currentPlayer = oText;
    }


reset();
drawBoard();
resetBtn.addEventListener('click', reset);
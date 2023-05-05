const squareReg = new Map();

const ChessSquare = (x, y) => {
    const xPos = x;
    const yPos = y;
    let predecessor;

    const possibleKnightMoves = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ]

    const getPredecessor = () => predecessor;
    const setPredecessor = (newPre) => { predecessor ||= newPre };
    
    const name = () => `${x}, ${y}`;

    const nextSquare = ([ xOffset, yOffset ]) => {
        const [newX, newY] = [xPos + xOffset, yPos + yOffset];
        if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
            return ChessSquare(newX, newY);
        }
    }

    const createKnightMoves = () => {
        return possibleKnightMoves.map(nextSquare).filter(Boolean);
    }

    if (squareReg.has(name())) {
        return squareReg.get(name());
    } else {
        const newSquare = { name, getPredecessor, setPredecessor, createKnightMoves};
        squareReg.set(name(), newSquare);
        return newSquare;
    }
}

const knightMoves = (arrStart, arrEnd) => {
    squareReg.clear();
    
    const origin = ChessSquare(...arrStart);
    const target = ChessSquare(...arrEnd);

    const queue = [target];
    while(!queue.includes(origin)) {
        const currentSquare = queue.shift();

        const enqueueList = currentSquare.createKnightMoves();
        enqueueList.forEach((square) => square.setPredecessor(currentSquare));
        queue.push(...enqueueList);
    }
    const path = [origin];
    while(!path.includes(target)) {
        const nextSquare = path.at(-1).getPredecessor();
        path.push(nextSquare);
    }

    console.log(`The shortest path was ${path.length - 1} moves.`);
    console.log("The moves were:");
    path.forEach(square => console.log(square.name()));
}

module.exports = knightMoves;
const knightMoves = require("./knight");

knightMoves([0, 0], [2, 1]);
/*The shortest path was 1 moves.
The moves were:
0, 0
2, 1*/
knightMoves([2, 0], [2, 7]);
/*The shortest path was 5 moves.
The moves were:
2, 0
3, 2
5, 1
4, 3
3, 5
2, 7*/
knightMoves([5, 1], [7, 1]);
/*The shortest path was 2 moves.
The moves were:
5, 1
6, 3
7, 1*/
knightMoves([8, 0], [0, 8]);
//Please enter only values between 0 and 7.

import { useState } from 'react';
import circle from '../assets/circle.svg';
import cross from '../assets/cross.svg';
import transparent from '../assets/transparent.svg';
import { List } from 'immutable';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Tile = ({ status, onClick }) => {
  const style = {
    backgroundColor: 'yellowgreen',
    maxWidth: '100%',
    maxHeight: '100%',
  }

  let content;
  switch (status) {
    case 'O':
      content = circle;
      break;
    case 'X':
      content = cross;
      break;
    default:
      content = transparent;
      break;
  };
  return (
    <img style={style} onClick={onClick} src={content} alt="" />
  );
}

const nextPlayer = curr => {
  switch (curr) {
    case 'O': return 'X';
    case 'X': return 'O';
    default: return 'O';
  }
};

const winTable = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const TicTacToe = () => {
  /**
   * @type {List<string>}
   */
  const initialGameState = List(Array(9).fill(null));
  const [gameState, setGameState] = useState(initialGameState);
  const [player, setPlayer] = useState('');

  let winner = null;
  for (let index = 0; index < winTable.length; index++) {
    const _winner = winTable[index].map((v) => gameState.get(v)).reduce((acc, v) => (acc === v && acc !== null) ? v : false);
    if (_winner !== false) {
      winner = _winner;
      break;
    }
  }

  const tiles = gameState.map((v, i) => {
    const onClick = (e) => {
      if (winner) { return };
      if (gameState.get(i)) { return };
      const next = nextPlayer(player);
      setPlayer(next);
      setGameState(gameState.set(i, next));
    };
    return <Tile key={i} status={v} onClick={onClick} />;
  });

  return (
    <Container>
      <Row className="d-flex align-items-end">
        <Col>
          <h2 className="text-center">Tic-Tac-Toe</h2>
          {winner && <p className="text-center fs-5 mb-2">Winner: {winner}</p>}
          <hr />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col className="col-4">
          <div className="tic-tac-toe-board">{tiles}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default TicTacToe;
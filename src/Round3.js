import React from 'react';
import BracketGame from './BracketGame';
import { petData, unknownPet } from './helpers';

const Round = ({ data, games }) => {
  const pet = (petId) => petData(data, petId);
  const winnerFromGame = (gameId) => {
    const winningId = games[gameId].winner;
    if (winningId === '') {
      return unknownPet(games[gameId]);
    }
    return pet(winningId);
  };

  return data.length && games.length ? (
    <div className="round">
      <h3>Elite 8</h3>
      <BracketGame pet1={winnerFromGame(25)} pet2={winnerFromGame(26)} game={games[33]} />
      <BracketGame pet1={winnerFromGame(27)} pet2={winnerFromGame(28)} game={games[34]} />
      <BracketGame pet1={winnerFromGame(29)} pet2={winnerFromGame(30)} game={games[35]} />
      <BracketGame pet1={winnerFromGame(31)} pet2={winnerFromGame(32)} game={games[36]} />
    </div>
  ) : <div></div>;
}


export default Round;
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
      <h3>Final 4</h3>
      <BracketGame pet1={winnerFromGame(33)} pet2={winnerFromGame(34)} game={games[37]} />
      <BracketGame pet1={winnerFromGame(35)} pet2={winnerFromGame(36)} game={games[38]} />
    </div>
  ) : <div></div>;
}


export default Round;
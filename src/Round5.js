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
      <h3>Championship</h3>
      <BracketGame pet1={winnerFromGame(37)} pet2={winnerFromGame(38)} game={games[39]} />
    </div>
  ) : <div></div>;
}


export default Round;
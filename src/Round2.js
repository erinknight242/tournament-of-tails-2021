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
    console.log(winningId);
    return pet(winningId);
  };

  return data.length && games.length ? (
    <div className="round">
      <h3>Sweet 16</h3>
      <BracketGame pet1={winnerFromGame(9)} pet2={winnerFromGame(10)} game={games[25]} />
      <BracketGame pet1={winnerFromGame(11)} pet2={winnerFromGame(12)} game={games[26]} />
      <BracketGame pet1={winnerFromGame(13)} pet2={winnerFromGame(14)} game={games[27]} />
      <BracketGame pet1={winnerFromGame(15)} pet2={winnerFromGame(16)} game={games[28]} />
      <BracketGame pet1={winnerFromGame(17)} pet2={winnerFromGame(18)} game={games[29]} />
      <BracketGame pet1={winnerFromGame(19)} pet2={winnerFromGame(20)} game={games[30]} />
      <BracketGame pet1={winnerFromGame(21)} pet2={winnerFromGame(22)} game={games[31]} />
      <BracketGame pet1={winnerFromGame(23)} pet2={winnerFromGame(24)} game={games[32]} />
    </div>
  ) : <div></div>;
}


export default Round;
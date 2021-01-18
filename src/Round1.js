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
      <h3>Round of 32</h3>
      <BracketGame pet1={pet(0)} pet2={winnerFromGame(1)} game={games[9]} />
      <BracketGame pet1={pet(15)} pet2={pet(16)} game={games[10]} />
      <BracketGame pet1={pet(8)} pet2={pet(23)} game={games[11]} />
      <BracketGame pet1={pet(7)} pet2={winnerFromGame(2)} game={games[12]} />
      <BracketGame pet1={pet(3)} pet2={winnerFromGame(3)} game={games[13]} />
      <BracketGame pet1={pet(12)} pet2={pet(19)} game={games[14]} />
      <BracketGame pet1={pet(11)} pet2={pet(20)} game={games[15]} />
      <BracketGame pet1={winnerFromGame(4)} pet2={pet(4)} game={games[16]} />
      <BracketGame pet1={pet(1)} pet2={winnerFromGame(5)} game={games[17]} />
      <BracketGame pet1={pet(14)} pet2={pet(17)} game={games[18]} />
      <BracketGame pet1={pet(9)} pet2={winnerFromGame(6)} game={games[19]} />
      <BracketGame pet1={pet(6)} pet2={pet(25)} game={games[20]} />
      <BracketGame pet1={pet(2)} pet2={winnerFromGame(7)} game={games[21]} />
      <BracketGame pet1={pet(13)} pet2={pet(18)} game={games[22]} />
      <BracketGame pet1={pet(10)} pet2={pet(21)} game={games[23]} />
      <BracketGame pet1={winnerFromGame(8)} pet2={pet(5)} game={games[24]} />
    </div>
  ) : <div></div>;
}


export default Round;
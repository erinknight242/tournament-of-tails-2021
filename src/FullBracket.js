import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { petData, unknownPet } from './helpers';
import BracketGame from './BracketGame';

export default class FullBracket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positionsSet: false
    }
  }

  render() {
    const { data, games } = this.props;
    const pet = (id) => petData(data, id);
    const winnerFromGame = (gameId) => {
      const winningId = games[gameId].winner;
      if (winningId === '') {
        return unknownPet(games[gameId]);
      }
      return pet(winningId);
    };
  
    /* pet1 & pet2 are the two pets competing in that game. pet(id) - ID should match the firebase ID.
       game[id] - ID should match the firebase ID
       top - (optional) for vertical alignment of the brackets. Top pixel measurement; will need to be adjusted
       based on the photo heights. Leave off on the round that has the most games. */
    return data.length && games.length ? (
      <div className="round">
        <h3>Tournament of Tails 2021</h3>
        <div className="full-bracket-container">
          <div className="play-in left">
            <BracketGame pet1={pet(17)} pet2={pet(15)} game={games[1]} top={120} />
            <BracketGame pet1={pet(16)} pet2={pet(14)} game={games[2]} top={1380} />
          </div>
          <div className="round-of-32">
            <BracketGame pet1={pet(0)} pet2={winnerFromGame(1)} game={games[25]} />
            <BracketGame pet1={pet(7)} pet2={pet(8)} game={games[32]} />
            <BracketGame pet1={pet(3)} pet2={pet(12)} game={games[28]} />
            <BracketGame pet1={pet(4)} pet2={pet(11)} game={games[29]} />
            <BracketGame pet1={pet(1)} pet2={winnerFromGame(2)} game={games[26]} />
            <BracketGame pet1={pet(6)} pet2={pet(9)} game={games[31]} />
            <BracketGame pet1={pet(2)} pet2={pet(13)} game={games[27]} />
            <BracketGame pet1={pet(5)} pet2={pet(10)} game={games[30]} />
          </div>
          <div className="sweet-16">
            <BracketGame pet1={winnerFromGame(3)} pet2={winnerFromGame(10)} game={games[33]} top={114} />
            <BracketGame pet1={winnerFromGame(4)} pet2={winnerFromGame(9)} game={games[34]} top={330} />
            <BracketGame pet1={winnerFromGame(5)} pet2={winnerFromGame(8)} game={games[35]} top={580} />
            <BracketGame pet1={winnerFromGame(6)} pet2={winnerFromGame(7)} game={games[36]} top={805} />
          </div>
          <div className="elite-8">
            <BracketGame pet1={winnerFromGame(11)} pet2={winnerFromGame(14)} game={games[37]} top={290} />
            <BracketGame pet1={winnerFromGame(12)} pet2={winnerFromGame(13)} game={games[38]} top={960} />
          </div>
          <div className="final-4">
            <BracketGame pet1={winnerFromGame(15)} pet2={winnerFromGame(16)} game={games[39]} top={700} />
          </div>
        </div>
      </div>
    ) : <div></div>;
  }
}
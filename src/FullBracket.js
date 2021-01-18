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
  
    return data.length && games.length ? (
      <div className="round">
        <h3>Tournament of Tails</h3>
        <div className="full-bracket-container">
          <div className="play-in left">
            <BracketGame pet1={pet(31)} pet2={pet(32)} game={games[1]} top={97} />
            <BracketGame pet1={pet(24)} pet2={pet(39)} game={games[2]} top={944} />
            <BracketGame pet1={pet(28)} pet2={pet(35)} game={games[3]} top={944} />
            <BracketGame pet1={pet(27)} pet2={pet(36)} game={games[4]} top={1573} />
            <BracketGame pet1={pet(30)} pet2={pet(33)} game={games[5]} top={1806} />
            <BracketGame pet1={pet(22)} pet2={pet(38)} game={games[6]} top={2228} />
            <BracketGame pet1={pet(29)} pet2={pet(34)} game={games[7]} top={2648} />
            <BracketGame pet1={pet(26)} pet2={pet(37)} game={games[8]} top={3258} />
          </div>
          <div className="round-of-32-left">
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
          <div className="sweet-16">
            <BracketGame pet1={winnerFromGame(9)} pet2={winnerFromGame(10)} game={games[25]} top={111} />
            <BracketGame pet1={winnerFromGame(11)} pet2={winnerFromGame(12)} game={games[26]} top={342} />
            <BracketGame pet1={winnerFromGame(13)} pet2={winnerFromGame(14)} game={games[27]} top={572} />
            <BracketGame pet1={winnerFromGame(15)} pet2={winnerFromGame(16)} game={games[28]} top={805} />
            <BracketGame pet1={winnerFromGame(17)} pet2={winnerFromGame(18)} game={games[29]} top={1033} />
            <BracketGame pet1={winnerFromGame(19)} pet2={winnerFromGame(20)} game={games[30]} top={1264} />
            <BracketGame pet1={winnerFromGame(21)} pet2={winnerFromGame(22)} game={games[31]} top={1496} />
            <BracketGame pet1={winnerFromGame(23)} pet2={winnerFromGame(24)} game={games[32]} top={1725} />
          </div>
          <div className="elite-8">
            <BracketGame pet1={winnerFromGame(25)} pet2={winnerFromGame(26)} game={games[33]} top={318} />
            <BracketGame pet1={winnerFromGame(27)} pet2={winnerFromGame(28)} game={games[34]} top={976} />
            <BracketGame pet1={winnerFromGame(29)} pet2={winnerFromGame(30)} game={games[35]} top={1632} />
            <BracketGame pet1={winnerFromGame(31)} pet2={winnerFromGame(32)} game={games[36]} top={2293} />
          </div>
          <div className="final-4">
            <BracketGame pet1={winnerFromGame(33)} pet2={winnerFromGame(34)} game={games[37]} top={737} />
            <BracketGame pet1={winnerFromGame(35)} pet2={winnerFromGame(36)} game={games[38]} top={2242} />
          </div>
          <div className="championship">
            <BracketGame pet1={winnerFromGame(37)} pet2={winnerFromGame(38)} game={games[39]} top={1578} />
          </div>
        </div>
      </div>
    ) : <div></div>;
  }
}
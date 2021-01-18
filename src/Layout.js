import React, { Component } from 'react';
import Round0 from './Round0';
import Round1 from './Round1';
import Round2 from './Round2';
import Round3 from './Round3';
import Round4 from './Round4';
import Round5 from './Round5';
import FullBracket from './FullBracket';

export default class Layout extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      x: 0,
      swiping: false,
      swipeDiff: 0,
      zooming: false
    }
    this.minDistance = 50;
  }
  
  render() {
    const { data, games, currentRound, setCurrentRound } = this.props;
    const round0 = <Round0 data={data} games={games} />;
    const round1 = <Round1 data={data} games={games} />;
    const round2 = <Round2 data={data} games={games} />;
    const round3 = <Round3 data={data} games={games} />;
    const round4 = <Round4 data={data} games={games} />;
    const round5 = <Round5 data={data} games={games} />;
    let selectedRound = round0;

    switch(currentRound) {
        case "1": selectedRound = round1; break;
        case "2": selectedRound = round2; break;
        case "3": selectedRound = round3; break;
        case "4": selectedRound = round4; break;
        case "5": selectedRound = round5; break;
    }

    const round = parseInt(currentRound);
    const prevRound = round > 0 ? (round - 1).toString() : '0';
    const nextRound = round < 5 ? (round + 1).toString() : '5';
    const previousHidden = currentRound === '0' ? "hidden" : '';
    const nextHidden = currentRound === '5' ? "hidden" : '';

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      this.setState({ x: touch.clientX });
    }
    const handleTouchMove = (e) => {
        if (e.changedTouches && e.changedTouches.length) {
            const touch = e.changedTouches[0];
            this.setState({ swiping: true, swipeDiff: touch.clientX - this.state.x });
          }
    }
    const handleTouchEnd = () => {
        const absX = Math.abs(this.state.swipeDiff);
        if (this.state.swiping && !this.state.zooming && absX > this.minDistance ) {
          if (this.state.swipeDiff > 0) {
              setCurrentRound(prevRound);
          } else {
              setCurrentRound(nextRound);
          }
          this.setState({ swiped: true, swipe: {}, swipeDiff: 0 });
        }
    }

    const mobileView = (
    <div className="layout">
    <div
        className="swipe-container"
        onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
        onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
        onTouchEnd={() => handleTouchEnd()}
    >
        {selectedRound}
    </div>
    <div className="nav">
        <div className={`placeholder ${previousHidden}`}></div>
        <div className={`previous round-text ${previousHidden}`} onClick={setCurrentRound.bind(this, prevRound)}>
        <img src="../assets/images/next.png"/>
        <h3>Previous Round</h3>
        </div>
        <div className={`next round-text ${nextHidden}`} onClick={setCurrentRound.bind(this, nextRound)}>
        <h3>Next Round</h3>
        <img src="../assets/images/next.png"/>
        </div>
    </div>
    </div>
    );

    const desktopView = (
      <FullBracket data={data} games={games} />
    );

    const displayView = window.innerWidth > 400 ? desktopView : mobileView;

    return(
      <div>
        {displayView}
      </div>
    );
    }
}
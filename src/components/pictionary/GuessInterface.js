import React from 'react';
import Guess from './guess';
import GameStatusControls from './GameStatusControls';
import './GuessInterface.css'
export default class GuessInterface extends React.Component {
  constructor() {
    super();
  }

  render() {
    let hasTurn = this.props.hasTurn;
    let isGameInProgress = this.props.isGameInProgress;
    return (
      <div>
        { !isGameInProgress &&
          <GameStatusControls
            onDrawRequest={this.props.onDrawRequest}
          />
        }
        <div className="messages">
          {this.props.word ? "Draw a " + this.props.word : null}
        </div>
        { isGameInProgress && !hasTurn &&
          <Guess
            submitGuess={this.props.onGuessSubmit}
          />
        }

      </div>
    );
  }

}

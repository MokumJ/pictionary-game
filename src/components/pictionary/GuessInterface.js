import React from 'react';
import Guess from './guess';
import GameStatusControls from './GameStatusControls';

export default class GuessInterface extends React.Component {
  constructor() {
    super();
  }

  render() {
    let isDrawer = this.props.isDrawer;
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
        { isGameInProgress && !isDrawer &&
          <Guess
            submitGuess={this.props.onGuessSubmit}
          />
        }

      </div>
    );
  }

}

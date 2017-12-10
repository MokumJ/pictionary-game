import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Toolbar from 'material-ui/Toolbar';
import Guess from './guess';
import draw from './draw';
import GuessInterface from './GuessInterface';
import './canvas.css';
import { word } from '../../actions/pictionary/word'

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      canvas: null,
      word: '',
      guesses: [],
      gameInProgress: false,
      isDrawer: false,
    };
  }


  componentDidMount() {
    this.setState({canvas: draw()});
  }

  _beginGame(word, isDrawer) {
   this.setState({word, gameInProgress: true, isDrawer});
 }

  _receiveGuess(guess) {
  let guesses = this.state.guesses.slice();
  guesses.push(guess);
  this.setState({guesses: guesses});
  }
    handleGuessSubmit(guess) {
  console.log("New guess submitted: " + guess);
  console.log("Sending guess to server");


  let guesses = this.state.guesses.slice();
  guesses.push(guess);
  this.setState({guesses: guesses});

  }
  render() {
    return (
      <div>
      <div className='drawing'>
        <canvas id='canvas' width={window.innerWidth * 0.75} height={window.innerHeight * 0.75}/>
        <Toolbar className='draw-chat-tools'>
        <RaisedButton
          onClick={this.state.canvas && this.state.canvas.clear}
          label='Clear'/>
        <RaisedButton
          onClick={this.state.canvas && this.state.canvas.save}
          label='Save'/>

          </Toolbar>
          </div>
        
            </div>
            )
          }
        }

export default Canvas;

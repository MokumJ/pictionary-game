import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOneGame, fetchPlayers } from '../actions/games/fetch'
import { connect as subscribeToWebsocket } from '../actions/websocket'
import  {turn}  from '../actions/pictionary/turn'
import JoinGameDialog from '../components/games/JoinGameDialog'
import Canvas from '../components/pictionary/canvas'
import Guess from '../components/pictionary/guess'
const playerShape = PropTypes.shape({
  userId: PropTypes.string.isRequired,
  pairs: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string,
  hasTurn: PropTypes.bool,
})

class Game extends PureComponent {
  static propTypes = {
    fetchOneGame: PropTypes.func.isRequired,
    fetchPlayers: PropTypes.func.isRequired,
    subscribeToWebsocket: PropTypes.func.isRequired,
    game: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      players: PropTypes.arrayOf(playerShape),
      draw: PropTypes.bool,
      updatedAt: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      started: PropTypes.bool,
      turn: PropTypes.number.isRequired,
      word: PropTypes.string.isRequired,
      guess: '',
      hasTurn: PropTypes.bool.isRequired,

    }),
    currentPlayer: playerShape,
    isPlayer: PropTypes.bool,
    isJoinable: PropTypes.bool,
    hasTurn: PropTypes.bool,
  }


  componentWillMount() {
    const { game, fetchOneGame, subscribeToWebsocket } = this.props
    const { gameId } = this.props.match.params

    if (!game) { fetchOneGame(gameId) }
    subscribeToWebsocket()
  }

  componentWillReceiveProps(nextProps) {
    const { game } = nextProps

    if (game && !game.players[0].name) {
      this.props.fetchPlayers(game)
    }
  }

  onDrawRequest = () => {
    const { turn, game } = this.props
    turn(game)
   }
   //
   // joinGame = () => {
   //   const { joinGame, game } = this.props
   //   joinGame(game)
   // }


  handleKeyUp(event, game) {
    this.state = {
     guess: ''
   };
    if (event.key === 'Enter') {
      this.props.submitGuess(this.state.guess)
      event.target.value = "";
      this.setState({guess: ''})
    } else {
      this.setState({
        guess: event.target.value
      });
    }
  }

  render() {
    const { game } = this.props

    if (!game) return null
    const title = game.players.map(p => (p.name || null))
      .filter(n => !!n)
      .join(' vs ')


    return (
      <div className="Game">
        <h1>Game!</h1>
        <p>{title}</p>

        <div className="control">
          <button onClick={this.onDrawRequest}>I want to draw!</button>
        </div>

        <Canvas />

        { game.hasTurn === true ?   <p>{  "Draw a " + game.word}</p>  : <Guess /> }

        <JoinGameDialog gameId={game._id} />
      </div>
    )
  }
}
  const mapStateToProps = ({ currentUser, games, guess }, { match }) => {
  const game = games.filter((g) => (g._id === match.params.gameId))[0]
  const currentPlayer = game && game.players.filter((p) => (p.userId === currentUser._id))[0]

  return {
    currentPlayer,
    game,
    isPlayer: !!currentPlayer,
    // hasTurn: currentPlayer && currentPlayer._id === currentUser._id,
    isJoinable: game && !currentPlayer && game.players.length < 2
  }
}

export default connect(mapStateToProps, {
  subscribeToWebsocket,
  fetchOneGame,
  fetchPlayers,
  turn,
})(Game)

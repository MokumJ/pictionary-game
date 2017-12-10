import React from 'react'
import { connect } from 'react-redux'
import { guess } from '../../actions/pictionary/guess'
import PropTypes from 'prop-types'

  let Guess = ({dispatch}) => {
  let input

  return (
  <div className="guessing">
    <form onSubmit={e => {
    e.preventDefault()
    if (!input.value.trim()){
      return
    }
    dispatch(guess(input.value))
    input.value = ''   }}>
    <input ref={node => { input = node  }}/>
      <button className="guess" type="submit">
        Guess
      </button>

    </form>
    </div>
  )
}

const mapStateToProps = ({ guess }) => ({ guess})

export default connect(mapStateToProps)(Guess)

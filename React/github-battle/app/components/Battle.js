
import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaFighterJet, FaTrophy, FaUserFriends } from 'react-icons/fa';

const Instructions = () => (
  <div className='instructions-container'>
    <h1 className='center-text header-lg'>Instructions</h1>
    <ol className='container-sm grid center-text battle-instructions'>
      <li>
        <h3 className='header-sm'>Enter two Github users</h3>
        <FaUserFriends className='bg-light' color='rgb(255, 191, 116)' size={140} />
      </li>
      <li>
        <h3 className='header-sm'>Battle</h3>
        <FaFighterJet className='bg-light' color='#727272' size={140} />
      </li>
      <li>
        <h3 className='header-sm'>See the winners</h3>
        <FaTrophy className='bg-light' color='rgb(255, 215, 0)' size={140} />
      </li>
    </ol>
  </div>
);

class PlayerInput extends React.Component {
  state = {
    username: ''
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.username);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }
  
  render() {
    return (
      <form 
        className='column player'
        onSubmit={event => this.handleSubmit(event)}
      >
        <label htmlFor='username' className='player-label'>
          {this.props.label}
        </label>
        <div className='row player-inputs'>
          <input
            type='text'
            id='username'
            className='input-light'
            placeholder='github username'
            autoComplete='off'
            value={this.state.username}
            onChange={(event) => this.handleChange(event)}
          />
          <button
            className='btn btn-dark'
            type='submit'
            disabled={!this.state.username}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

class Battle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Instructions />
      </React.Fragment>
    )
  }
}

export default Battle;

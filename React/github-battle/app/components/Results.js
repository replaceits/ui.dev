import React from 'react';

import {battle} from '../utils/api';

class Results extends React.Component {
  componentDidMount() {
    const {playerOne, playerTwo} = this.props;

    battle([playerOne, playerTwo])
      .then(players => console.log('data: ', players));
  }

  render() {
    return (
      <div>
        Results
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    )
  }
}

export default Results;

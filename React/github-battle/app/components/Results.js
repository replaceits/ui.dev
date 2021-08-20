import React from 'react';

class Results extends React.Component {
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

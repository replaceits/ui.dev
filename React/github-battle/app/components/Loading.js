
import React from 'react';

class Loading extends React.Component {
  state = {
    content: 'Loading'
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.state.content === 'Loading' + '...'
        ? this.setState({content: 'Loading'})
        : this.setState(({content}) => ({content: content + '.'}))
    }, 300);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p>
        {this.state.content}
      </p>
    )
  }
}

export default Loading;

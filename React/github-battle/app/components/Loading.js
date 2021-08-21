
import React from 'react';

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center'
  }
}

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
      <p style={styles.content}>
        {this.state.content}
      </p>
    )
  }
}

export default Loading;

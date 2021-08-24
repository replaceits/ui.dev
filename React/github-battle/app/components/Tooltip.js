
import React from 'react';
import PropTypes from 'prop-types';

import withHover from './withHover';

const styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  }
}

class Tooltip extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    hovering: PropTypes.bool.isRequired
  }

  render() {
    const {text, children, hovering} = this.props;

    return (
      <div 
        style={styles.container}
      >
        {hovering === true && <div style={styles.tooltip}>{text}</div>}
        {children}
      </div>
    )
  }
}

export default withHover(Tooltip);


import React from 'react';
import PropTypes from 'prop-types';

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


function Loading({speed, text}) {
  const [content, setContent] = React.useState(text);

  const interval = React.useRef(null);

  React.useEffect(() => {
    interval.current = window.setInterval(() => {
      setContent(
        content => content === `${text}...`
          ? text
          : `${content}.`
      );
      console.log('test');
    }, speed);

    return () => window.clearInterval(interval.current);
  }, []);

  return (
    <p style={styles.content}>
      {content}
    </p>
  )
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

export default Loading;

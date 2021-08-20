
import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }

  render() {
    const {header, name, avatar, subheader, href, children} = this.props;

    return (
      <div className='card bg-light'>
        <h4 className='header-lg center-text'>
          {header}
        </h4>
        <img
          className='avatar'
          src={avatar}
          alt={`Avatar for ${name}`}
        />
        {subheader && (
          <h4 className='center-text'>
            {subheader}
          </h4>
        )}
        <h2 className='center-text'>
          <a className='link' href={href}>
            {name}
          </a>
        </h2>
        {children}
      </div>
    );
  }
}

export default Card;

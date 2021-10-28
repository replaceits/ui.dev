
import React from 'react';
import PropTypes from 'prop-types';

function Hover({children}) {
  const [hovering, setHovering] = React.useState(false);

  return (
    <div
      onMouseOver={() => setHovering(true)}
      onMouseOut={()=> setHovering(false)}
    >
      {children(hovering)}
    </div>
  )
}

Hover.propTypes = {
  children: PropTypes.func.isRequired
};

export default Hover;

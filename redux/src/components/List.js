
import * as React from 'react';

export default function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span
            onClick={props.toggle ? () => props.toggle(item) : null}
            style={{
              textDecoration: item.complete ? 'line-through' : ''
            }}
          >
            {item.name}
          </span>
          <button onClick={()=>props.remove(item)}>X</button>
        </li>
      ))}
    </ul>
  );
}

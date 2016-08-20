import React from 'react'
import { Link } from 'react-router'

export default function( props ) {
  return (
    <div>
      <h2>Repos</h2>

      <ul>
        <li>
          <Link to='/repos/reactjs/react-router'>React Router</Link>
        </li>
        <li>
          <Link to='/repos/facebook/react'>React</Link>
        </li>
      </ul>

      { props.children }
    </div>
  );
}
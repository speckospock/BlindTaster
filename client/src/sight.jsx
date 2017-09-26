import React from 'react';
import _ from 'lodash';

let Sight = (props) => (
  <div className="container">
    <div className="row">
      <form>
      {Object.keys(props.options).map(option => (
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {option}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {props.options[option].map(el => {
              console.log(el);
              return <button className='dropdown-item' type="button">{el}</button>;
            })}
          </div>
        </div>
      ))}
      </form>
      {console.log(props.options)}
    </div>
  </div>
);

export default Sight;

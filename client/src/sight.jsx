import React from 'react';
import _ from 'lodash';

let Sight = (props) => (
  <div className="container">
    <div className="row">
      <form>
      {Object.keys(props.options).map(option => (
        <div className="col">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id={`dropdown${option}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {option}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {props.options[option].map((el, i) => {
                console.log(el);
                return <button
                  className='dropdown-item'
                  type="button"
                  onClick={() => {
                    props.form[option] = i;
                    $(`#dropdown${option}`).text(`${option}: ${el}`);
                    console.log(props.form);
                  }}>{el}</button>;
              })}
            </div>
          </div>
        </div>
      ))}
      </form>
      {console.log(props.options)}
    </div>
  </div>
);

export default Sight;

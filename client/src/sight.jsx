import React from 'react';
import _ from 'lodash';

let Sight = (props) => (
  <div className="container">
    <div className="row">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="clarity"
          value={props.form.clarity}
          >
        </input>
      </form>
      {console.log(props.options)}
    </div>
  </div>
);

export default Sight;

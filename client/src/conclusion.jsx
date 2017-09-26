import React from 'react';

class Conclusion extends React.Component {
  constructor(props) {
    super(props);
  }
  updateForm() {
    this.props.update(this.props.form);
  }
  handleChange(event) {
    let key = event.target.placeholder;
    this.props.form[key] = event.target.value;
    this.updateForm();
  }
  render() {
    return (
      <div className="container">
        <h3>Conclusion:</h3>
        <div className="row">
          {Object.keys(this.props.options).map(option => (
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id={`dropdown${option}Conclusion`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {option}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {this.props.options[option].map((el, i) => {
                  console.log(el);
                  return <button
                    className='dropdown-item'
                    type="button"
                    onClick={() => {
                      this.props.form[option] = i;
                      console.log(this.props.form);
                      this.updateForm();
                      $(`#dropdown${option}Conclusion`).text(`${option}: ${el}`);
                    }}>{el}</button>;
                })}
              </div>
            </div>
          ))}
          <button
            className='btn btn-secondary'
            type="button"
            id="oldWorld"
            onClick={() => {
              this.props.form.oldWorld = !this.props.form.oldWorld;
              this.updateForm();
              $('#oldWorld').text(`Old World?: ${this.props.form.oldWorld}`)
            }}
          > {`Old World?: ${this.props.form.rimVariation}`}
          </button>
        </div>
        <div className="row">
          {Object.keys(this.props.form)
            .filter(key => key !== 'climate' && key !== 'age' && key !== 'oldWorld')
            .map(field => (
              <input
                type="text"
                className="form-control"
                placeholder={field}
                value={this.props.form.field}
                onChange={this.handleChange.bind(this)}>
              </input>
            ))}

        </div>
      </div>
    )
  }
};

export default Conclusion;

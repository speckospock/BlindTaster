import React from 'react';

class Palate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'red',
    };
  }
  componentWillMount() {
    this.setType();
  }
  setType() {
    let wineType = this.props.type();
    if (wineType) {
      this.setState({type: wineType});
    } else {
      setTimeout(this.setType.bind(this), 500);
    }
  }
  updateForm() {
    this.props.update(this.props.form);
  }
  render() {
    let button = (this.state.type === 'white') ? (<button
      className='btn btn-secondary'
      type="button"
      id="phenolic"
      onClick={() => {
        this.props.form.structure.phenolic = !this.props.form.structure.phenolic;
        this.updateForm();
        $('#phenolic').text(`Phenolics: ${this.props.form.structure.phenolic}`)
      }}
    > {`Phenolics: false`}
    </button>) : <div></div>;
    return(
      <div className="container">
        <h3>Palate:</h3>
        <div className="row">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id={`sweetness`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sweetness
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.props.options.sweetness.map((el, i) => {
              return <button
                className='dropdown-item'
                type="button"
                onClick={() => {
                  this.props.form.sweetness = i;
                  console.log(this.props.form);
                  this.updateForm();
                  $(`#sweetness`).text(`sweetness: ${el}`);
                }}>{el}</button>;
            })}
            </div>
          </div>
        </div>
        <div className="row">
        {Object.keys(this.props.structure).map(option => (
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id={`dropdown${option}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {option}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {this.props.structure[option].map((el, i) => {
                console.log(el);
                return <button
                  className='dropdown-item'
                  type="button"
                  onClick={() => {
                    this.props.form[option] = i;
                    console.log(this.props.form);
                    this.updateForm();
                    $(`#dropdown${option}`).text(`${option}: ${el}`);
                  }}>{el}</button>;
              })}
            </div>
          </div>
        ))}
        </div>
        <div className="row">
        {button}
        {Object.keys(this.props.form)
          .filter(key => key !== 'sweetness' && key !== 'fruit' && key !== 'nonFruit' && key !== 'structure' )
          .map(option => (
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id={`${option}Palate`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {`${option}:`}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {Object.keys(this.props.form[option]).map(el => (
                  <button
                    className='dropdown-item'
                    type="button"
                    onClick={() => {
                      this.props.form[option][el] = !this.props.form[option][el];
                      console.log(this.props.form[option])
                      this.updateForm();
                      let selected = Object.keys(this.props.form[option])
                        .filter(item => !!this.props.form[option][item])
                        .join(', ');
                      $(`#${option}Palate`).text(`${option}: ${selected}`);
                    }}
                  >{el}</button>
                ))}
              </div>
            </div>
          ))}

        </div>
        <div className="row">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id={`fruitPalate`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {`fruit:`}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {Object.keys(this.props.form.fruit[this.state.type]).map(el => (
                <button
                  className='dropdown-item'
                  type="button"
                  onClick={() => {
                    this.props.form.fruit[this.state.type][el] = !this.props.form.fruit[this.state.type][el];
                    console.log(this.props.form.fruit);
                    this.updateForm();
                    let selected = Object.keys(this.props.form.fruit[this.state.type])
                      .filter(item => !!this.props.form.fruit[this.state.type][item])
                      .join(', ');
                    $(`#fruitPalate`).text(`fruit: ${selected}`);
                  }}
                >{el}</button>
              ))}
            </div>
          </div>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id={`nonFruitPalate`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {`nonFruit:`}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {Object.keys(this.props.form.nonFruit[this.state.type]).map(el => (
                <button
                  className='dropdown-item'
                  type="button"
                  onClick={() => {
                    this.props.form.nonFruit[this.state.type][el] = !this.props.form.nonFruit[this.state.type][el];
                    console.log(this.props.form.nonFruit);
                    this.updateForm();
                    let selected = Object.keys(this.props.form.nonFruit[this.state.type])
                      .filter(item => !!this.props.form.nonFruit[this.state.type][item])
                      .join(', ');
                    $(`#nonFruitPalate`).text(`nonFruit: ${selected}`);
                  }}
                >{el}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Palate;

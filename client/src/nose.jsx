import React from 'react';
import axios from 'axios';

class Nose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'red'
    };
  }
  componentWillMount() {
    // axios.get(`http:\/\/localhost:6161/test/${this.props.id}`)
    //   .then(res => {
    //     console.log("RES", res);
    //     this.setState({
    //       type: res.data.type,
    //     });
    //   }).then(() => console.log("hihihi", this.state))
    //   .catch(() => console.log("an error"));
    // this.setState({type: this.props.type()});
  }
  componentDidMount() {
    // this.setState({type: this.props.type()});
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
  render() {
    return(
      <div className="container">
        <h3>Nose:</h3>
        <div className="row">
        {Object.keys(this.props.options).map(option => (
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id={`dropdown${option}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    $(`#dropdown${option}`).text(`${option}: ${el}`);
                  }}>{el}</button>;
              })}
            </div>
          </div>
        ))}
        </div>
        <div className="row">
        {Object.keys(this.props.form)
          .filter(key => key !== 'intensity' && key !== 'age' && key !== 'fruit' && key !== 'nonFruit')
          .map(option => (
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id={`${option}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                      let selected = Object.keys(this.props.form[option])
                        .filter(item => !!this.props.form[option][item])
                        .join(', ');
                      $(`#${option}`).text(`${option}: ${selected}`);
                    }}
                  >{el}</button>
                ))}
              </div>
            </div>
          ))}

        </div>
        <div className="row">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id={`fruit`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {`fruit:`}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {Object.keys(this.props.form.fruit[this.state.type]).map(el => (
              <button
                className='dropdown-item'
                type="button"
                onClick={() => {
                  this.props.form.fruit[this.state.type][el] = !this.props.form.fruit[this.state.type][el];
                  console.log(this.props.form.fruit)
                  let selected = Object.keys(this.props.form.fruit[this.state.type])
                    .filter(item => !!this.props.form.fruit[this.state.type][item])
                    .join(', ');
                  $(`#fruit`).text(`fruit: ${selected}`);
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

export default Nose;

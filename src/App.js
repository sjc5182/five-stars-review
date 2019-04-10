import React, { Component } from 'react';
import './app.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isToggleOn: [true, true, true, true, true]
    }
  }

  changeColor = (e) => {
    let starArray = this.state.isToggleOn
    for(let i = 0; i<=e.target.id; i++){
      starArray[i]=false
    }
    this.setState({
      isToggleOn: starArray
    })
  }

  render() {
    return (
      <div className = "Container">
        <div className = 'Wrapper'>
          <div className = 'innerWraper'>
            <i id = "0" className="far fa-star" style = {{fontSize: '300%', color: this.state.isToggleOn[0] ? 'green' : 'red' }} onClick= {this.changeColor}></i>
            <i id = "1" className="far fa-star" style = {{fontSize: '300%', color: this.state.isToggleOn[1] ? 'green' : 'red' }} onClick= {this.changeColor}></i>
            <i id = "2" className="far fa-star" style = {{fontSize: '300%', color: this.state.isToggleOn[2] ? 'green' : 'red' }} onClick={this.changeColor}></i>
            <i id = "3" className="far fa-star" style = {{fontSize: '300%', color: this.state.isToggleOn[3] ? 'green' : 'red' }} onClick={this.changeColor}></i>
            <i id = "4" className="far fa-star" style = {{fontSize: '300%', color: this.state.isToggleOn[4] ? 'green' : 'red' }} onClick={this.changeColor}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

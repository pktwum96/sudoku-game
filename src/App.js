import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value : '',
      className:"square"
    };

    this.onChange =this.onChange.bind(this)
  }
  onChange(e){
    const re= /^[1-9\b]+$/;
    if( e.target.value===''||re.test(e.target.value)){
      this.setState({
        value: e.target.value,
        className:"clickedsquare"
      });
    }
  }
  render() {
    return (
      <div id="game">
          <div id="head">
            Sudoku Game
          </div>
          <div id="board" >
              <span className="row">
                  <input type="text" onChange={this.onChange} value={this.state.value} className={this.state.className} maxlength={1}/>
                  <input type="text" onChange={this.onChange} value={this.state.value}  className={this.state.className} maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
              </span>
            
              <span className="row">
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
              </span>
            
              <span className="row">
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
              </span>
            
              <span className="row">
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
              </span>
            
              <span className="row">
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
              </span>
            
              <span className="row">
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
              </span>
            
              <span className="row">
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
              </span>
            
              <span className="row">
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
              </span>
            
              <span className="row">
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
                  <input type="text" onChange={this.onChange} className="square" maxlength={1}/>
              </span>
            
          </div>
      </div>


    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.getQueens = this.getQueens.bind(this);
  }

  getQueens() {    
       
    const url = 'http://www.nokeynoshade.party/api/queens?limit=50'
  
    fetch(url)
    .then(function(response) {
      if (!response.ok) {
        console.log('Looks like there was a problem. Status Code: '+ response.status);
        return;
      }
      console.log(response.json());
      console.log(response);
      return response;
      
    })

    // .then(function(data) {
    //   that.setState({ person: data.person });
    // });
  }

  render() {
    return (
      <div className="App">
        <h2>Drag Race Guess Who</h2>
        <p>{this.getQueens()}</p>
      </div>
    );
  }
}

export default App;

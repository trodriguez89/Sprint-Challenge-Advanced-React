import React from 'react';
import axios from "axios";
import Nav from "./components/Nav";
import PlayerCard from "./components/PlayerCard";

import './App.css';

class App extends React.Component {
  state = {
    info: []
  }

  componentDidMount(){
    axios.get("http://localhost:5000/api/players")
    .then(response => {
      console.log(response);
      this.setState({
        info: response.data
      })
    })
    .catch(error => {
      console.log("Oops, something went wrong!", error)
    })
  }

  render(){
  return (
    <div className="App">
      <Nav />
      <PlayerCard info={this.state.info}/>

    </div>
  );
}
}

export default App;

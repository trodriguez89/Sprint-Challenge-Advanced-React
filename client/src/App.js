import React from 'react';
import axios from "axios";
import './App.css';
import PlayerCard from "./components/PlayerCard";

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
      <h3>Hello World!</h3>
      <PlayerCard info={this.state.info}/>

    </div>
  );
}
}

export default App;

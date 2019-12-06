import React from 'react';
import axios from "axios";
import Nav from "./components/Nav";
import PlayerCard from "./components/PlayerCard";
import styled from "styled-components";

import './App.css';

const MainContain = styled.div`
  text-align: center;
`



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
    <MainContain>
      <Nav />
      <PlayerCard info={this.state.info}/>

    </MainContain>
  );
}
}

export default App;

import React, { Component } from 'react';
import Clicker from "./components/Clickers";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import Grid from "./components/Grid";
import tiles from "./tiles.json";
import './App.css';

function shuffleTiles(tiles){
  let i = tiles.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = tiles[i];
    tiles[i] = tiles[j];
    tiles[j] = temp;
  }
  return tiles;
} 

class App extends Component {
  state = {
    bestScore: 0,
    currentScore: 0,
    tiles: tiles,
    unclickedTiles: tiles,
    clickedTiles: []
  };

  click = id =>{
    if (this.state.clickedTiles.indexOf(id)=== -1) {
      this.increment();
      this.setState({ clickedTiles: this.state.clickedTiles.concat(id) })
    } else {
      this.reset()
    }
  }

  increment = () => {
    const score = this.state.currentScore + 1
    this.setState({ currentScore: score });

    if (score >= this.state.bestScore){
      this.setState({ bestScore: score })
    }
    this.shuffle();
  }

  reset = () => {
    this.setState ({
      currentScore: 0,
      bestScore: this.state.bestScore,
      clickedTiles: []
    });
    this.shuffle();
  };

  shuffle = () => {
    let shuffledTiles = shuffleTiles(tiles);
    this.setState({ tiles: shuffledTiles })
  }
    
  render() {
    return (
      <Wrapper>
        <Title>Click Click Bang Bang</Title>

        <div>
        <Score
          currentScore={this.state.currentScore}
          bestScore={this.state.bestScore}
          >
        </Score>
        <Grid>
        
        {this.state.tiles.map(tile=> (
         
          <Clicker
            id={tile.id}
            key={tile.id}
            image={tile.image}
            click={this.click}
            increment={this.increment}
            shuffle={this.shuffle}
            reset={this.reset}
            />
        )
        )}
        
        </Grid>
        </div>
        </Wrapper>
    )
  }
  }


export default App;

import React, { Component } from 'react';
import './App.css';
import Player from './Player'
import Images from './Img'


class App extends Component {


 state = {
   tab:['Pierre',
        'Feuille',
        'Ciseaux'
       ],
 }

 clickStart = () => {
  this.setState({
    playerRed:this.state.tab[Math.floor(Math.random()*3)],
    playerBlue:this.state.tab[Math.floor(Math.random()*3)]
  },() => {
    this.decideWinner()
  })
 }

 decideWinner = () => {
   const { playerRed, playerBlue } = this.state

   if(!playerRed) {return ""}

   if(playerRed === playerBlue){
     return('Egalité');
   }

   else if((playerRed === "Pierre" && playerBlue === "Ciseau") ||
      (playerRed === "Ciseau" && playerBlue === "Feuille") ||
      (playerRed === "Feuille" && playerBlue === "Pierre")) {
      return('Player Red Wins');
    }else { return('Player Blue Wins');
  }
}

 render() {

   return (
     <div>
     
     <div className='janken'>
     <div className="pl">
       <Player className ="player" name={ this.state.playerBlue } color='blue'/>
       <Images result={this.state.playerRed} className = "img"/>
       </div>
       <button  id="butt" className ="player" onClick={ this.clickStart }>START</button>
       <div className="pl">
       <Player className ="player" name={ this.state.playerRed } color='red'/>
       <Images result={this.state.playerBlue} className = "img"/>
       </div>
       </div>
       <h1>{this.decideWinner()}</h1>
       <div className="ed"></div>
       </div>
     
   );
 }
}

export default App;
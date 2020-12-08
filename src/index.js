import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './nbaPic.jpeg';

function handleClick(e){
  alert("Coucou");
}

const page =
  <div className="menu">
    <h1>Ma premiere 'NBA App' en React !</h1>
    <hr></hr>
    <h2>
      <ul>
        <li><button className="button" onClick={handleClick}>Equipes</button></li>
        <li><button className="button" onClick={handleClick}>Joueurs</button></li>
        <li><button className="button" onClick={handleClick}>Classements</button></li>
      </ul>
    
      <hr></hr>
    
      <div id="default"> <img src={Logo} alt="img" /> </div>
    
      <div>
        <br></br>
        <h1>Equipes </h1>
        <br></br>
        <br></br>
        <br></br>
        <div id="est">Est 
        <ul>
          <li><button className="button1">Atlanta Hawks</button></li>
          <li><button className="button1">Boston Celtics</button></li>
          <li><button className="button1">Milwaukee Bucks</button></li>
          <li><button className="button1">Philadelphie 76ers</button></li>
          <li><button className="button1">Indiana Pacers</button></li>
          <li><button className="button1">Toronto Raptors</button></li>
          <li><button className="button1">New York Knicks</button></li>
          <li><button className="button1">New York Nets</button></li>
          <li><button className="button1">Washington Wizards</button></li>
          <li><button className="button1">Cleveland Cavaliers</button></li>
          <li><button className="button1">Miami Heat</button></li>
          <li><button className="button1">Chicago Bulls</button></li>
          <li><button className="button1">Charlotte Hornets</button></li>
          <li><button className="button1">Orlando Magic</button></li>
          <li><button className="button1">Detroit Pistons</button></li>
        </ul>
        </div>
      </div>
    
      <div> 
        <div id="ouest">Ouest 
        <ul>
          <li><button className="button1">Los Angeles Lakers</button></li>
          <li><button className="button1">Los Angeles Clippers</button></li>
          <li><button className="button1">Phoenix Suns</button></li>
          <li><button className="button1">Houston Rockets</button></li>
          <li><button className="button1">Denver Nuggets</button></li>
          <li><button className="button1">Utah Jazz</button></li>
          <li><button className="button1">New Orleans Pelicans</button></li>
          <li><button className="button1">Dallas Mavericks</button></li>
          <li><button className="button1">San Antonio Spurs</button></li>
          <li><button className="button1">Minnessota Timberwolves</button></li>
          <li><button className="button1">Sacramento Kings</button></li>
          <li><button className="button1">Oklahoma City Thunders</button></li>
          <li><button className="button1">Golden State Warriors</button></li>
          <li><button className="button1">Memphis Grizzlies</button></li>
          <li><button className="button1">Portland Trail Blazers</button></li>
        </ul>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
      </div>

      <div>
        <h1>Joueurs</h1>
        <div> 
          Nom du joueur :  <input type="search" id="recherche-joueur"></input>
          <button>Rechercher</button> 
          {/* insérer recherche de joueurs*/}
        </div>
      </div>
    </h2>
  </div>;

ReactDOM.render(
  page,
  document.getElementById('root')
);



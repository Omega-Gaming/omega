import React from "react";
import "../styles/Lobby.css";
import gameCardImage from "../images/gameLogo.png";
const Lobby = () => {
  return (
    <div className="lobby-container">
      <div className="header">
        <h3>Lobby</h3>
        <input type="text" placeholder="Search for games" />
      </div>
      <div className="filters"></div>
      <div className="main">
        <div className="game-card">
          <div className="game-card-image">
            <img src={gameCardImage} alt="Game Card Image" />
          </div>
          <div className="game-card-info">
            <div className="game-card-title">Game Title</div>
            <div className="game-card-time">Start Time</div>
            <div className="game-card-price">Ticket price</div>
          </div>
          <div className="game-card-buttons">
            <div className="game-card-buy-ticket">
              <button>Buy Ticket</button>
            </div>
            <div className="game-card-rules">
              <span>Rules</span>
              <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;

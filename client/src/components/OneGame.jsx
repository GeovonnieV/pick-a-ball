import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import { Jumbotron, Container, Button } from "react-bootstrap";


const OneGame = (props) => {
    const [ game, setGame ] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/games/" + props.id)
            .then((res) => setGame(res.data))
            .catch((err) => console.log(err));
    }, []);

    const deleteGame = (e, gameId) => {
        axios
        .delete("http://localhost:8000/api/games/" + gameId)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
        
        return (
            <div className="widthClass">
            <div fluid class="card">
                <h2  class="card-header"> {game.sport} Game</h2>
                <p class="body">Sport: {game.sport}</p>
                <p class="text">City: {game.city}</p>
                <p class="text">State: {game.state}</p>
                <p class="text">Location: {game.location}</p>
                <p class="text">Players: {game.players}</p>
                <p class="text">Date: {(new Date(game.date)).toLocaleDateString("en-us")}</p>
                <p class="text">Time: {game.time}:00</p>


                <Link to="/">
                <button className="redButton"onClick ={ (e) => deleteGame(e, game._id) }>Delete</button>
                <button className="blueButton">Back</button>
                </Link>
                </div>
                </div>
        )
}

export default OneGame;
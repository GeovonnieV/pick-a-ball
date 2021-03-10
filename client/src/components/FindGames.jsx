import React, { useState, useEffect }from "react";
import NavbarComp from "./NavbarComp";
import { Form } from "react-bootstrap";
import axios from 'axios';

const FindGames = (e) => {
    const [ games, findGames ] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/games/" + games.sport)
            .then((res) => findGames(res.data))
            .catch((err) => console.log(err));
    }, []);
 
  return (
    <div>
      <NavbarComp />
      <div className="container">
        <h1 className="findHead">Find Games</h1>
        {/* search form */}
        <Form.Group className="findFormContainer">
          <Form.Control as="select" size="lg" >
            <option>Basketball</option>
            <option>Football</option>
            <option>Baseball</option>
            <option>Volleyball</option>
          </Form.Control>
        </Form.Group>
        <button onClick ={ (e) => findGames(e, games.sport) }>Search</button>
        {/* results */}
        <div className="resultsContainer">
  
        </div>
      </div>
    </div>
  )

  };


export default FindGames;
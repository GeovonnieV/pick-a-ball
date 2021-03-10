import {Router} from "@reach/router";
// css
import "./styles/app.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
// componetns
import Home from "./components/Home";
import CreateComp from "./components/CreateComp";
import UpdateGame from "./components/UpdateGame";
import OneGame from "./components/OneGame";
import LogReg from "./views/LogReg";
import FindGames from "./components/FindGames";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <CreateComp path="/createGame" />
        <UpdateGame path="/api/games/:id" />
        <OneGame path="/games/:id" />
        <LogReg path="/login" />
        <FindGames path="/findgames" />
      </Router>
    </div>
  );
}

export default App;

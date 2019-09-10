import React, {useState} from 'react';
import './App.css';
import CreateTeam from './components/CreateTeam.js'
import MakeTeam from './components/MakeTeam.js'


  function App() {
    const [teams, setTeams] = useState([
      {
        name: "DevOps",
        email: "DevOps@gmail.com",
        role: "Dev",
        body: " "
      }
    ]);
  
    return (
      <div className="App">
        <h1>My Team List </h1>
  
        <CreateTeam teams={teams} setTeams={setTeams} />
    
        <MakeTeam teams={teams} />
        
      </div>
    );
  }
  
  export default App;
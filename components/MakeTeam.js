import React from "react";

function makeTeam(props) {
  return (
    <div>
      {props.teams.map((team, index) => (
        <div className="teamList" key={index}>
          <h2>{team.name}</h2>
          <p>{team.email}</p>
          <p>{team.role}</p>
          <p>{team.body}</p>
        </div>
      ))}
    </div>
  );
}

export default makeTeam;
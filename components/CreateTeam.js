import React, { useState } from "react";


const CreateTeam = props => {
  const initialTeam = { name: "", email: "", role: "", body: ""};
  const [newTeam, setNewTeam] = useState(initialTeam);

  const handleChange = event => {
    setNewTeam({
      ...newTeam,
      [event.target.name]: event.target.value
    });
    console.log(event.target.name)
    console.log(event.target.value)
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!newTeam.name || !newTeam.role) {
      alert("Please fill out all fields!");
    } else {
      props.setTeams([newTeam, ...props.teams]);
      resetForm();
    }
  };

  const resetForm = () => {
    setNewTeam(initialTeam);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={newTeam.name}
      />

      <input
      type="email"
      name="email"
      placeholder="Email"
      onChange={handleChange}
      value={newTeam.email}
      />

      <input
      type="text"
      name="role"
      placeholder="Role"
      onChange={handleChange}
      value={newTeam.role}
      />

      <textarea className="textfield" name="body" onChange={handleChange} value={newTeam.body} />

      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default CreateTeam;
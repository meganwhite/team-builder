import React, { useState } from 'react';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState({name: "Scooby Doo",email: "woof@gmail.com", role: "Detective",imgUrl:"https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/20992941_10156238556155961_119237620566999832_n.jpg?_nc_cat=1&_nc_oc=AQl1EFkKWnp4l9SRuNIQaRVkxAF_PjNwnpTd0ykobscIw61sB2XFzUf4rjYflhOHuwA&_nc_ht=scontent-dfw5-1.xx&oh=4a564cede59d7d420c752712f701cce8&oe=5DA3195E"});
  

  
  
  return (
    <div className="App">
      <div className = "card">
        <img src={teamMember.imgUrl}/>
        <div className = "textContainer">
          <h1>{teamMember.name}</h1>
          <h2>{teamMember.role}</h2>
          <h2>{teamMember.email}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;

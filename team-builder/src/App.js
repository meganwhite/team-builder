import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [teamArray, setTeamArray] = useState([
    {name: "Scooby Doo",email: "woof@gmail.com", role: "Detective",imgUrl:"https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/20992941_10156238556155961_119237620566999832_n.jpg?_nc_cat=1&_nc_oc=AQl1EFkKWnp4l9SRuNIQaRVkxAF_PjNwnpTd0ykobscIw61sB2XFzUf4rjYflhOHuwA&_nc_ht=scontent-dfw5-1.xx&oh=4a564cede59d7d420c752712f701cce8&oe=5DA3195E"},
    {name: "Scooby Doo",email: "woof@gmail.com", role: "Detective",imgUrl:"https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/20992941_10156238556155961_119237620566999832_n.jpg?_nc_cat=1&_nc_oc=AQl1EFkKWnp4l9SRuNIQaRVkxAF_PjNwnpTd0ykobscIw61sB2XFzUf4rjYflhOHuwA&_nc_ht=scontent-dfw5-1.xx&oh=4a564cede59d7d420c752712f701cce8&oe=5DA3195E"}
  ]);
  

  
  
  return (
    <div className="App">
      {teamArray.map(member => 
            <div className = "card">
            <img src={member.imgUrl}/>
            <div className = "textContainer">
              <h1>{member.name}</h1>
              <h2>{member.role}</h2>
              <h2>{member.email}</h2>
            </div>
            <button className="editButton">Edit</button>
          </div>
        )}
        <Form teamArray = {teamArray} setTeamArray = {setTeamArray}/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  const names = ["Dimych", "Sveta", "Katya","Viktor", "Ignat", "Valera"]
  const users = [{id: 1,name:"Dimych"}, {id: 121,name:"Sveta"}, {id: 111,name:"Katya"}, {id:222,name:"Viktor"}, {id: 333,name:"Ignat"}, { id:4,name:"Valera"}]
const LiElements = users.map(u=> <li key={u.id}>{u.name}</li>)

  return (
    <div className="App">
<ul>

  {LiElements}

</ul>



    </div>
  );
}

export default App;

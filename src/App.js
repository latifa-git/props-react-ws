
import './App.css';

import Profile from './Profile/Profile';
function App() {
  const myelement = { fullName :"latifa",  bio:"mpse" , profession:"studiant" }

  return (
    <div className="App">
    <Profile myelementProps={myelement}> 
    <img className="image" src="/malina.jpg" alt="malina"  />
    </Profile>

    </div>
    
  );
  
}

export default App;

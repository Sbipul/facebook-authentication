import './App.css';
import initAuth from './Firebase/init';
import { FacebookAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import { useState } from 'react';


initAuth()
const auth = getAuth();

const faceProvider = new FacebookAuthProvider();

function App() {
  const [user,setUser] = useState({})

const handleFacebook = () => {
  signInWithPopup(auth, faceProvider)
  .then(res => {
    console.log(res.user)
    const {displayName,email,photoURL} = res.user
    const newUser = {
      name : displayName,
      mail : email,
      img : photoURL
    }
    setUser(newUser)
  })
}


  return (
    <div className="App">
      {
        user.name && <div>
          <p>{user.name}</p>
          <img src={user.img} alt="" />
          <h3>{user.mail}</h3>
        </div>
      }
      {
        user.name ? <button >sign out</button> : <button style={{margin:'150px'}} onClick={handleFacebook}>facebook authentication</button>
      }
      
    </div>
  );
}

export default App;

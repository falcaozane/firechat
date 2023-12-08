import React from 'react'
import { Auth, Provider } from "../firebase-config"
import { useAuthState } from "react-firebase-hooks/auth"
import { signInWithPopup } from 'firebase/auth'
import { signOut } from 'firebase/auth';
import GoogleButton from 'react-google-button'

const Navbar = () => {
  const [user] = useAuthState(Auth)

  const signIn = async () => {
    signInWithPopup(Auth, Provider)
      .then((res) => console.log(res))
      .catch(err => console.log(err))
  }

  const logOut = async () => {
    signOut(Auth)
      .then(() => alert("you are now logged out"))
      .catch(err => console.log(err))
  }

  return (
    <div className='header'>
      <h3>FireChat</h3>
      {!user ?
        <GoogleButton onClick={signIn}/>
        :
        <button onClick={logOut}>Logout</button>
      }
    </div>
  )
}

export default Navbar
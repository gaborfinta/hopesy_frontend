import GoogleButton from 'react-google-button'
import React, { useState, useEffect } from 'react';
import { signInWithGoogle, auth } from '../../firebase/firebase';
import Button from '@material-ui/core/Button';

import { registerUser, getUserById } from '../api_helpers/user';

export default function LoginGoogleCard(props) {

    const [idToken, setIdToken] = useState(null);

    function signIn() {
      signInWithGoogle()
    }
  
    function signOut() {
      auth.signOut()
    }

    async function registerData(autenticatedUser) {
      // Check if user already exists in User Service
      let user = await getUserById(autenticatedUser.uid);
      if (user !== undefined) {
        return user;
      }

      // User does not exist yet, register
      try {
        await registerUser(
          autenticatedUser.uid,
          autenticatedUser.displayName,
          autenticatedUser.photoURL
        );
      } catch (error) {
        if (error.message === "400") {
          // User already exists, something weird has happened
        }
        else {
          throw error;
        }
      }

      // Get details of newly registered user from the user service
      user = await getUserById(autenticatedUser.uid);
      return user;

    };
    
  
    useEffect(() => {
      auth.onAuthStateChanged(async nextUser => {
  
        if (auth.currentUser) {
          setIdToken(await auth.currentUser.getIdToken())
          let user = await registerData(auth.currentUser)
          // user contains the user service details of the logged in user
          props.setUser(user)
        } else {
          setIdToken(null)
        }
      })
    }, [])


    return (
        <div>
            <GoogleButton
                type="dark"
                label="Belépés Google fiókkal"
                onClick={signIn}>
            /></GoogleButton>
            <Button onClick={signOut}>Kilépés</Button>

        </div>
    )

}

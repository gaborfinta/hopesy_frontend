import GoogleButton from 'react-google-button'
import React, { useState, useEffect } from 'react';
import { signInWithGoogle, auth } from '../../firebase/firebase';
import Button from '@material-ui/core/Button';

import { registerUser } from '../api_helpers/user';

import examples from '../api_helpers/example_calls';

export default function LoginGoogleCard() {

    const [idToken, setIdToken] = useState(null);

    function signIn() {
      signInWithGoogle()
    }
  
    function signOut() {
      auth.signOut()
    }

    async function registerData(autenticatedUser) {
      try {
        let uid = await registerUser(
          autenticatedUser.uid,
          autenticatedUser.displayName,
          autenticatedUser.photoURL
        );
      } catch (error) {
        if (error.message === "400") {
          // User already exists
        }
        else {
          throw error;
        }
      }
    };
    
  
    useEffect(() => {
      auth.onAuthStateChanged(async nextUser => {
  
        if (auth.currentUser) {
          setIdToken(await auth.currentUser.getIdToken())
          console.log("RegiszterData megihivoodiik")
          await examples();
          registerData(auth.currentUser)
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

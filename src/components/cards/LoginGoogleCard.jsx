import GoogleButton from 'react-google-button'
import React, { useState, useEffect } from 'react';
import { signInWithGoogle, auth } from '../../firebase/firebase';
import Button from '@material-ui/core/Button';

export default function LoginGoogleCard() {

    const [idToken, setIdToken] = useState(null);

    function signIn() {
      signInWithGoogle()
    }
  
    function signOut() {
      auth.signOut()
    }

    function registerData(autenticatedUser) {
      fetch('https://us-central1-hopesy-16904.cloudfunctions.net/user/',
        {
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            name: autenticatedUser.displayName,
            id: autenticatedUser.uid,
            profile_pic: autenticatedUser.photoURL
          })
        }).then(response => response.json())
        .then(data => console.log(`Data: ${data}`));
    };
    
  
    useEffect(() => {
      auth.onAuthStateChanged(async nextUser => {
  
        if (auth.currentUser) {
          setIdToken(await auth.currentUser.getIdToken())
          console.log("RegiszterData megihivoodiik")
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

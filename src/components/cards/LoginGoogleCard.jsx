import GoogleButton from 'react-google-button'
import React, { useState, useEffect } from 'react';
import { signInWithGoogle, auth } from '../../firebase/firebase';

export default function LoginGoogleCard() {

    const [idToken, setIdToken] = useState(null);
    const [uid, setUid] = useState(null);
  
    function signIn() {
      signInWithGoogle()
    }
  
    function signOut() {
      auth.signOut()
    }
  
    useEffect(() => {
      auth.onAuthStateChanged(async nextUser => {
  
        if (auth.currentUser) {
          setIdToken(await auth.currentUser.getIdToken())
          setUid(auth.currentUser.uid)
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
        </div>
    )

}

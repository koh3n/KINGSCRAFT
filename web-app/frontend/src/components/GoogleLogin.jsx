import React, { useEffect, useState } from "react";
import firebase from "../firebase"

const GoogleLogin = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsub();
    })

    const handleGoogleLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            const result = await firebase.auth().signInWithPopup(provider);
            console.log(result.user);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        // renders if user is not logged in
        <div>
            {!user ? (
                <button onClick={handleGoogleLogin}>Sign in with Google</button>
            ) : null}
        </div>
    );
};

export default GoogleLogin;

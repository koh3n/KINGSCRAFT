import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserAccount from '../components/UserAccount.jsx';
import ModelViewer from '../pages/ModelViewer.jsx';
import { writeToFileFromPresignedUrl } from '../util/utils.js';
import firebase from "../firebase/firebase";
import { get_object } from '../util/utils.js';

export default function Viewer() {
    const [user, setUser] = useState(null);
    const { name } = useParams();
    let userId = "";

    useEffect(() => {
        const unsub = firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
            userId = get_object(firebase.auth().currentUser.uid, name);
          } else {
            setUser(null);
          }
        });

        return () => unsub();
    }, []);
    writeToFileFromPresignedUrl(userId, "./temp.obj")

    return (
        <>
            <div>
                <UserAccount />
                <ModelViewer />
            </div>
        </>
    );
}

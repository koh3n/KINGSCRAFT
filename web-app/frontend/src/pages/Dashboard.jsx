import React from "react";
import GoogleLogin from '../components/GoogleLogin';
import UserAccount from '../components/UserAccount';
import '../styles/Dashboard.css'

const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <div className='left-div'>
                <div className='button-cont'>
                    <UserAccount />
                    <GoogleLogin />
                    <button>`</button>
                </div>
                </div>
            </div>
        </>
    )

    // 
}

export default Dashboard
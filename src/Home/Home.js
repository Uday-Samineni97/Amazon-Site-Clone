import React from 'react'
import './Home.css';
import amazonprime from "../Images/amazonprime.png";
function Home() {
    return (
        <div className="home">
            <div className="home_container">
               <img className="home_container_img" src={amazonprime} />
            </div>
        </div>
    )
}

export default Home

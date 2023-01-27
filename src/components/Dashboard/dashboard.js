import { useState, useEffect } from "react";
import "../styles/Dashboard/dashboard.scss";
import MessageBox from "./messageBox";

import ReplyModal from "../Reply/replyModal";

import Tweets from "./tweet";


const Dashboard = ({user, setUser}) => {

    const currentUser = useState(JSON.parse(localStorage.getItem('user')));
    const [open, setOpen] = useState(false);
    const [currentTweet, setCurrentTweet] = useState('');

    return(
        <div className="dashboard-wrapper">
            <ReplyModal open={open} setOpen={setOpen} currentTweet={currentTweet}/>
            <div className="dashboard-header">
                <h1>Home</h1>
                <div className="feed">
                    <a>For you</a>
                    <a>Following</a>
                </div>
            </div>
            
            
            <div className="content">
                <Tweets currentUser={currentUser}  setOpen={setOpen} setCurrentTweet={setCurrentTweet}/>
            </div>
        </div>

    )

}

export default Dashboard
import { useState, useEffect, useRef } from "react";
import { BsHeart, BsReply } from "react-icons/bs";
import ReplyModal from "../Reply/replyModal";

import avatar from "../assets/avatar.webp";

import MessageBox from "./messageBox";
import axios from "axios";



const Tweets  = ({currentUser, setOpen, setCurrentTweet, setCurrentUser}) => {

    const tweetBox = useRef(null);

    const [tweets, setTweets] = useState([]);

    useEffect(() => {

        async function getTweets(){

            const response = await fetch('http://localhost:5000/api/tweets');
            const data = await response.json();

            if(response.ok){

                setTweets(data);

            }else{

                console.log('An error occurred when trying to retrieve tweets');
            }
  
        }
        getTweets();
    },[tweets])

    useEffect(() =>{
        console.log(tweetBox);


    }, [])

  

    async function like(tweet){


        await fetch(`http://localhost:5000/api/${tweet._id}/like`, {
            method: "PUT",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({likes: tweet.likes+=1})
            

        })
    }

    function reply(tweet){

        setOpen(true)

        setCurrentTweet(tweet)

        console.log(tweet.img)

    }

    
    return (
        <div className="tweet-container">
           <div className="tweet-header"> <span className="avatar"><img src={currentUser.img} alt="" /></span><h1>{currentUser.email}</h1></div>
            <MessageBox user={currentUser}/>
            {
                tweets.reverse().map((tweet, index) => {
                    return <div className="tweet-wrapper" key={index}>
                         
                        <div className="tweet-header">
                            <span className="avatar"><img src={tweet.user_img} alt="" /></span><h1>{tweet.user}</h1>
                            
                        </div>
                        <div  className="tweet-content">
                            <p >{tweet.content}</p>
                        </div>
                        <div className="element-row">
                            <div className="like-row">
                            <BsHeart className="like" onClick={() => like(tweet)} size="30"/>
                            <span>{tweet.likes || 0}</span>
                            </div>
                            <div className="reply-row">
                            <BsReply onClick={() => reply(tweet)}className="reply"size="30"/>
                            
                            <span>{tweet.replies.length}</span>

                            
                            </div>
                            
    
                        </div>
                        <div className="replies">
                                {tweet.replies.map((reply, index) => {
                                    return <div key={index}>
                                    <div className="tweet-header"><span className="avatar"><img src={reply.img} /></span><h1>{reply.user}</h1></div>
                                    <div className="tweet-content"><p>{reply.content}</p></div>
                                    </div>
                                    
                                })}
                            </div>
                        
                    </div>
                })
            }
           

        </div>
    )

}


export default Tweets;
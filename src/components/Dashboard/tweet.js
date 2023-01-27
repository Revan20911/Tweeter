import { useState, useEffect, useRef } from "react";
import { BsHeart, BsReply } from "react-icons/bs";
import ReplyModal from "../Reply/replyModal";

import MessageBox from "./messageBox";

const Tweets  = ({currentUser, setOpen, setCurrentTweet}) => {

    const replyList = useRef(null);

    const [tweets, setTweets] = useState([{
        user:'',
        content:'',
        likes: 0,
        replies: [],
        
    }]);

    const [likes, setLikes] = useState(0);


    function viewReplies(){

        const span = replyList.current;

        span.className="replies-visible";
    }



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
    })

    async function like(tweet){

        setLikes(tweet.likes+=1)

        const Num = {likes};


        


        const response = await fetch(`http://localhost:5000/api/${tweet._id}/like`, {
            method: "PUT",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(Num)

        })

    }

    function reply(tweet){

        setOpen(true)

        setCurrentTweet(tweet)

        console.log(tweet)


    }

    return (
        <div className="tweet-container">
            <MessageBox user={currentUser}/>
            {
                tweets.reverse().map((tweet, index) => {
                    return <div  className="tweet-wrapper" key={index}>
                         
                        <div className="tweet-header">
                            <h1>{tweet.user}</h1>
                            
                        </div>
                        <div  className="tweet-content">
                            <p >{tweet.content}</p>
                        </div>
                        <div onClick={() => viewReplies()} className="element-row">
                            <div className="like-row">
                            <BsHeart className="like" onClick={() => like(tweet)} size="30"/>
                            <span>{tweet.likes || 0}</span>
                            </div>
                            <div className="reply-row">
                            <BsReply onClick={() => reply(tweet)}className="reply"size="30"/>
                            
                            <span>{tweet.replies.length}</span>

                            <button onClick={viewReplies()}>Replies</button>
                            </div>
                            
    
                        </div>
                        <div className="replies" ref={replyList}>
                                {tweet.replies.map((reply, index) => {
                                    return <div key={index}>{reply.user}</div>
                                })}
                            </div>
                        
                    </div>
                })
            }
           

        </div>
    )

}

export default Tweets;
import axios from "axios";
import { useState} from "react";
import { BsImage, BsEmojiSmile } from "react-icons/bs";
import { Form } from "react-router-dom";

const MessageBox = ({user}) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    

    const [tweet, setTweet] = useState({
        user: user.email,
        user_img: user.img,
        content: '',
    })

    function onChange(value){
        
        return setTweet((prev) =>{
            return {...prev, ...value}
        })

        
    }

    async function createMessage(e){


        e.preventDefault();

        

        const newTweet = {...tweet}

        const tweetData = new FormData();

        tweetData.append('user', newTweet.user)
        tweetData.append('content', newTweet.content)
        tweetData.append('user_img', newTweet.user_img)

        console.log(newTweet);

        const response = await axios.post('http://localhost:5000/api/tweets/post', tweetData, config );

        

        if(!response.ok){

            console.log( 'Error occured while sending a message')

        }

    }


    return(
        <div className="message-box-wrapper">
            <form>
                <textarea type='text' placeholder="What's happening?" value={tweet.content} onChange={(e) => onChange({content: e.target.value})}/>
            </form>
            <div className="row">
            <BsImage className="icon" size="30"/>
            <BsEmojiSmile className="icon" size="30"/>
            <button onClick={(e) => createMessage(e)}>Send Tweet</button>
        
            </div>
            
        </div>
    )

}

export default MessageBox;
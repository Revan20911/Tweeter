import { useState} from "react";
import { BsImage, BsEmojiSmile } from "react-icons/bs";

const MessageBox = ({user}) => {

    

    const [tweet, setTweet] = useState({
        user: user[0].email,
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

        const response = await fetch('http://localhost:5000/api/tweets/post', {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(newTweet)

        })

        

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
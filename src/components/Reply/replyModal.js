import MessageBox from "../Dashboard/messageBox"
import {useState} from 'react';
import { Box, Modal } from "@mui/material";
import { BsX } from "react-icons/bs";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    opacity: "1.0",
    z: "9999",
    outline: "none",
    color: "black",
    
    
    
  };
  
const ReplyModal = ({open, setOpen, currentTweet}) => {

    
    const [reply, setReply] = useState({
        user: localStorage.getItem('user'),
        content: '',
    })

    function close (){

        setOpen(false);
    }

    function onChange(value){
        return setReply((prev) =>{
            return {...prev, ...value}
        })
    }

    function sendReply(){

        const newReply = {...reply}

        const id = currentTweet._id;

        console.log(open)

        const replyArray = [...currentTweet.replies, newReply]

        try{

            fetch(`http://localhost:5000/api/${id}/reply`, {
            method: "PUT",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(replyArray),
                            
            });


        }catch(err){
            console.log(err);
            
        }finally{
            close();

        }   
    }

    
    return(

        <div>

        <Modal disableEnforceFocus style={{opacity: "1"}} open={open}>
            <Box sx={style}>
                <div><BsX style={{cursor: "pointer"}} onClick={() => close()} size="30"/></div>
                <div className="modal">
                    <h1>{currentTweet.user}</h1>
                    <p>{currentTweet.content}</p>
                    <form>
                        <textarea value={reply.content} onChange={(e) => onChange({content: e.target.value})} placeholder="Tweeeet your reply"></textarea>
                    </form>
                    <button onClick={() => sendReply()}>Send Reply</button>
                </div>

            </Box>
        </Modal> 

        </div>
    )
}

export default ReplyModal;
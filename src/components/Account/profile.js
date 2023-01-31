import "../styles/Account/profile.scss"

import { useState } from "react"
import { BsNodeMinus } from "react-icons/bs"
import axios from "axios"

const Profile = () => {
    

    const user = JSON.parse(localStorage.getItem('user'))

    const [changedUser, setChangedUser] = useState(user)

    function onChange(value){
        return setChangedUser((prev) =>{
            return {...prev, ...value}
        })
    }

    async function updateUser(){

        

        const formData = new FormData();

        formData.append('img', changedUser.img)
        formData.append('email', changedUser.email)
        formData.append('password', changedUser.password)

        axios.put('http://localhost:5000/api/user/update', formData, {
        }).then(res => {
            console.log(res)
        })
    }

    return(
        <div className="profile-wrapper">
            <div>
            <h1>User Settings</h1>
            <form  enctype="multipart/form-data">
                <label>Username</label>
                <input value={changedUser.email} onChange={(e) => onChange({email: e.target.value})}></input>
                <label>Password</label>
                <input></input>
                <label>Bio</label>
                <textarea/>
                <label>Profile Picture</label>
                <input type="file" onChange={(e) => onChange({img: e.target.files[0], img_name: e.target.files[0].name})}/>
            </form>
            <button onClick={()=> updateUser()}>Save Settings</button>
            </div>

        </div>
    )
}

export default Profile;
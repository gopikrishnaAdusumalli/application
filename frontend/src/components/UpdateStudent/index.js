


import './index.css'

import React ,{useState} from 'react'

import { useNavigate ,useParams} from 'react-router-dom'

import axios from 'axios'

function UpdateStudent() {
    const [name,setName] = useState("")
    const[email,setEmail] = useState("")

    const {id} = useParams()

    const navigate = useNavigate()

    function handleData(event){
        event.preventDefault()
        axios.put("http://localhost:3005/update/"+id , {name,email})
        .then(res => {
            console.log(res)
            navigate("/")
        })
        .catch(err => console.log(err))
    }
    
  return (
    <div className = "create-bg-container">
        <form className = "create-container" onSubmit = {handleData}>
            <h1 className = "create-heading">Update Student</h1>
            <div className = "user-name-container">
                <label  htmlFor = 'name' className = "user-name-label">Name</label>
                <input type = "text" placeholder='Enter a username' className='user-name' id = "name" value = {name} onChange = {e => setName(e.target.value )} />
            </div>
            <div className = "user-name-container">
                <label  htmlFor='email' className = "user-name-label">Email</label>
                <input type = "email" placeholder='Enter a Emali' className='user-name' id = "email" value = {email} onChange = {e => setEmail(e.target.value )} />
            </div>
            <button type = "submit" className = "submit-button">Update</button>


        </form>

        
      
    </div>
  )
}


export default UpdateStudent

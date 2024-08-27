

import './index.css'

import React ,{useState} from 'react'

import { useNavigate } from 'react-router-dom'

import axios from 'axios'

function CreateStudent() {
    const [name,setName] = useState("")
    const[email,setEmail] = useState("")

    const navigate = useNavigate()

    function handleData(event){
        event.preventDefault()
        axios.post("http://localhost:3005/create",{name,email})
        .then(res => {
            console.log(res)
            navigate("/")
        })
        .catch(err => console.log(err))
    }
  return (
    <div className = "create-bg-container">
        <form className = "create-container" onSubmit = {handleData}>
            <h1 className = "create-heading">Add Student</h1>
            <div className = "user-name-container">
                <label  htmlFor = 'name' className = "user-name-label">Name</label>
                <input type = "text" placeholder='Enter a username' className='user-name' id = "name" value = {name} onChange = {e => setName(e.target.value )} />
            </div>
            <div className = "user-name-container">
                <label  htmlFor='email' className = "user-name-label">Email</label>
                <input type = "email" placeholder='Enter a Emali' className='user-name' id = "email" value = {email} onChange = {e => setEmail(e.target.value )} />
            </div>
            <button type = "submit" className = "submit-button">Submit</button>


        </form>

        
      
    </div>
  )
}

export default CreateStudent

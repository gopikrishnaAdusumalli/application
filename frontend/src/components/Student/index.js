
import './index.css'

import React,{ useState,useEffect} from 'react'


import axios from 'axios'
import { Link } from 'react-router-dom'

function Student(){
    const [students,setStudents] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3005/")

        .then(result => setStudents(result.data))
        .catch(error => console.log(error))


    },[])

    const  handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:3005/student/" + id)
            window.location.reload()

        }
        catch(err){
            console.log(err)


        }


    }

    
    return (
        <div className = "students-bg-container">
        <div className = "students-container">
            <h1 className = "students-heading">Students</h1>
            <Link to = '/create'><button className = "add-button">Add +</button></Link>
            <table className = 'table'>
                <thead>
                    <tr className = "table-row">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                    </tr>

                </thead>
                <tbody >

                    {students.map((data,i) => (
                        <tr className = "tbody-row" key = {i}>
                        <td>{data.Name}</td>
                        <td>{data.Email}</td>
                        <td>
                            <Link to = {`/update/${data.ID}`}><button className = "update-button">Update</button></Link>
                            <button className = "delete-button" onClick = {e => handleDelete(data.ID)}>Delete</button>
                        </td>
             
                    </tr>

                    ))}
                    
                </tbody>

            </table>

        </div>

        </div>


    )
}

export default Student
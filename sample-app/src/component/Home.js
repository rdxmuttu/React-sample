import React, { useState } from 'react'
import { addUserDetails } from '../apis/sampleApi';

const Home = () => {
    const [idNum, setIdNum] = useState(0);
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            id: idNum,
            userName: name,
            mailId: mail
        }

        addUserDetails(user).then(console.log("user added")).catch(error => console.log(error))

    }


    return (

        <form style={{ "width": "500px", "margin": "auto" }} onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="ID">Id</label>
                <input type="number" className="form-control" id="UserId" placeholder="Id" onChange={(e) => setIdNum(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="name">UserName</label>
                <input type="text" className="form-control" id="UserName" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setMail(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Home

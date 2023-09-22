import React, { useState, useEffect, useRef } from 'react';
import { addUserDetails, usersample } from '../apis/sampleApi';
import EmployeeTable from './EmployeeTable';

const Home = () => {
  const [idNum, setIdNum] = useState(0);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [employees, setEmployees] = useState([]);

  // Create a ref to the form element
  const formRef = useRef(null);

  useEffect(() => {
    // Load employee data when the component mounts
    loadEmployeeData();
  }, []);

  const loadEmployeeData = async () => {
    try {
      const data = await usersample();
      setEmployees(data);
    } catch (error) {
      console.error('Error loading employee data', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      id: idNum,
      userName: name,
      mailId: mail
    };

    try {
      const response = await addUserDetails(user);
      console.log('User added:', response);

      // Use formRef to reset the form
      formRef.current.reset();

      // Refresh the employee data after adding a new user
      loadEmployeeData();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleClear = () => {
    // Use formRef to reset the form
    setIdNum(0);
    setName("");
    setMail("");
  };

  return (
    <div>
      <form ref={formRef} style={{ "width": "500px", "margin": "auto" }} onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="ID">Id</label>
          <input type="number" className="form-control" id="UserId" placeholder="Id" value={idNum} onChange={(e) => setIdNum(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="name">UserName</label>
          <input type="text" className="form-control" id="UserName" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={mail} onChange={(e) => setMail(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button>
      </form>
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default Home;

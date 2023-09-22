import React from 'react';

const EmployeeTable = ({ employees }) => {
  if (!employees || employees.length === 0) {
    return <p>No employees to display.</p>;
  }
  return (
    <div>
      <h2>Employee List</h2>
      {employees.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.userName}</td>
                <td>{employee.mailId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees to display.</p>
      )}
    </div>
  );
};

export default EmployeeTable;
